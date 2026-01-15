improt { 나의요청중인API들 } from "."

declare const window:Window & {
    ReactNativeWebView: {
        postMessage:(message: string) => void
    }
}
const 나의요청중인API들 = {
    // fetchDeviceSystemForAppSet: resolve111
    // fetchDeviceSystemForPlaformSet: resolve222
    // fetchDeviceLocationForLatLngSet: resolve333
}

export const useDeviceSettingVariables = () => {
    
    const fetchApp = async ({ query, variable={} }) => {
         const result = await new Promise((resolve) => {
            나의요청중인API들[query] = resolve
            window.ReactNativeWebView.postMessage(
                JSON.stringify({ query, variables })
             )
        })
        return result
    }

    return {
        fetchApp
    }
}