import Header from "../components/Header";
import Footer from "../components/Footer";
import MainSection from "../components/home/MainSection";
import ProductSection from "../components/home/ProductSection";
import LearnMoreSection from "../components/home/LearnMoreSection";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <MainSection />
      <ProductSection />
      <LearnMoreSection />
      <Footer />
    </div>
  );
};
export default Home;
