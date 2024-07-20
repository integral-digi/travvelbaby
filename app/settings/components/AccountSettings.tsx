import { user } from "@/app/components/Sidenav";

const accountLabels =[
    "Name", "Username", "Email", "Website", "Bio", "Location",
]

const pStyle = "text-zinc-800 text-base font-primary";
const pStyleTwo = "text-zinc-800 text-base font-primary text-right right-0";

const AccountSettings = () => {
    return (
        <div className="space-y-10">
            <section className="space-y-8">
                <h2 className="text-zinc-800 text-2xl font-secondary">Profile Information</h2>
            </section>
            <section className="w-full space-y-10">
                <span className="flex items-center justify-between">
                    <p className={pStyle}>{accountLabels[0]}</p>
                    <span className="flex items-center space-x-48">
                        <p className={pStyleTwo}>{user.fullName}</p>
                        <button className="text-indigo-600 text-base font-primary">Edit</button>
                    </span>
                </span>
                <span className="flex items-center justify-between">
                    <p className={pStyle}>{accountLabels[1]}</p>
                    <span className="flex items-center space-x-48">
                        <p className={pStyleTwo}>@{user.name}</p>
                        <button className="text-indigo-600 text-base font-primary">Edit</button>
                    </span>
                </span>
                <span className="flex items-center justify-between">
                    <p className={pStyle}>{accountLabels[2]}</p>
                    <span className="flex items-center space-x-48">
                        <p className={pStyleTwo}>{user.email}</p>
                        <button className="text-indigo-600 text-base font-primary">Edit</button>
                    </span>
                </span>
                <span className="flex items-center justify-between">
                    <p className={pStyle}>{accountLabels[3]}</p>
                    <span className="flex items-center space-x-48">
                        <p className={pStyleTwo}>{user.website}</p>
                        <button className="text-indigo-600 text-base font-primary">Edit</button>
                    </span>
                </span>
                <span className="flex items-center justify-between">
                    <p className={pStyle}>{accountLabels[4]}</p>
                    <span className="flex items-center space-x-48">
                        <p className={pStyleTwo}>{user.bio}</p>
                        <button className="text-indigo-600 text-base font-primary">Edit</button>
                    </span>
                </span>
                <span className="flex items-center justify-between">
                    <p className={pStyle}>{accountLabels[5]}</p>
                    <span className="flex items-center space-x-48">
                        <p className={pStyleTwo}>{user.location}</p>
                        <button className="text-indigo-600 text-base font-primary">Edit</button>
                    </span>
                </span>
            </section>
        </div>
    )
}

export default AccountSettings;