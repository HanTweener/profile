import profileImg from "../assets/profile.jpg";
import { profile } from "../data/Profile";

function Navbar() {

    const menuItems = [
        //{ name: 'Hero', to: 'hero' },
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Projects', to: 'projects' },
        { name: 'Process', to: 'process' },
        { name: 'Contact', to: 'contact' }
    ]

    return (
    <>
        <nav className="fixed top-0 w-screen h-18 grid grid-cols-4 lg:grid-cols-3 items-center gap-1 border-b border-gray-900 bg-black">
            <div className="flex size-full items-center justify-start col-span-2 lg:col-span-1 px-5 lg:px-20 gap-3 transition-[width, height] duration-300 ease-in-out">
                <img
                    src={profileImg}
                    alt="Profile"
                    className="shrink-0 w-6 h-6 rounded-full object-cover object-[20%_20%] ring-2 ring-gray-600"
                />
                <span className="text-xs text-white font-semibold items-center tracking-widest"> {profile.name} </span>
            </div>
            <div className="hidden lg:flex size-full justify-center items-center gap-5">
                {menuItems.map((item) => (
                <a
                    key={item.to}
                    href={`#${item.to}`}
                    className="cursor-pointer font-medium text-blue-300 tracking-widest hover:text-blue-400 transition-colors"
                >
                    {item.name}
                </a>
                ))}
            </div>
            <div className="flex size-full justify-end items-center col-span-2 lg:col-span-1 gap-3 px-5 lg:px-20 transition-[width, height] duration-300 ease-in-out">
                <span className="w-2 h-2 bg-blue-300 rounded-full animate-pulse"></span>
                <span className="text-xs text-blue-300 font-semibold tracking-widest">{profile.status.availability}</span>
            </div>
        </nav>
    </>
    )
}

export default Navbar