'use client'

import Image from "next/image";
import NavbarItem from "./navbar-item";
import MobileMenu from "./mobile-menu";
import { BsBell, BsSearch } from "react-icons/bs";
import AccountMenu from "./account-menu";
import { useEffect, useState } from "react";
import { User } from "@prisma/client";

const TOP_OFFSET = 66;

interface NavbarProps {
    currentUser?: User | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
    const [showBackground, setShowBackground] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.screenY >= TOP_OFFSET) {
                setShowBackground(true);
            } else {
                setShowBackground(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (<nav className="w-full fixed z-40">
        <div className={`px-4 md:px-15 py-6  flex flex-row items-center duration-500 transition ${showBackground ? 'bg-zinc-900 bg-opacity-90' : ''}`}>
            <div className="relative h-4 lg:h-7 w-12">
                <Image
                    src={'/images/logo.png'}
                    alt="logo"
                    fill
                />
            </div>
            <div className="flex-row ml-8 gap-7 hidden lg:flex">
                <NavbarItem label="Home" active />
                <NavbarItem label="Series" />
                <NavbarItem label="Films" />
                <NavbarItem label="New & Popular" />
                <NavbarItem label="My List" />
                <NavbarItem label="Browse by Languages" />
            </div>

            <MobileMenu />

            <div className="flex flex-row ml-auto items-center gap-7">
                <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                    <BsSearch />
                </div>
                <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                    <BsBell />
                </div>

                <AccountMenu currentUser={currentUser} />
            </div>
        </div>
    </nav>);
}

export default Navbar;