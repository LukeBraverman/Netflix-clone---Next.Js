"use client"

import Link from "next/link";
import Image from "next/image";
import netflixLogo from "../../public/logoNetflix.png"
import {usePathname} from "next/navigation";
import {Bell, Search} from "lucide-react";
import UserNav from "@/app/components/UserNav";

interface  LinkProps
{
    name:string;
    href: string
}
const links: LinkProps[] = [
    {
        name:"Home", href: "/home"
    },
    {
        name:"Tv Shows", href: "/home/shows"
    },
    {
        name:"Movies", href: "/home/movies"
    },
    {
        name:"Recently Added", href: "/home/recently"
    },
    {
        name:"My List", href: "/home/user/list"
    },
]
export default function NavBar()
{
    const pathName = usePathname();

    return (
        <div className="w-full max-w-7xl mx-auto items-center
        justify-between px-5 sm:px-6 py-5 lg:px-8 flex
        ">
            <div className="flex items-center">
                <Link href={"/home"} className="w-32 ">
                    <Image src={netflixLogo} alt={"logo"} priority  />
                </Link>
                <ul className="lg:flex gap-x-4 ml014 hidden">
                    {links.map((link,idx) => {

                        return(
                            <div key={idx}>
                                {pathName === link.href ?
                                    (
                                        <li>
                                            <Link href={link.href} className="text-white font-semibold underline text-sm">
                                                {link.name}
                                            </Link>
                                        </li>
                                    ) :
                                    (
                                        <li>
                                            <Link href={link.href}
                                                  className="text-gray-300 font-normal text-sm">
                                                {link.name}
                                            </Link>
                                        </li>
                                    )
                                }
                            </div>
                        )

                    })}
                </ul>
            </div>

            <div className={"flex items-center gap-x-8"}>
                <Search className={"w-5 h-5 text-gray-300 cursor-pointer"}/>
                <Bell className={"w-5 h-5 text-gray-300 cursor-pointer"}/>
                <UserNav/>
            </div>

        </div>
    )
}
