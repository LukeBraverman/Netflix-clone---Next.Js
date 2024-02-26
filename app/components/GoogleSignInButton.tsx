"use client"

import {Button} from "@/components/ui/button";
import Image from "next/image";
import googleIcon from "@/public/googleIcon.svg";
import {signIn} from "next-auth/react";

export default function GoogleSignInButton()
{

    return(
        <Button onClick={() => signIn("google")} variant="outline" size="icon">
            <Image className="w-6 h-6" src={googleIcon} alt="GoogleIcon" />
        </Button>
    )
}
