import Hero from "../components/hero/Hero";
import BookCar from "../components/bookcar/BookCar";
import PlanTrip from "../components/plantrip/PlanTrip";
import PickCar from "../components/pickcar/PickCar";
import Banner from "../components/banner/Banner";
import ChooseUs from "../components/chooseUs/ChooseUs";
import Testimonials from "../components/testimonials/Testimonials";
import Faq from "../components/faq/Faq";
import Download from "../components/download/Download";
import Footer from "../components/footer/Footer";

function Home() {
  return (
    <>
      <Hero />
      <BookCar />
      <PlanTrip />
      <PickCar />
      <Banner />
      <ChooseUs />
      <Testimonials />
      <Faq />
      <Download />
      <Footer />
    </>
  );
}

export default Home;
