// src/commons/layout/02-05-layout-footer/constants3.ts

export const HEADER_OPTIONS = (params)  => ({
    GLOBAL: {
        "/section-02/02-02-layout-header-Global": { hasLogo: true, hasBack: false, title: "게시글수정"}, 
        "/section-02/02-04-layout-header-transparent": { hasLogo: true, hasBack: true, title: "사진상세", isTransparent: true}, 
        "/section-02/02-04-layout-header-untransparent": { hasLogo: true, hasBack: true, title: "게시글등록", isTransparent: false}
        "/section-02/02-05-layout-footer": { hasLogo: true, hasBack: true, title: "게시글등록", isTransparent: false}   
    },
}),
    LOCAL: {
       [ `/section-02/02-03-layout-header-local/${params.id}`]: { hasLogo: true, hasBack: false, title: ""}
}