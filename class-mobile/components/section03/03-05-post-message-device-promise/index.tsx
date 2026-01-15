import { useRef } from "react"
import WebView from "react-native-webview"

const 내컴퓨터접속주소 = "http://172.16.3.96:8081 "


export default function PostMessageDeviceAPiPromisePage() {
    const webviewRef = useRef<WebView>(null);  
    
    return(
        
        <WebView 
            ref={webviewRef}
            source={{
              uri:`${내컴퓨터접속주소}/section03/03-05-post-message-device-api-promise`
            }}
            onMessage={(event) => {        
                    
               if(!event.nativeEvent.data) return

              const request = JSON.parse(event.nativeEvent.data)
                console.log(request)
                switch(request.query) {
                    case "fetchBoardSystemForAPPSet": {
                        webviewRef.current?.postMessage (
                            JSON.stringify({
                                fetchDeviceSystemForAppSet: {
                                    applyVersion:"v1.0"
                                }
                            })
                        ) 
                        break;  
                    }   
                    case "fetchDeviceSystemForPlatformSet": {
                        webviewRef.current?.postMessage (
                          JSON.stringify({
                            fetchDeviceSystemForPlatformSet: {
                                 modelName:"iPhone 7 Plus"
                            }
                          })
                        )
                        break;
                    }   
                    case "fetchDeviceLocationForLatLngSet": {
                        webviewRef.current?.postMessage (
                            JSON.stringify({
                                fetchDeviceLocationForLatLngSet: {
                                    latitude: 37,
                                    longitude: 128
                                }
                            })
                        )
                        break;
                    } 
                }
            }} 
        />
    )
}