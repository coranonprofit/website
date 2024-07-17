import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import BranchesMenu from "@/components/BranchesMenu";

export default function Layout({ children }: { children?: any }) {
    return (
        <>
            <NavBar />
            <BranchesMenu />
            {children}
            <Footer />
        </>
    );
}