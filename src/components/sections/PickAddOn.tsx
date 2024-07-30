"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckIcon } from "../svg";
import { PickAddChoices } from "../MenuAsset"; 


const PickAddOn = ({ currentStep }: { currentStep: string }) => {
  const router = useRouter();
  const [isError, setIsError] = useState(false);
  const [durationType, setDurationType] = useState("");
  const [checkedList, setCheckedList] = useState<string[]>([]);

  useEffect(() => {
    const Item: any = localStorage.getItem("step-3");

    if (Item !== null) {
      setCheckedList(JSON.parse(Item));
    } else {
      localStorage.setItem("step-3", JSON.stringify([]));
    }
    const Type = localStorage.getItem("step-2");
    if (Type !== null) {
      setDurationType(JSON.parse(Type)?.duration);
    }
  }, [currentStep]);

  const submitHandler = () => {
    if (checkedList.length === 0) {
      setIsError(true);
      return;
    }
    router.push(`/${+currentStep + 1}`);
  };

  return (
    <div
      //   onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col justify-between gap-8 h-full max-sm:pb-6"
    >
      <div
        className={`space-y-4 relative  rounded-md ${
          isError ? `ring-red-500 ring-1 ring-offset-8` : ``
        }`}
      >
        {isError && (
          <div className="absolute -top-5 right-0 bg-card z-10 px-2 text-red-500">
            Та багадаа 1 сонголт хийнэ үү
          </div>
        )}
        {PickAddChoices?.map((Item, index) => {
          return (
            <button
              key={index}
              type="button"
              className={`flex items-center justify-between w-full rounded-lg border border-primary/30 cursor-pointer hover:bg-primary/5 p-5 transition-all max-sm:p-3 max-sm:py-3.5 ${
                checkedList?.some((item) => item === Item.title)
                  ? `border-secondary bg-primary/5`
                  : ``
              }`}
              onClick={() => {
                setIsError(false)
                setCheckedList((prev: string[]) => {
                  const found = prev.find((item) => item === Item.title);
                  if (found) {
                    const filtered = prev.filter((item) => item !== Item.title);
                    localStorage.setItem("step-3", JSON.stringify(filtered));
                    return filtered;
                  }

                  const final = [...prev, Item.title];
                  localStorage.setItem("step-3", JSON.stringify(final));
                  return final;
                });
              }}
            >
              <div className="flex items-center gap-5 max-sm:gap-3">
                <div
                  className={`border border-primary/40 w-5 h-5 text-2xl rounded-md bg-card shadow-sm flex items-center justify-center ${
                    checkedList?.some((item) => item === Item.title)
                      ? `bg-secondary`
                      : ``
                  }`}
                >
                  <CheckIcon
                    className={`scale-0 transition-all ${
                      checkedList?.some((item) => item === Item.title)
                        ? `scale-100`
                        : ``
                    }`}
                  />
                </div>
                <div className="flex flex-col items-start">
                  <div className="text-[15px] font-semibold mb-0.5 max-sm:text-sm">
                    {Item.title}
                  </div>
                  <div className="text-muted-foreground text-start text-sm max-sm:text-xs">
                    {Item.description}
                  </div>
                </div>
              </div>

              <div className="text-secondary">
                +${" "}
                <span className="font-medium">
                  {durationType === "monthly"
                    ? `${Item.amount_monthly}/mo`
                    : `${Item.amount_yearly}/yr`}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="flex items-center justify-between w-full bg-card max-sm:fixed max-sm:left-0 max-sm:bottom-0 max-sm:px-8 max-sm:py-3 max-sm:border-t">
        <button
          className="bg-card text-foreground/60 px-6 h-9 rounded-md font-medium border hover:border-border"
          type="button"
          onClick={() => router.push(`/${+currentStep - 1}`)}
        >
          Go Back{" "}
        </button>
        <button
          className="bg-primary text-primary-foreground px-6 h-9 rounded-md font-medium hover:bg-primary/80"
          onClick={() => submitHandler()}
          type="button"
        >
          Next Step{" "}
        </button>
      </div>
    </div>
  );
};

export default PickAddOn;
