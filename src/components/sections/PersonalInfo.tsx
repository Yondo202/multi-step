"use client";
import React, { useEffect } from "react";
import { z } from "zod";
import { useRouter } from "next/navigation"; 
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Е-мэйл ээ оруулна уу" })
    .email("Е-мэйл формат-аа дахин шалгана уу")
    .max(250, { message: "250-аас бага тэмдэгт оруулна уу" }),
  username: z
    .string()
    .min(1, {
      message: "Нэр ээ оруулна уу",
    })
    .max(250, { message: "250-аас бага тэмдэгт оруулна уу" }),
  phone: z
    .string()
    .min(8, {
      message: "Утасны дугаар 8 оронтой байх",
    })
    .max(8, {
      message: "Утасны дугаар 8 оронтой байх",
    }),
  __is_validated: z.boolean(),
});

type FormSchemaType = z.infer<typeof formSchema>;

const defaultValue: FormSchemaType = {
  email: "",
  username: "",
  phone: "",
  __is_validated: false,
};

const PersonalInfo = ({ currentStep }: { currentStep: string }) => {
  const router = useRouter()
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValue,
  });

  const states = form.watch();

  useEffect(() => {
    const Item: any = localStorage.getItem("step-1");
    if (Item !== null) {
      form.reset(JSON.parse(Item));
    }
  }, []);

  useEffect(() => {
    if (form.formState.isDirty) {
      localStorage.setItem(
        "step-1",
        JSON.stringify({ ...states, __is_validated: form.formState.isValid })
      );
    }
  }, [form.formState.isValid, form.formState.isDirty, states]);

  const onSubmit = (fdata: FormSchemaType) => {
    localStorage.setItem(
      "step-1",
      JSON.stringify({ ...fdata, __is_validated: true })
    );

    router.push(`/${+currentStep+1}`)
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="grid grid-rows-[1fr_auto] gap-8 h-full"
    >
      <div className="space-y-6">
        <Controller
          control={form.control}
          name="username"
          render={({ field, fieldState }) => {
            return (
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label htmlFor={field.name}>
                    Name <span className="text-red-300 pl-0">*</span>
                  </label>

                  <div className="text-red-500 text-xs">
                    {fieldState?.error?.message}
                  </div>
                </div>

                <input
                  className="flex h-11 w-full font-medium rounded-md border border-primary/50 hover:bg-primary/5 bg-card px-3 py-2  ring-offset-card placeholder:text-muted-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-0 "
                  {...field}
                  id={field.name}
                  placeholder="Enter your username"
                />
              </div>
            );
          }}
        />

        <Controller
          control={form.control}
          name="email"
          render={({ field, fieldState }) => {
            return (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor={field.name}>
                    Email Adress <span className="text-red-300 pl-0">*</span>
                  </label>

                  <div className="text-red-500 text-xs">
                    {fieldState?.error?.message}
                  </div>
                </div>
                <input
                  className="flex h-11 w-full font-medium rounded-md border border-primary/50 hover:bg-primary/5 bg-card px-3 py-2  ring-offset-card placeholder:text-muted-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-0 "
                  {...field}
                  id={field.name}
                  placeholder="a@example.com"
                />
              </div>
            );
          }}
        />

        <Controller
          control={form.control}
          name="phone"
          render={({ field, fieldState }) => {
            return (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor={field.name}>
                    {" "}
                    Phone Number <span className="text-red-300 pl-0">*</span>
                  </label>

                  <div className="text-red-500 text-xs">
                    {fieldState?.error?.message}
                  </div>
                </div>
                <input
                  className="flex h-11 w-full font-medium rounded-md border border-primary/50 hover:bg-primary/5 bg-card px-3 py-2  ring-offset-card placeholder:text-muted-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-0 "
                  {...field}
                  id={field.name}
                  placeholder="99801406"
                  type="number"
                  onWheel={(e: any) => e.target.blur()}
                  // min={0}
                />
              </div>
            );
          }}
        />
      </div>

      <div className="flex justify-end w-full bg-card max-sm:fixed max-sm:left-0 max-sm:bottom-0 max-sm:px-8 max-sm:py-3 max-sm:border-t">
        <button
          className="bg-primary text-primary-foreground px-6 h-9 rounded-md font-medium hover:bg-primary/80 ml-auto"
          type="submit"
        >
          Next Step{" "}
        </button>
      </div>
    </form>
  );
};

export default PersonalInfo;
