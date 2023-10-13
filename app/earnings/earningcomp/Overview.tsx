"use client"
const todaysDate = new Date();
const month = todaysDate.getMonth();
const formattedDate = todaysDate.toLocaleString('default', { month: 'short' });

const buttonLink = [
    { name: "Withdraw", onclick: () => { }, icon: "" },
    { name: "Redeem Trip", onclick: () => { }, icon: "" },
    { name: "", onclick: () => { }, icon: "/assets/plus.svg" },
]

const Overview = () => {
    return (
        <div className="overview w-full space-y-4">
            <div className="flex items-center justify-between w-full">
                <h2 className="text-slate-800 text-base font-normal leading-8">Overview</h2>
                <p className="text-sm text-gray-400 font-normal">Today - {todaysDate.getDate()}, {formattedDate}</p>
            </div>
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center space-x-4">
                    {buttonLink.map((button, index) => (
                        <button key={index} onClick={button.onclick} className="p-3 flex items-center justify-center w-max h-9 text-sm font-semibold text-white bg-stone-500 rounded-sm">
                        <p className="font-normal">{button.name}</p>
                        {button.icon && <img src={button.icon} alt="" className="w-4 h-4" />}
                        </button>
                    ))}
                </div>
                <img src="/assets/funnel.svg" alt="" className="w-4 h-auto" />
            </div>
        </div>
    )
}

export default Overview;