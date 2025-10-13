// import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider"
import "../../sass/style.scss"

export default function Home() {
    return (
        <div className="home">
            <Navbar />
            <Slider />
        </div>
    )
}
