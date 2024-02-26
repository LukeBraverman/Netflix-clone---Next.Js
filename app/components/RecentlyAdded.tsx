import prisma from "@/app/utils/db";
import Image from "next/image";
import MovieCard from "@/app/components/MovieCard";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/utils/auth";

async function getData(userId: string)
{
    const data = await prisma.movie.findMany(
        {
            select: {
                id: true,
                overview: true,
                title: true,
                WatchLists: {
                    where: {
                        userId: userId
                    }
                },
                imageString: true,
                youtubeString: true,
                age: true,
                release: true,
                duration: true
            },
            orderBy: {
                createdAt: "desc"
            },
            take: 4
        }
    );

    return data

}
export default async function RecentlyAdded()
{
    const session = await getServerSession(authOptions)
    const data = await getData(session?.user?.email as string)

    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
        mt-8 gap-6
        ">
            {data.map((movie) => {

                return (
                    <div key={movie.id} className="relative h-48">
                        <Image src={movie.imageString} alt={"movie"}
                               width={500} height={400}
                       className={"rounded-sm absolute w-full h-full object-cover"}
                        />

                        <div className={"h-60 relative z-10 w-full transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100"}>
                           <div className={"bg-gradient-to-b from-transparent via-black/50 to-black z-10 w-full h-full rounded-lg flex items-center justify-center border"}>
                               <Image src={movie.imageString} alt={"movie"}
                                      width={800} height={800}
                                      className={"rounded-lg -z-10 absolute w-full h-full object-cover"}
                               />

                               <MovieCard movieId={movie.id} overview={movie.overview} title={movie.title}
                                          watchListId={movie.WatchLists[0]?.id}  youtubeUrl={movie.youtubeString}
                                            watchList={movie.WatchLists.length > 0}
                                          key={movie.id}
                                          age={movie.age} year={movie.release} time={movie.duration}
                               />
                           </div>

                        </div>
                    </div>
                )

            })}
        </div>
    )
}
