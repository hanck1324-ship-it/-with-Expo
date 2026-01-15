"use client"

import { useDeviceSettingRedirect } from "@/commons/settings/06-01-device-setting-redirect/hooks/useDeviceSettingRedirect";

export default function OpenSettingsPage() {
    const { fetchApp } = useDeviceSettingRedirect()

    const onClickOpenSettings = () => {
        
    }

    const onClickLocationPermission = () => {
       
    }

    return (
        <>
        <br />
        <br />
       <button onClick={onClickOpenSettings}> [권한변경]</button><br />
       <button onClick={onClickLocationPermission}> [권한조회]</button>
        </>
    )
}