const HEADER_OPTIONS = {
    GLOBAL: {
        "/section-02/02-02-layout-header-global": { hasLogo: true, hasBack: false, title: "게시글수정"}
}

export default function HeaderGlobal(){

    const pathname = usePathname()

    const profile = {
        name : "홍길동",
    }


    const options = HEADER_OPTIONS.GLOBAL["/section-02/02-02-layout-header-global"]
   
     return (   
      <header 
      style={{
        width : "100vw",
        height : "3.125rem",
        backgroundColor : "yellow"
            }}
       >
          {options.hasLogo && <div>로고</div>}`
          {options.hasBack && <div>[ 뒤로가기버튼 ]<div>}  
          {options.title && <div>게시글등록</div>}
      </header>
    );
}