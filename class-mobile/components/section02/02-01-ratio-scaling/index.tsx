import WebView from "react-native-webview"

const 내컴퓨터접속주소 = "http://localhost3000 "


export default function WebviewInternetFailPage() {
    return(
        <WebView 
            source={{
              uri:`${내컴퓨터접속주소}/section02/02-01-ratio-scaling`
            }} 
        />
    )
}