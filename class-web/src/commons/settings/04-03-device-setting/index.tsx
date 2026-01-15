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




 }