import React, { useEffect } from 'react'
import SpotifySVG from '../SVG/spotify'
import YoutubeSVG from '../SVG/youtube'
import AppleSVG from '../SVG/apple'

export default function Card() {


    return (
        <div className="flex flex-col text-white  ">
            <div className="flex items-center gap-4">
                <img src="https://img.youtube.com/vi/MBdVXkSdhwU/hqdefault.jpg" alt="" className="h-16 w-44 object-cover object-center" />
                <p className="">DNA</p>
            </div>
            <div>
                <div className="flex gap-4">
                    <div className="w-6 h-6">
                        <YoutubeSVG />
                    </div>
                </div>
            </div>
        </div>
    )
}