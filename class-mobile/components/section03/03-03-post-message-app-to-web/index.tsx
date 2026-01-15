import { useRef } from "react"
import { Button } from "react-native"
import WebView from "react-native-webview"

const 내컴퓨터접속주소 = "http://172.16.3.96:8081 "


export default function PostMessageAppToWebPage() {
    const webviewRef = useRef<WebView>(null);  

    const onPressButton = () => {
        webviewRef.current?.postMessage("apple");
    }
    
    return(
        <>
        <WebView 
            ref={webviewRef}
            source={{
              uri:`${내컴퓨터접속주소}/section03/03-03-post-message-app-to-web`
            }}
            onMessage={(event) => {        
                    
               if(!event.nativeEvent.data) return
                console.log(`web에서 보내준 데이터: ${event.nativeEvent.data}`)
            
            }} 
        />


    <Button onPress={onPressButton} title="Web아! 데이터 줄게!"/>
            </>
    )
}