import React, { useEffect, useState } from 'react'


const LikeSvg = () => {
    return (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg>
    )
}

const ViewSvg = () => {
    return (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
    )
}


const StatisticsCount = () => {
    const [viewCount, setViewCount] = useState<string>("")
    const [likeCount, setLikeCount] = useState<string>("")
    useEffect(() => {
        const fetchStatistics = async () => {
            const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${process.env.VIDEO_ID}&key=${process.env.API_KEY}`)
            const data = await response.json()
            const dataViewCount = data.items[0].statistics.viewCount
            const dataLikeCount = data.items[0].statistics.likeCount
            setViewCount(dataViewCount)
            setLikeCount(dataLikeCount)
        }
        const fetchInterval = setInterval(() => {
            fetchStatistics()
        }, 10000)

        fetchStatistics()
        return () => clearInterval(fetchInterval)
    }, [])

    return (
        <div className="flex justify-evenly">
            <div className="flex gap-2 items-center">
                <div className="h-12 w-12">
                    <LikeSvg />
                </div>
                <p className="text-6xl  font-medium">{likeCount.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
            </div>
            <div className="flex gap-2 items-center">
                <div className="h-12 w-12 ">
                    <ViewSvg />
                </div>
                <p className="text-7xl font-bold">{viewCount.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
            </div>
        </div>
    )
}



export default function MainCard() {

    const [imageUrl, setImageUrl] = useState<string | undefined>(undefined)
    const [title, setTitle] = useState<string | undefined>(undefined)

    useEffect(() => {

        const fetchThumbnail = async () => {
            const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${process.env.VIDEO_ID}&key=${process.env.API_KEY}`)
            const data = await response.json()
            const url = data.items[0].snippet.thumbnails.maxres.url
            const dataTitle = data.items[0].snippet.title
            setImageUrl(url)
            setTitle(dataTitle)
        }
        fetchThumbnail()
    }, [])
    return (
        <div className="h-full flex flex-col  gap-2 text-black">
            <div className="p-2">
                <img src={imageUrl} alt="" className="h-96 w-full object-cover object-center rounded-2xl" />
            </div>
            <div className="flex-1 flex flex-col justify-evenly">
                <p className="text-center font-bold text-6xl text-black my-2 colsp">{title}</p>
                <StatisticsCount />
            </div>
        </div>
    )
}