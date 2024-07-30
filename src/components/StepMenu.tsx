"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import MenuAsset from "@/components/MenuAsset";

const StepMenu = () => {
  const router = useRouter();
  const params = useParams<{ step: string }>();

  return (
    <div className="bg-secondary text-primary-foreground rounded-2xl p-6 py-9 relative space-y-7 max-sm:grid max-sm:grid-cols-4 max-sm:space-y-0 max-sm:bg-transparent z-10">
      {MenuAsset?.slice(0,4)?.map((item, index) => {
        return (
          <button
            key={index}
            // href={`/${item.id}`}
            // onClick={() => router.push(`/${item.id}`)}
            className="grid grid-cols-[auto_1fr] max-sm:flex max-sm:justify-center gap-4 p-2 rounded-lg w-full disabled:cursor-not-allowed disabled:opacity-70"
            // disabled
            // hover:bg-white/10 
          >
            <div
              className={`w-9 h-9 relative rounded-full border-2 border-primary-foreground/70 flex items-center justify-center font-semibold text-base ${
                item.id === +params.step
                  ? `bg-primary-foreground/70 text-secondary`
                  : ``
              }`}
            >
              {index + 1}

              {index + 2 !== MenuAsset.length && (
                <div className="max-sm:hidden absolute w-px h-12 top-full bg-primary-foreground/15" />
              )}
            </div>

            <div className="flex flex-col items-start gap-0.5 max-sm:hidden">
              <span className="opacity-60 uppercase text-xs">
                STEP {index + 1}
              </span>
              <span className="font-semibold uppercase">{item.title}</span>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default StepMenu;
