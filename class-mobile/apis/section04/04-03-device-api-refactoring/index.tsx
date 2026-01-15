import { useDeviceSystem } from "./01-use-device-system"
import { useDeviceLocation } from "./02-use-device-location"

export const useApis = {webviewRef} => {
   
    const onResponse = (result) => {
        webwiewRef.current?.postMessage(JSON.stringify(result))
    }

            const APIS = {
           ...useDeviceSystem(onReponse),
           ...useDeviceLocation(onResponse)
        }   
    


    const onRequest = (query) => {
                                                                                                                                                  
         APIS[query]()
    }

    return {
        onResponse,
        onRequest
        }
    }
