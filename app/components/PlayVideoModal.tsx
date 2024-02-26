import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from "@/components/ui/dialog";

interface iAppProps {
    title: string,
    overview:string,
    youtubeurl:string,
    state: boolean,
    changeState: any,
    release: number,
    age: number,
    duration: number
}
export default function PlayVideoModal({changeState, state, youtubeurl, overview, title
, age, duration, release}:iAppProps)
{
    return(
        <Dialog open={state} onOpenChange={() => changeState(!state)}>
            <DialogContent className={"sm:max-w-[425px]"}>
                <DialogHeader>
                    <DialogTitle>
                        {title}
                    </DialogTitle>
                    <DialogDescription className={"line-clamp-3"}>
                        {overview}
                    </DialogDescription>
                    <div className={"flex gap-x-2 items-center"}>
                        <p>{release}</p>
                        <p className={"border py-0.5 px-1 border-gray-200 rounded"}>{age}+</p>
                        <p>{duration}h</p>
                    </div>
                </DialogHeader>
                <iframe className={"w-full"} src={youtubeurl} height={250}></iframe>
            </DialogContent>
        </Dialog>
    )
}
