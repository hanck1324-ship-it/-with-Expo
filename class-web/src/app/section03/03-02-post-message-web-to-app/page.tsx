"use client"

declare const window: Window & { 
    ReactNativeWebView: {
        postMessage: (message: string) => void
    }
}

export default function PostMessageWebToAppPage() {
    
    const onClickButton = () => {
        window.ReactNativeWebView.postMessage("banana")
    }
     
    return(
        <>
            <br/>
            <br/> 
                <button onClick={onClickButton}>App아! 데이터 줄게!</button>          
        </>
    )
}