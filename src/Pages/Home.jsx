import { SliderImages, Navbar , NewsLine , AboutSection , FeaturesSection , AccordionSection, FooterSection , FavouriteCharSection } from "../Components";
import { settings } from '../utils/sliderOption';

function Home () {
  return (
    <div className="App">
      <Navbar/>
      <SliderImages settings={settings} rtl={false} />
      <SliderImages settings={settings} rtl={true}/>
      <NewsLine/>
      <AboutSection/>
      <FeaturesSection/>
      <FavouriteCharSection/>
      <AccordionSection/>
      <FooterSection/>
    </div>
  );
}

export default Home ;
