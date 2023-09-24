interface MobileItemsProps {
    visible?: boolean;
}


const MenuItems: React.FC<MobileItemsProps> = ({ visible }) => {

    if (!visible) {
        return null;
    }

    return (<div className="absolute w-56 top-8 left-0 bg-black py-5 border-2 border-gray-800">
        <div className="flex flex-col gap-4">
            <div className="px-3 text-center cursor-pointer hover:underline text-white">
                Home
            </div>
            <div className="px-3 text-center cursor-pointer hover:underline text-white">
                Series
            </div>
            <div className="px-3 text-center cursor-pointer hover:underline text-white">
                Films
            </div>
            <div className="px-3 text-center cursor-pointer hover:underline text-white">
                New & Popular
            </div>
            <div className="px-3 text-center cursor-pointer hover:underline text-white">
                My Lists
            </div>
            <div className="px-3 text-center cursor-pointer hover:underline text-white">
                Browse by Languages
            </div>
        </div>
    </div>);
}

export default MenuItems;