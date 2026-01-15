import WebView from "react-native-webview"

const 내컴퓨터접속주소 = "http://172.16.3.96:8081 "


export default function PostMessageWebToAppPage() {
    return(
        <WebView 
            source={{
              uri:`${내컴퓨터접속주소}/section03/03-02-post-message-web-to-app`
            }}
            onMessage={(event) => {        
                    
               if(!event.nativeEvent.data) return
                console.log(`web에서 보내준 데이터: ${event.nativeEvent.data}`)
            
            }} 
        />
    )
}