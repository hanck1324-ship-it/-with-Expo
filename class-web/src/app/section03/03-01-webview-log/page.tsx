"use client"

import { useEffect } from "react"

export default function PostMessageAppToWebPage() {
    
    useEffect(() => {
        
        //1. 안드로이드에서 수신 대기 
        document.addEventListener("message", (message: any) => {
            alert(`App에서 보내준 데이터: ${message.data}`)
        })

        //2. iOS에서 수신 대기 
        window.addEventListener("message", (message: any) => {
            alert(`App에서 보내준 데이터: ${message.data}`) 
        })

    }, [])  

    return (
        <>
            <br />
            <br />
            <div>웹뷰버튼</div> 
        </>
        ) 
    }