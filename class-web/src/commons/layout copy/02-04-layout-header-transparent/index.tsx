import HeaderGlobal from "./header2.jsx";



export default function LayoutTransparnet({children}) {
    return (
        <>
        <HeaderGlobal />
        <div>{children}</div>
        </>
    )
}