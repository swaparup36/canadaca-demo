"use client"

import { GetContext } from "@/app/context/planProvider";
import { CircleCheck } from "lucide-react";
import { useRouter } from "next/navigation";

interface planType {
    name: string;
    price: number;
    duration: string;
    discount: number;
    description: string;
    field1: string;
    field2: string;
    field3: string;
    field4: string;
    field5: string
}

interface Props {
    plan: planType
}

export default function PlanCards({ plan } : Props) {
    const router = useRouter();
    const durationMap = new Map([
        ['monthly', 'month'],
        ['yearly', 'year'],
        ['lifetime', 'lifetime']
    ]);

    const { setChoosenPlan } = GetContext();
    return (
      <>
        <div className="w-[23%] p-5 rounded-md bg-[#f1f1f1] h-[65svh] flex flex-col justify-around items-start">
            <p className="text-sm font-semibold">{plan.name}</p>
            <div className="font-semibold flex items-baseline justify-start my-4">
                <h2 className="text-4xl">₹{plan.price}</h2><p className="mx-2">/{durationMap.get(plan.duration)}</p>
            </div>
            <div className="mb-2">
                {plan.description}
            </div>
            <ul className="flex flex-col my-2">
                <li className="flex justify-start items-center my-1">
                    <CircleCheck size={20} fill="#d1d1d1" className="mr-2" />
                    {plan.field1}
                </li>
                <li className="flex justify-start items-center my-1">
                    <CircleCheck size={20} fill="#d1d1d1" className="mr-2" />
                    {plan.field2}
                </li>
                <li className="flex justify-start items-center my-1">
                    <CircleCheck size={20} fill="#d1d1d1" className="mr-2" />
                    {plan.field3}
                </li>
                <li className="flex justify-start items-center my-1">
                    <CircleCheck size={20} fill="#d1d1d1" className="mr-2" />
                    {plan.field4}
                </li>
                <li className="flex justify-start items-center my-1">
                    <CircleCheck size={20} fill="#d1d1d1" className="mr-2" />
                    {plan.field5}
                </li>
            </ul>
            <div className="my-2 w-full">
                <button className="rounded-md text-white bg-black font-semibold w-full py-2" onClick={()=>{
                    setChoosenPlan({ name: plan.name, price: plan.price });
                    router.push('/purchase-plan');
                }}>Purchase</button>
            </div>
        </div>
      </>
    );
  }
  