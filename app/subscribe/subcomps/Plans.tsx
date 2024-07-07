"use client"
import { Fragment } from "react";
import { Tab } from "@headlessUI/react";

interface PlanProps {
    id: number;
    name: string;
    description: string[];
    monthlyPrice: number;
    annualPrice: number;
}

const plans: PlanProps[] = [
    { id: 1, name: "Free", description: ["Unlimited Access to Trips, Shop", "Feed Interaction"], monthlyPrice: 9.99, annualPrice: 99.99 },
    { id: 2, name: "VIP", description: ["Includes all in the Pro Plan", "Priority Messaging"], monthlyPrice: 24.99, annualPrice: 249.99 },
    { id: 3, name: "Elite", description: ["Priority Messaging", "1 on 1 Live Feature", "Exclusive Invite to travvelbaby events"] , monthlyPrice: 49.99, annualPrice: 499.99 },
];

const SubscriptionPlans = () => {
    return (
        <div className="">
            <div className="pt-16">
                <Tab.Group >
                    <section className="flex items-center justify-between w-full">
                        <div className="">
                            <h2 className="text-stone-500 text-4xl font-black leading-10">Upgrade and get so much more</h2>
                        </div>
                        <Tab.List className="">
                            <Tab className="">Monthly</Tab>
                            <Tab className="">Yearly</Tab>
                        </Tab.List> 
                    </section>
                    <Tab.Panels className="pt-36">
                       <Tab.Panel className="space-y-12">
                            {plans.map((plan)=>(
                                <>
                                    <div key={plan.id} className="w-full flex justify-between">
                                        <p className="w-[20%]text-slate-700 text-base font-normal">{plan.name}</p>
                                        <ul className="w-[40%]">
                                            {plan.description.map((item, index)=>(
                                                <li key={index} className="text-slate-700 text-base font-normal">{item}</li>
                                            ))}
                                        </ul>
                                        <p className="w-[20%] text-right text-blue-950 text-5xl font-secondary leading-loose">{plan.monthlyPrice}</p>
                                        <button className="w-[20%]">
                                            <p className="">Get Now</p>
                                        </button>
                                    </div>
                                    <hr className="w-full h-px bg-zinc-300" />
                                </>
                            ))}
                       </Tab.Panel>
                       <Tab.Panel className="space-y-12">
                            {plans.map((plan)=>(
                                <>
                                    <div key={plan.id} className="w-full flex justify-between">
                                        <p className="w-1/4 text-slate-700 text-base font-normal">{plan.name}</p>
                                        <ul className="w-1/4">
                                            {plan.description.map((item, index)=>(
                                                <li key={index} className="text-slate-700 text-base font-normal">{item}</li>
                                            ))}
                                        </ul>
                                        <p className="w-1/4">{plan.annualPrice}</p>
                                        <button className="w-1/4">
                                            <p className="">Get Now</p>
                                        </button>
                                    </div>
                                    <hr className="w-full h-px bg-zinc-300" />
                                </>
                            ))}
                       </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </div>
    )
}

export default SubscriptionPlans;