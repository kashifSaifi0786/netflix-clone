import Image from "next/image";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {

    return (<div className="relative w-full min-h-full bg-[url('/images/hero.jpg')] bg-fixed bg-cover bg-no-repeat bg-center">
        <div className="bg-black w-full min-h-screen pb-10 lg:bg-opacity-50">
            <nav className="px-12 py-5">
                <div className="relative h-12 w-36">
                    <Image
                        src={'/images/logo.png'}
                        alt="logo"
                        fill
                    />
                </div>
            </nav>

            <div className="flex justify-center">
                {children}
            </div>
        </div>
    </div>);
}

export default AuthLayout;