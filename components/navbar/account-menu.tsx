'use client';

import Image from "next/image";
import { BsChevronDown } from "react-icons/bs";
import AccountItems from "./account-items";
import React, { useCallback, useState } from "react";
import { User } from "@prisma/client";

interface AccountMenuProps {
    currentUser?: User | null;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ currentUser }) => {
    const [show, setShow] = useState(false);

    const toggleShow = useCallback(() => {
        setShow(show => !show);
    }, [])

    return (<div
        onClick={toggleShow}
        className="
    flex
    flex-row
    cursor-pointer
    items-center
    gap-2
    ">
        <div className="w-6 h-6 relative lg:w-10 lg:h-10">
            <Image
                src={'/images/default-blue.png'}
                alt=""
                fill
            />
            <AccountItems currentUser={currentUser} visible={show} />
        </div>
        <BsChevronDown className={`text-white transition ${show ? 'rotate-180' : 'rotate-0'}`} />
    </div>);
}

export default AccountMenu;