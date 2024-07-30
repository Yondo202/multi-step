"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { type TSelectPlan } from "./SelectPlan";
import { PlanChoices, PickAddChoices } from "../MenuAsset";

const Summary = ({ currentStep }: { currentStep: string }) => {
  const router = useRouter();
  const [stepTwo, setStepTwo] = useState<TSelectPlan>({} as TSelectPlan);
  const [stepThree, setStepThree] = useState<string[]>([]);

  const [totalPrice, setTotalPrice] = useState({
    amount_monthly: 0,
    amount_yearly: 0,
  });

  useEffect(() => {
    const Step2: any = localStorage.getItem("step-2");

    if (Step2 !== null) {
      setStepTwo(JSON.parse(Step2));
    }

    const Step3: any = localStorage.getItem("step-3");

    if (Step3 !== null) {
      const parsed = JSON.parse(Step3);

      const filtered = PickAddChoices.filter((item) =>
        parsed.some((el: string) => el === item.title)
      );

      setTotalPrice({
        amount_monthly: filtered.reduce((a, b) => a + b.amount_monthly, 0),
        amount_yearly: filtered.reduce((a, b) => a + b.amount_yearly, 0),
      });

      setStepThree(parsed);
    }
  }, [currentStep]);

  return (
    <div className="h-full flex flex-col justify-between">
      <div className="mb-10">
        <div className="bg-primary/5 rounded-lg py-5 space-y-4 mb-6">
          <div className="flex justify-between items-center border-b border-primary/55 pb-4 px-5 ">
            <div className="flex flex-col">
              <span className="font-medium mb-0.5">{stepTwo?.choice}</span>
              <span
                onClick={() => router.push(`/2`)}
                className="text-muted-foreground underline cursor-pointer hover:text-primary text-sm"
              >
                Change
              </span>
            </div>
            <div className="font-medium">
              ${" "}
              {
                PlanChoices.find((item) => item.title === stepTwo?.choice)?.[
                  stepTwo?.duration === "monthly"
                    ? `amount_monthly`
                    : "amount_yearly"
                ]
              }
            </div>
          </div>

          {stepThree?.map((item, index) => {
            const foundItem = PickAddChoices.find(
              (element) => element?.title === item
            );

            return (
              <div
                key={index}
                className="flex justify-between text-muted-foreground px-5 pt-4 font-medium"
              >
                <span className="mb-1">{item}</span>
                <div className="font-medium text-primary/70">
                  +${" "}
                  {
                    foundItem?.[
                      stepTwo?.duration === "monthly"
                        ? `amount_monthly`
                        : "amount_yearly"
                    ]
                  }
                  /{stepTwo?.duration === "monthly" ? `mo` : `yr`}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mb-2 px-5 flex justify-between items-center font-medium">
          <span className="text-muted-foreground">
            Total{" "}
            {`(per ${stepTwo?.duration === "monthly" ? `month` : `year`})`}
          </span>
          <span className="text-secondary font-semibold text-base">
            ${" "}
            {totalPrice?.[
              stepTwo?.duration === "monthly"
                ? `amount_monthly`
                : "amount_yearly"
            ] +
              (PlanChoices.find((item) => item.title === stepTwo?.choice)?.[
                stepTwo?.duration === "monthly"
                  ? `amount_monthly`
                  : "amount_yearly"
              ] ?? 0)}
            /{stepTwo?.duration === "monthly" ? `mo` : `yr`}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between w-full bg-card max-sm:fixed max-sm:left-0 max-sm:bottom-0 max-sm:px-8 max-sm:py-3 max-sm:border-t">
        <button
          className="bg-card text-foreground/60 px-6 h-9 rounded-md font-medium border hover:border-border "
          onClick={() => router.push(`/${+currentStep - 1}`)}
        >
          Go Back{" "}
        </button>
        <button
          className="bg-secondary text-primary-foreground px-6 h-9 rounded-md font-medium hover:bg-secondary/80"
          onClick={() => {
            localStorage.setItem("step-final", "done");
            router.push(`/${+currentStep + 1}`);
          }}
        >
          Confirm{" "}
        </button>
      </div>
    </div>
  );
};

export default Summary;
