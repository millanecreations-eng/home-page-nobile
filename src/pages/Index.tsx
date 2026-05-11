import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Categories from "@/components/site/Categories";
import Destinations from "@/components/site/Destinations";
import NobilePlus from "@/components/site/NobilePlus";
import HotelsList from "@/components/site/HotelsList";
import OfferBanner from "@/components/site/OfferBanner";
import Benefits from "@/components/site/Benefits";
import Footer from "@/components/site/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main>
        <Hero />
        <Categories />
        <NobilePlus />
        <Destinations />
        <HotelsList />
        <OfferBanner />
        <Benefits />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
