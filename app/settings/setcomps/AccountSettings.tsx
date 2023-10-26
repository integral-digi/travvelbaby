"use client"
import { user } from "@/app/homecomps/Sidenav";

const accountLabels = [
    "Name", "Username", "Email", "Website", "Bio", "Location",
];

const pStyle = "text-zinc-800 text-base font-primary";
const pStyleTwo = "text-zinc-800 text-base font-primary text-right right-0";

interface AccountSettingItemProps {
    label: string;
    value: string;
    onEditClick: () => void;
}

const AccountSettingItem = ({ label, value, onEditClick }: AccountSettingItemProps) => (
    <span className="flex items-center justify-between">
        <p className={pStyle}>{label}</p>
        <span className="flex items-center space-x-48">
            <p className={pStyleTwo}>{value}</p>
            <button onClick={onEditClick} className="text-indigo-600 text-base font-primary">Edit</button>
        </span>
    </span>
);

const AccountSettings = () => {
    return (
        <div className="space-y-10">
            <section className="space-y-8">
                <h2 className="text-zinc-800 text-2xl font-secondary">Account Settings</h2>
            </section>
            <section className="w-full space-y-10">
                {accountLabels.map((label, index) => (
                    <AccountSettingItem
                        key={index}
                        label={label}
                        value={user[label.toLowerCase()]}
                        onEditClick={() => {
                            // Handle edit button click
                        }}
                    />
                ))}
            </section>
        </div>
    );
};

export default AccountSettings;
