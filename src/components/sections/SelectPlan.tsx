"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { Switch } from "../Switch";
import { PlanChoices } from "../MenuAsset";

export type TSelectPlan = {
  choice: "Arcade" | "Advanced" | "Pro";
  duration: "monthly" | "yearly";
  __is_validated: boolean;
};

// yearly_discount:'2 months free'
const SelectPlan = ({ currentStep }: { currentStep: string }) => {
  const router = useRouter();
  const form = useForm<TSelectPlan>({
    defaultValues: {
      choice: "Arcade",
      duration: "monthly",
      __is_validated: true,
    },
  });

  const states = form.watch();

  useEffect(() => {
    const Item: any = localStorage.getItem("step-2");
    if (Item !== null) {
      form.reset(JSON.parse(Item));
    } else {
      localStorage.setItem(
        "step-2",
        JSON.stringify(states)
      );
    }
  }, []);

  useEffect(() => {
    if (form.formState.isDirty) {
      localStorage.setItem(
        "step-2",
        JSON.stringify(states)
      );
    }
  }, [states, form.formState.isDirty]);

  const onSubmit = (fdata: TSelectPlan) => {
    localStorage.setItem( "step-2", JSON.stringify(fdata));

    router.push(`/${+currentStep + 1}`);
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col justify-between gap-8 h-full"
    >
      <div>
        <Controller
          control={form.control}
          name="choice"
          render={({ field }) => {
            return (
              <div className="grid grid-cols-3 gap-5 mb-8 max-sm:grid-cols-1">
                {PlanChoices?.map((Item, index) => {
                  return (
                    <div
                      key={index}
                      className={`rounded-lg border border-primary/30 cursor-pointer hover:bg-primary/5 p-5 transition-all max-sm:flex max-sm:gap-4 ${
                        field.value === Item.title
                          ? `border-secondary ring-1 ring-secondary bg-primary/5`
                          : ``
                      }`}
                      onClick={() => field.onChange(Item.title)}
                    >
                      <div
                        className={`${Item.bg_color} w-10 h-10 mb-14 rounded-full flex items-center justify-center max-sm:mb-0`}
                      >
                        <Item.icon className="w-7 h-7" />
                      </div>

                      <div className="flex flex-col">
                        <div className="text-lg font-semibold max-sm:text-base">
                          {Item.title}
                        </div>
                        <div className="text-muted-foreground font-normal mb-1.5">
                          $
                          {states.duration === "monthly"
                            ? `${Item.amount_monthly}/mo`
                            : `${Item.amount_yearly}/yr`}
                        </div>

                        <div className="font-medium">
                          {states.duration === "yearly" ? "2 months free" : ``}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          }}
        />

        <Controller
          control={form.control}
          name="duration"
          render={({ field }) => {
            return (
              <div className="bg-primary/5 rounded-lg flex items-center justify-center py-3.5 gap-8 font-medium">
                <span
                  className={`cursor-pointer ${
                    states.duration === "yearly"
                      ? `text-muted-foreground`
                      : `text-primary`
                  }`}
                  onClick={() => field.onChange("monthly")}
                >
                  Monthly
                </span>
                <Switch
                  checked={field.value === "yearly"}
                  onCheckedChange={(event) => {
                    field.onChange(event ? "yearly" : "monthly");
                  }}
                />
                <span
                  className={`cursor-pointer ${
                    states.duration === "monthly"
                      ? `text-muted-foreground`
                      : `text-primary`
                  }`}
                  onClick={() => field.onChange("yearly")}
                >
                  Yearly
                </span>
              </div>
            );
          }}
        />
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
          type="submit"
        >
          Next Step{" "}
        </button>
      </div>
    </form>
  );
};

export default SelectPlan;
