import {HeaderGlobal} from "./header" 


export default function LayoutGlobalAndLocal({children}) {
    return (
        <>
        <HeaderGlobal />
        <div>{children}</div>
        </>
    )
}