import React from "react";
import { CheckIcon } from "../svg";
import { useRouter } from "next/navigation";

const FinalComponent = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center py-10">
      <div className="bg-[#f77d88] w-20 h-20 rounded-full flex items-center justify-center mb-12">
        <div className="bg-card w-12 h-12 rounded-full flex items-center justify-center">
          <CheckIcon className="fill-[#f77d88] size-20" />
        </div>
      </div>
      <div className="text-center text-3xl font-semibold mb-8">Thank you!</div>
      <div className="text-muted-foreground text-base text-center">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </div>

      <div className="flex w-full bg-card max-sm:fixed max-sm:left-0 max-sm:bottom-0 max-sm:px-8 max-sm:py-3 max-sm:border-t">
        <button
          className="bg-secondary text-primary-foreground px-6 h-9 rounded-md font-medium hover:bg-secondary/80 ml-auto mt-32"
          onClick={() => {
            localStorage.removeItem("step-1");
            localStorage.removeItem("step-2");
            localStorage.removeItem("step-3");
            localStorage.removeItem("step-final");
            router.push(`/1`);
          }}
        >
          Дахин шинээр эхлэх{" "}
        </button>
      </div>
    </div>
  );
};

export default FinalComponent;
