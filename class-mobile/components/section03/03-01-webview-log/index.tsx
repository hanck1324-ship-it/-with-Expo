import { Button } from "react-native"
import WebView from "react-native-webview"

const 내컴퓨터접속주소 = "http://172.16.3.96:8081 "


export default function WebviewLogPage() {
 
    const onPresButton = () => {
        console.log("이것은 모바일 로그입니다.")
    }

    return(
        <>
        <WebView 
            source={{
              uri:`${내컴퓨터접속주소}/section03/03-01-webview-log`
            }} 
        />
       
        <Button onPress={onPresButton} title="모바일버튼" />
    
     </>
    )
}