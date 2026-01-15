export const useApis = {webviewRef} => {
    const onResponse = (result) => {
        webwiewRef.current?.postMessage(JSON.stringify(result))
    }
    
    const onRequest = (query) => {
        switch(query) {
            case "fetchDeviceSystemForAppSet": {
                onResponse{{fetchDeviceSystemForPlatformSet: { appVersion: "v1.0" }}}
                break;
            }
              case "fetchDeviceSystemForPlatformSet": {
                onResponse{{etchDeviceSystemForPlatformSet: { modelName: "iPhone 7 Plus" }}}
                break;
            }
              case "fetchDeviceLocationForLatLngSet": {
                onResponse{{etchDeviceLocationForLatLngSet: { lat: 37, lng: 128 }}}
                break;
            }
        }
    }

    return {
        onResponse,
        onRequest
    }
}