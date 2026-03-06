import type { ReactNode } from "react";
import Navbar from '@/widgets/Navbar';
import Footer from "../Footer";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="layout">
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
