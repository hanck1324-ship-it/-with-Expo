"use client"

import { useEffect } from "react" 

declare const window: window & {
    ReactNativeWebView: {
        postMessage: (message: string) => void
    }
}

export default function PostMessageDeviceApiPage() {

    const onClickSystemVersion = () => {
        window.ReactNativeWebView.postMessage(
          JSON.stringify({query:"fetchBoardSystemForAPPSet"})
        )
    }
    
    const onClickSystemPlatform = () => {
            window.ReactNativeWebView.postMessage(
            JSON.stringify({query:"fetchDeviceSystemForPlatformSet"})
        )
    }
    
    const onClickSystemLating = () => { 
            window.ReactNativeWebView.postMessage(
                JSON.stringify({query: "fetchDeviceLocationForLatLngSet"})
        )
    }  

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
            <button onClick={onClickSystemVersion}>App아! 내 핸드폰 버전정보 알려줘</button>
            <button onClick={onClickSystemPlatform}>App아! 내 핸드폰 버전정보 알려줘</button>
            <button onClick={onClickSystemLating}>App아! 내 핸드폰 버전정보 알려줘</button>
        </>
        ) 
    }