"use client";

import { use, useEffect } from "react";

export const 나의요청중인API들 = {
    // fetchDeviceSystemForAppSet: resolve111
    // fetchDeviceSystemForPlaformSet: resolve222
    // fetchDeviceLocationForLatLngSet: resolve333
}

export default function DeviceSettingVariables({children}) {


 useEffect(() => {

    //1. 안드로이드에서 수신 대기 
    document.addEventListener("message", (message: any) => {    
        const response = JSON.parse(message.data)
        const query = Object.keys(response)[0] // API이름 => fetchDeviceSystemForAppSet
        const resolve = 나의요청중인API들[query] // resolve111, resolve222, ....
        resolve({ data : response})
        delete 나의요청중인API들[query]

        ///const resolve111 = 나의요청중인API들.fetchDeviceSystemForAppSet // resolve111
        //const resolve222 = 나의요청중인API들.fetchDeviceSystemForPlatformSet // resolve222
        //const resolve333 = 나의요청중인API들.fetchDeviceLocationForLatLngSet // resolve333
        // resolve111(message.data)
        // resolve222(message.data)
        // resolve333(message.data)
    }
}

import { useAPis } from "@/apis/section03/03-06-post-message-device-api-promise-refactoring";
import { useRef } from "react"; 
import WebView from "react-nativew-webview";

const 내컴퓨터접속주소 = "http://172.16.3.96:8081"

 export default function PostMessageDeviceApiPromiseRefactoringPage() {
    const webviewRef = useRef<WebView>(null)
    const { onRequest } = useApis()

    return (
        <WebView
            ref={webviewRef}
            source={{uri:`${내컴퓨터접속주소}/section03/03-06-post-message-device-api-promise-refactoring`}}
            
            onMessage={(event) => {
                if(!event.nativeEvnet.data) return

                const request = JSON.parse(event.nativeEvent.data)
                onRequest(request.query)
            }}
        
        
        />
    )



2
 }