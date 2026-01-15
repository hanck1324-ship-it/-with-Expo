"use client"

import { usePathname, useParams } from "next/navigation";
import { HEADER_OPTIONS } from "./constants";

const HeaderBase= ({ children, hasLogo, hasBack, title}) => {
    return(
     <header 
      style={{
        width : "100vw",
        height : "3.125rem",
        backgroundColor : "yellow"
            }}
        >
          {hasLogo && <div>로고</div>}`
          {hasBack && <div>[ 뒤로가기버튼 ]</div>}  
          {title && <div> {title}</div>}
          {children? <> {children}</> : <></>}

      </header>
    );
}   



export function HeaderGlobal(){

    const pathname = usePathname()
    const param = useParams()

    const options = HEADER_OPTIONS(params).GLOBAL[pathname]
    
    
 return (   
    <div style={{display: options ? "block": "none"}}>
        <HeaderBase {...options}/>
    </div>
      );
    }
 

export function Header({children}){

    const pathname = usePathname()
    const param = useParams()
 
    const options = HEADER_OPTIONS(params).LOCAL[pathname]
   
     return (   
       <div style={{display: options ? "block": "none"}}>
          <HeaderBase {...options} {...rest}>
            {children}
          </HeaderBase>
         </div>
    );
}   

