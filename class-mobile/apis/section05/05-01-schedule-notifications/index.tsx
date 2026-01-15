import { useDeviceSystem } from "./01-use-device-system"
import { useDeviceLocation } from "./02-use-device-location"
import { useDeviceNotifications } from "./03-use-device-notifications"

export const useApis = {webviewRef} => {
   
    const onResponse = (result) => {
        webwiewRef.current?.postMessage(JSON.stringify(result))
    }

            const APIS = {
           ...useDeviceSystem(onReponse),
           ...useDeviceLocation(onResponse),
           ...useDeviceNotifications(onResponse)
        }   
    
55

    const onRequest = (query, variables) => {
                                                                                                                                                  
         APIS[query]()
    }

    return {
        onResponse,
        onRequest
        }
    }
