"use client"

import {Heart, PlayCircle} from "lucide-react";
import {Button} from "@/components/ui/button";
import PlayVideoModal from "@/app/components/PlayVideoModal";
import {useState} from "react";
import {addToWatchList, deleteFromWatchList} from "@/app/action";
import {usePathname} from "next/navigation";

interface  iAppProps {
    title:string,
    overview:string,
    movieId: number,
    watchList: boolean,
    watchListId: string,
    youtubeUrl: string,
    year:number,
    age:number,
    time:number
}

export default function MovieCard({movieId, overview, title, watchListId, watchList, youtubeUrl
, age, time, year
}: iAppProps)
{
    const [open, setOpen] = useState(false)
    const pathName = usePathname()
    return (
        <>
        <button onClick={() => setOpen(true)} className={"mb-14"}>
            <PlayCircle className={"h-14 w-14"} />
        </button>
            <div className={"right-5 top-5 absolute z-10"}>
                { watchList ? (
                    <form action={deleteFromWatchList}>
                        <input type={"hidden"} name={"watchListId"} value={watchListId}/>
                        <input type={"hidden"} name={"pathname"} value={pathName}/>

                        <Button variant={"outline"} size={"icon"}>
                            <Heart className={"w-4 h-4 text-red-500"}/>
                        </Button>
                    </form>
                ): (
                    <form action={addToWatchList}>
                        <input type={"hidden"} name={"movieId"} value={movieId}/>
                        <input type={"hidden"} name={"pathname"} value={pathName}/>

                        <Button variant={"outline"} size={"icon"}>
                            <Heart className={"w-4 h-4"}/>
                        </Button>
                    </form>

                )}
            </div>

            <div className={"p-5 absolute bottom-0 left-0"}>
                <h1 className={"font-bold text-lg line-clamp-1"}>{title}</h1>
                <div className={"flex gap-x-2 items-center"}>
                    <p className={"font-normal text-sm"}>{year}</p>
                    <p className={"font-normal border py-0.5 px-1 border-gray-200 rounded text-sm"}>{age}+</p>
                    <p  className={"font-normal text-sm"}>{time}h</p>
                </div>
                <p className={"line-clamp-1 text-sm text-gray-200 font-light"}>{overview}</p>
            </div>

            <PlayVideoModal title={title} overview={overview} youtubeurl={youtubeUrl}
                            age={age} duration={time} release={year}
                            state={open} changeState={setOpen} />
        </>
    )
}
