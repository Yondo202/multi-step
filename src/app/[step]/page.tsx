"use client"
import Header from "@/components/Header";
// import { stepAsset } from "@/components/StepMenu";
import MenuAsset from "@/components/MenuAsset";
import { useEffect } from "react";
import { useRouter } from "next/navigation"; 

function getMenuData(step: string) {
  // Wait for the playlists
  const stepItem = MenuAsset?.find((item) => item.id === +step);

  return stepItem;
}

export default function Page({ params }: { params: { step: string } }) {
  const router =  useRouter()
  const Section = getMenuData(params?.step);

  useEffect(()=>{
    const isFinal = localStorage.getItem("step-final")

    if(isFinal !== null){
      router.push('/5')
    }else{
      if(+params.step > 4){
        router.push('/1')
      }
    }

  },[])

  return (
    <div className="animate-card-enter grid grid-rows-[auto_1fr] h-full">
      {+params?.step < 5 && (
        <div className="mb-10">
          <Header>{Section?.section_title}</Header>
          <div className="text-muted-foreground">{Section?.section_desc}</div>
        </div>
      )}

      <div className="h-full">
        {Section && <Section.component currentStep={params?.step} />}
      </div>
    </div>
  );
}
