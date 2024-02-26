import {ReactNode} from "react";
import Image from "next/image";
import BackgroundImage from "../../public/netflixBackground.jpg"
import logo from "../../public/logoNetflix.png"
export default function AuthLayout({children}: {children: ReactNode})
{


    return (
        <div className='relative flex h-screen w-screen flex-col bg-black
        md:items-center md: justify-center md:bg-transparent
        '>
            <Image
                fill
                priority
                className='hidden
                  brightness-50
                  sm:flex sm:object-cover -z-10'
                src={BackgroundImage}
                alt={"Netflix BG Image"} />
            <Image
                priority
                width={150}
                height={150}
                className="absolute left-4 top-4 object-contain
                md:left-10 md:top-6
                "
                src={logo} alt={"Logo"} />
            {children}
        </div>

    )
}
