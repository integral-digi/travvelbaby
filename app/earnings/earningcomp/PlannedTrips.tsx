import Link from "next/link";
import Progress from "./FundProgress";

interface TripProps {
    location: string;
    photo: string;
    href: string;
    fundGoal: number;
    fundRaised: number;
}

const userTrips: TripProps[] = [
    { location: "Gippsland, Australia", photo: "/media/gippsland.jpg", href: "#", fundGoal: 1000, fundRaised: 500 },
    { location: "Maldives, South Asia", photo: "/media/maldives.jpg", href: "#", fundGoal: 1000, fundRaised: 500 },
    { location: "Bali, Indonesia", photo: "/media/bali.jpg", href: "#", fundGoal: 9000, fundRaised: 6500 },
    { location: "Zanzibar, Tanzania", photo: "/media/zanzibar.jpg", href: "#", fundGoal: 10000, fundRaised: 7864 }
];

const fundingPercentage = () => {
    const percentages = [];

    for (let i = 0; i < userTrips.length; i++) {
        const percentage = (userTrips[i].fundRaised * 100) / userTrips[i].fundGoal;
        percentages.push(percentage.toFixed(0));
    }

    return percentages;
};

const percentages = fundingPercentage();
console.log(percentages);



const PlannedTrips = () => {
    return (
        <div className="planned-trips w-full space-y-8">
            <div className="space-y-8">
                <p className="text-zinc-400 text-xs font-secondary">My Planned Trips</p>
            </div>
            <div className="flex items-center space-x-4 max-w-[1080px] pb-6 overflow-x-scroll">
                {userTrips.map((entry, index) => (
                    <div className="entry w-full space-y-7 relative" key={index}> 
                        <div className="w-96 h-96 rounded-md"> 
                            <Link href={entry.href}>
                                <img src={entry.photo} alt="photo" className="w-full h-full object-cover" />
                                <span className="flex items-center space-x-2 absolute left-4 top-4 p-2 bg-gradient-to-b from-white to-white rounded-md">
                                    <img src="/assets/star.svg" className="w-4 h-4" alt="star" />
                                    <p className="font-normal text-sm">{entry.location}</p>
                                </span>
                            </Link>  
                        </div>
                        <div className="block space-y-4 w-[64%]">
                            <span className="flex items-center justify-between">
                                <p className="font-normal text-stone-500 text-xs font-secondary">
                                    ${entry.fundRaised} of ${entry.fundGoal}
                                </p>
                                <p className="font-normal text-zinc-800 text-xs font-secondary">
                                    {percentages[index]}% Funded
                                </p>
                            </span>
                            <Progress bgcolor="#B76E79" progress={percentages[index]} height={5} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PlannedTrips;