"use client"

interface iAppProps {
    overview: string,
    youtubeUrl: string,
    id: number,
    age: number,
    title: string,
    releaseDate: number,
    duration: number
}

import {Button} from "@/components/ui/button";
import {InfoIcon, PlayCircle} from "lucide-react";
import {useState} from "react";
import PlayVideoModal from "@/app/components/PlayVideoModal";

export default function MovieButtons({age, releaseDate, id, overview, title, duration, youtubeUrl}: iAppProps)
{
    const [open, setOpen] = useState(false)

    return(
        <>
            <Button onClick={() => setOpen(true)} className={"text-lg font-medium"}>
                <PlayCircle className={"mr-2 h-5 w-6"} />Play
            </Button>
            <Button onClick={() => setOpen(true)} className={"text-lg font-medium bg-white/40 hover:bg-white/30 text-white"}>
                <InfoIcon className={"mr-2 h-5 w-6"} />Learn More
            </Button>

            <PlayVideoModal title={title} overview={overview} youtubeurl={youtubeUrl}
                            state={open} changeState={setOpen} release={releaseDate} age={age} duration={duration} />
        </>
    )
}
