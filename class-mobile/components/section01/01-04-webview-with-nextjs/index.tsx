import WebView from "react-native-webview";

export default function WebviewWithNextjsPage() {
    return (
        <WebView
                source= {{
                    url: "https://172.16.3.96:3000/section01/01-04-webview-with-nextjs". //172.16.3.96 와이파이 주소  
            }} 
         />
    )
}