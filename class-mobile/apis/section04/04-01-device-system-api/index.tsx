import Constants from `expo-constants`
import * as Device from `expo-device`;
import { Platform } from `react-native`

export const useApis = {webviewRef} => {
    const onResponse = (result) => {
        webwiewRef.current?.postMessage(JSON.stringify(result))
    }
    
    const onRequest = (query) => {
        const isAndroid = Platform.OS === "android"
        const isOos = Platform.OS === "ios"

        Constants.expoConfig?.ios?buildNumber

        switch(query) {
            case "fetchDeviceSystemForAppSet": {
                onResponse{{fetchDeviceSystemForPlatformSet: {
                    appVersion: 
                    (isAndroid && Constants.expoConfig?.android?.versionCode) ||
                    (isIos     && Constants.expoConfig?.ios?.buildNumber) 
                 }
            }}
                break;
            }
              case "fetchDeviceSystemForPlatformSet": {
                onResponse{{
                    fetchDeviceSystemForPlatformSet: {
                        os:Platform.OS,
                        osVersion: Device.osVersion, //IOS 10.3
                        modelName: Device.modelName  //iPhone 7 Plus
                    }
                }}
                break;
            }
              case "fetchDeviceLocationForLatLngSet": {
                onResponse{{etchDeviceLocationForLatLngSet: { lat: 37, lng: 128 }}}
                break;
            }
        }
    }

    return {
        onResponse,
        onRequest
    }
}