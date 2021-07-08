import React, { useEffect } from 'react'


export default function YouTubeData() {

    useEffect(() => {
        useEffect(() => {

            const intervalId = setInterval(() => {  //assign interval to a variaable to clear it

            }, 12000)

            return () => {
                clearInterval(intervalId); //This is important
            }
        }, [])
    })
    return (
        <div>

        </div>
    )
}