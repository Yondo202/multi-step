import { AdvancedIcon, ArcadeIcon, ProIcon } from "@/components/svg";

import PersonalInfo from "./sections/PersonalInfo";
import SelectPlan from "./sections/SelectPlan";
import PickAddOn from "./sections/PickAddOn";
import Summary from "./sections/Summary";
import FinalComponent from "./sections/FinalComponent";



export default [
  {
    id: 1,
    title: "Your info",
    section_title: "Personal info",
    section_desc: "Please provide your name, email address, and phone number",
    component: ({ currentStep }: { currentStep: string }) => (
      <PersonalInfo currentStep={currentStep} />
    ),
  },
  {
    id: 2,
    title: "Select plan",
    section_title: "Select your plan",
    section_desc: "You have the option of monthly or yearly billing",
    component: ({ currentStep }: { currentStep: string }) => (
      <SelectPlan currentStep={currentStep} />
    ),
  },
  {
    id: 3,
    title: "Add-ons",
    section_title: "Pick add-ons",
    section_desc: "Add-ons help enhance your gaming experience.",
    component: ({ currentStep }: { currentStep: string }) => (
      <PickAddOn currentStep={currentStep} />
    ),
  },
  {
    id: 4,
    title: "Summary",
    section_title: "Finishing up",
    section_desc: "Double-check everything looks OK before confirming",
    component: ({ currentStep }: { currentStep: string }) => (
      <Summary currentStep={currentStep} />
    ),
  },
  {
    id: 5,
    title: "",
    section_title: "",
    section_desc: "",
    component: () => <FinalComponent />,
  },
];

export const PlanChoices = [
  {
    title: "Arcade",
    amount_monthly: 9,
    amount_yearly: 90,
    icon: ArcadeIcon,
    bg_color: "bg-arcade-color",
  },
  {
    title: "Advanced",
    amount_monthly: 12,
    amount_yearly: 120,
    icon: AdvancedIcon,
    bg_color: "bg-advanced-color",
  },
  {
    title: "Pro",
    amount_monthly: 15,
    amount_yearly: 150,
    icon: ProIcon,
    bg_color: "bg-pro-color",
  },
];


export const PickAddChoices = [
  {
    title: "Online service",
    description: "Access to multiplayer games",
    amount_monthly: 1,
    amount_yearly: 10,
  },
  {
    title: "Larger storage",
    description: "Extra 1TB of cloud save",
    amount_monthly: 2,
    amount_yearly: 20,
  },
  {
    title: "Customizable profile",
    description: "Custom theme on your profile",
    amount_monthly: 2,
    amount_yearly: 20,
  },
];