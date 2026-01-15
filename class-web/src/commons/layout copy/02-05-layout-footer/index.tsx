import {HeaderGlobal} from "./ header2"


export default function LayoutFooter({ children }) {
    return (
        <>
        <div
        style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            height: "100vh"
        }}
    >
        <HeaderGlobal />
        <div>{children}</div>
         </div>
     </>
    )
}