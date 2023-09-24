'use client'

import { User } from "@prisma/client";
import { signOut } from "next-auth/react";
import Image from "next/image";

interface AccountItemsProps {
    visible?: boolean;
    currentUser?: User | null;
}

const AccountItems: React.FC<AccountItemsProps> = ({ visible, currentUser }) => {

    if (!visible) {
        return null;
    }

    return (<div className="absolute top-14 right-0 bg-black w-56 py-5 flex flex-col border-2 border-gray-800">
        <div className="flex flex-col gap-3">
            <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
                <div className="relative w-8 h-8 rounded-md overflow-hidden">
                    <Image
                        src={'/images/default-blue.png'}
                        alt=""
                        fill
                    />
                </div>
                <p className="text-white textsm group-hover/item:underline">
                    {currentUser?.name || 'Username'}
                </p>
            </div>

            <hr className="bg-gray-600 border-0 h-px mt-4" />
            <div onClick={() => signOut()} className="text-white text-center px-3 text-sm hover:underline">
                Sign out of Netflix
            </div>
        </div>
    </div>);
}

export default AccountItems;