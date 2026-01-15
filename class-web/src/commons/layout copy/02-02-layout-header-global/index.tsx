import Header from '../../commons/layout/02-02-layout-header-global/header'

export default Layout({children}) {
    return (
        <>
        <Header />
        <div>{children}</div>
        </>
    )
}