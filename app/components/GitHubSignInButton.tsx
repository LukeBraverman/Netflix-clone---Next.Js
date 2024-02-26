"use client"

import {Button} from "@/components/ui/button";
import {signIn} from "next-auth/react";
import {GithubIcon} from "lucide-react";



export default function GitHubSignInButton()
{


    return (
        <Button onClick={() => signIn('github')} variant="outline" size="icon">
            <GithubIcon className="w-4 h-4" />
        </Button>
    )
}
