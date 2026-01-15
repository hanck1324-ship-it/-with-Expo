"use client"

import { useDeviceSetting } from "@/commons/settings/03-06-device-setting/hook"


export default function PostMessageDeviceApiPromiseRefactoringPage() {
    const { fetchApp } =useDeviceSetting()
     
    const onClickSystemVersion = async() => {
        const result = await fetchApp({ query: "fetchDeviceSystemForAppSet"})

        alert(result.data.fetchDeviceSystemForAppSet.appVersion)
    }
    
    const onClickSystemPlatform = async () => {
        const result = await fetchApp({ query: " fetchDeviceSystemForPlaformSet "})
        alert(result.data.fetchDeviceSystemForPlaformSet.modelName)
    }
    
    const onClickSystemLocationLating = () => { 
         const result = await fetchApp({ query: " fetchDeviceLocationForLatLngSet "})
        alert(result.data.fetchDeviceLocationForLatLngSet.lat)
        alert(result.data.fetchDeviceLocationForLatLngSet.lng)
    }
    

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