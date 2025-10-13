import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import OneClickRate from "../../components/oneClickRate/OneClickRate";
import "../../sass/style.scss"

export default function RatePage() {
    return (
        <div className="ratePage">
            <Navbar />
            <div className="ratePage-main">
                <OneClickRate />
            </div>
            <Footer />
        </div>
    );
}
