import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function Layout({
    children
}: {
    children?:any
}) {
    return <>
        <NavBar />
        {children}
        <Footer />
    </>
}