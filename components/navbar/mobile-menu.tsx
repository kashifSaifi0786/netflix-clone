'use client';

import MenuItems from "./menu-items";
import { BsChevronDown } from "react-icons/bs";
import { useCallback, useState } from "react";


const MobileMenu = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

    const toggleMobileMenu = useCallback(() => {
        setMobileMenu(menu => !menu)
    }, [])

    return (
        <div
            onClick={toggleMobileMenu}
            className="lg:hidden flex flex-row items-center ml-8 gap-2 cursor-pointer relative">
            <p className="text-white text-sm">Browse</p>
            <BsChevronDown className={`text-white transition ${mobileMenu ? 'rotate-180' : 'rotate-0'}`} />
            <MenuItems visible={mobileMenu} />
        </div>
    );
}

export default MobileMenu;