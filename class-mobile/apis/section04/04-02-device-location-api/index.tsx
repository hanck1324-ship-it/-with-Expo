import Constants from `expo-constants`
import * as Device from `expo-device`;
import { Platform } from `react-native`
import * as Location from `expo-location`

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
               const 권한허락받고요청하기 = async () => {

                  
               const result =  await Location.requestForegroundPermissionsAsync()
                if(result.status === "granted") {

                    const location = await Location.getCurrentPositionAsync({
                        accuracy: Location.Accuracy.High
                    })
                    oneResponse({
                        fetchDeviceLocationForLatLngSet: {
                            location.coords.latitude
                            location.coords.longitude
                        }   
        
                    })
                         
                } else {
                    onResponse({etchDeviceLocationForLatLngSet: { lat: 37, lng: 128 }})
                }               

                    }  
                권한허락받고요청하기()
                break;
            }
        }
    }

    return {
        onResponse,
        onRequest
    }
}
