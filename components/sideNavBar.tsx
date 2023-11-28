import Link from 'next/link';
import { useRouter } from 'next/router';
import { HiMagnifyingGlass, HiOutlineArrowLeftOnRectangle, HiOutlineArrowRightOnRectangle, HiOutlineBookmark, HiOutlineCog8Tooth, HiOutlineGlobeEuropeAfrica, HiOutlineHome, HiOutlineUsers } from "react-icons/hi2";

export default function SideNavBar(){
    const router = useRouter();
    
    return (
    <main className="w-64 bg-white p-4 h-screen">
        <ul className="flex flex-col gap-2">
            <li className="pb-4">
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <HiMagnifyingGlass />
                    </span>
                    <input type="text" className="w-full py-1.5 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" placeholder="Search" />
                </div>
            </li>
            <li>
                <Link href="/">
                    <div className={`flex items-center px-2 py-2.5 text-gray-600 ${router.pathname === '/' ? 'bg-gray-100' : ''} transition-colors duration-300 rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700`}>
                        <HiOutlineHome className="text-xl"/>
                        <span className="mx-2 text-sm font-medium">Home</span>
                    </div>
                </Link>
            </li>
            <li>
                <Link href="/explore">
                    <div className={`flex items-center px-2 py-2.5 text-gray-600 ${router.pathname === '/explore' ? 'bg-gray-100' : ''} transition-colors duration-300 rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700`}>
                        <HiOutlineGlobeEuropeAfrica className="text-xl"/>
                        <span className="mx-2 text-sm font-medium">Explore</span>
                    </div>
                </Link>
            </li>
            <li>
                <Link href="/my-closet">
                    <div className={`flex items-center px-2 py-2.5 text-gray-600 ${router.pathname === '/my-closet' ? 'bg-gray-100' : ''} transition-colors duration-300 rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700`}>
                        <HiOutlineBookmark className="text-xl"/>
                        <span className="mx-2 text-sm font-medium">My Closet</span>
                    </div>
                </Link>
            </li>
            <li>
                <Link href="/users">
                    <div className={`flex items-center px-2 py-2.5 text-gray-600 ${router.pathname === '/users' ? 'bg-gray-100' : ''} transition-colors duration-300 rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700`}>
                        <HiOutlineUsers className="text-xl"/>
                        <span className="mx-2 text-sm font-medium">Users</span>
                    </div>
                </Link>
            </li>
            <li>
                <Link href="/settings">
                    <div className={`flex items-center px-2 py-2.5 text-gray-600 ${router.pathname === '/settings' ? 'bg-gray-100' : ''} transition-colors duration-300 rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700`}>
                        <HiOutlineCog8Tooth className="text-xl"/>
                        <span className="mx-2 text-sm font-medium">Settings</span>
                    </div>
                </Link>
            </li>
        </ul>

        {/* Dw bout this for now lolllll */}
        <div className="mt-6">
            <div className="p-3 bg-gray-100 rounded-lg dark:bg-gray-800">
                <h2 className="text-sm font-medium text-gray-800 dark:text-white">New feature availabel!</h2>

                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus harum officia eligendi velit.</p>

            </div>

            <div className="flex items-center justify-between mt-6">
                <a href="#" className="flex items-center gap-x-2">
                    <img className="object-cover rounded-full h-7 w-7" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&h=634&q=80" alt="avatar" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">John Doe</span>
                </a>
                
                <a href="#" className="text-gray-500 transition-colors duration-200 rotate-180 dark:text-gray-400 rtl:rotate-0 hover:text-blue-500 dark:hover:text-blue-400">
                    <HiOutlineArrowLeftOnRectangle className="text-xl"/>
                </a>
            </div>
        </div>
</main>
    )
}