import Finalize from "./components/Finalize";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Welcome from "./components/Welcome";
import finalizeData from "./data/finalizeData";

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <Welcome />
            <Finalize title={finalizeData.title} description={finalizeData.description} buttons={finalizeData.buttons} />
            <Products />
        </>
    )
}

export default HomePage