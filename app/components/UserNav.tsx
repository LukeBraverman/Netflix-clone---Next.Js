"use client"

import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {signOut} from "next-auth/react";


export default function UserNav()
{


    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={"ghost"} className={"relative h-10 w-10 rounded-sm"} >
                    <Avatar className={"h-10 w-10 rounded-sm"}>
                        <AvatarImage src="https://girpdcqabnukkhkebhyi.supabase.co/storage/v1/object/public/user%20image/avatar-default-icon.png"/>
                        <AvatarFallback className={"rounded-sm"}>Luke</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className={"w-56 "} align={"end"} forceMount>
                <DropdownMenuLabel>
                    <div className={"flex flex-col space-y-1"}>
                        <p className={"text-sm font-medium leading-none"}>Luke</p>
                        <p className={"text-xs leading-none text-muted-foreground"}>test@gmail.com</p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => signOut()}>
                    Sign Out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
