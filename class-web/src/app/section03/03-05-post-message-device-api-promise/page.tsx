"use client"

import { useEffect } from "react" 

declare const window: window & {
    ReactNativeWebView: {
        postMessage: (message: string) => void
    }
}

const 나의요청중인API들 = {
    // fetchBoardSystemForAppSet: resolve111
    // fetchDeviceSystemForPlaformSet: resolve222
    // fetchDeviceLocationForLatLngSet: resolve333
}

export default function PostMessageDeviceApiPromiseRefactoringPage() {

    const onClickSystemVersion = async() => {
        const result = await new Promise((resolve111) => {
            나의요청중인API들.fetchDeviceSystemForAppSet = resolve111
          window.ReactNativeWebView.postMessage(
                JSON.stringify({query:"fetchBoardSystemForAppSet"})
            )
      })
        alert(result.data.fetchDeviceSystemForAppSet)
    }
    
    const onClickSystemPlatform = async () => {
        const result = await new Promise((resolve222) => {
                나의요청중인API들.fetchDeviceSystemForPlatformSet = resolve222
           
            window.ReactNativeWebView.postMessage(
                JSON.stringify({query:"fetchDeviceSystemForPlatformSet"})
            )
        })
        alert(result.data.fetchDeviceSystemForPlaformSet)
    }
    
    const onClickSystemLocationLating = () => { 

          const result = await new Promise((resolve333) => {
            나의요청중인API들.fetchDeviceLocationForLatLngSet = resolve333
            window.ReactNativeWebView.postMessage(
                JSON.stringify({query:"fetchDeviceSystemLocationForLatingSet"})
            )
        })
        alert(result.data.fetchDeviceLocationForLatLngSet.lat)
        alert(result.data.fetchDeviceLocationForLatLngSet.lng)
    }
    

    useEffect(() => {
        
        //1. 안드로이드에서 수신 대기 
        document.addEventListener("message", (message: any) => {
            const reponse = JSON.parse(message.data)
            const query = Object.keys(reponse)[0] // API이름 => fetchDeviceSystemForAppSet
            const resolve = 나의요청중인API들.[query] // resolve111, resolve222, ...
            resolve({ data: response })
            delete 나의요청중인API들[query]


        //     const resolve111 =  나의요청중인API들.fetchDeviceSystemForAppSet // resolve111
        //     const resolve222 =  나의요청중인API들.fetchDeviceSystemForPlatformSet // resolve222
        //     const resolve333 =  나의요청중인API들.fetchDeviceLocationForLatLngSet // resolve333 
        //     resolve111(message.data)
        //     resolve222(message.data)
        //     resolve333(message.data) 
        //     delete 나의요청중인API들.fetchDeviceSystemForAppSet
        //     delete 나의요청중인API들.fetchDeviceSystemForPlatformSet
        //     delete 나의요청중인API들.fetchDeviceLocationForLatLngSet
        // })

        //2. iOS에서 수신 대기 
        window.addEventListener("message", (message: any) => {
            const reponse = JSON.parse(message.data)
            const query = Object.keys(reponse)[0] // API이름 => fetchDeviceSystemForAppSet
            const resolve = 나의요청중인API들.[query] // resolve111, resolve222, ...
            resolve({ data: response })
            delete 나의요청중인API들[query]
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