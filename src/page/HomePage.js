import MainPage from "../section/MainPage";
import About from "../section/About";
import Services from "../section/Services";
import ExplanationServices from "../section/ExplanationServices";
import GetToKnowMe from "../section/GetToKnowMe";
import AboutD from "../section/AboutD";
import SkillsAndExpertise from "../section/SkillsAndExpertise";
import Projects from "../section/Projects";
import Opinions from "../section/Opinions";
import PortfolioEntry from "../section/PortfolioEntry";
import FAQs from "../section/FAQs";
import ContactMe from "../section/ContactMe";
// import { Helmet } from 'react-helmet-async'

const HomePage = () => {
  return (
    <div>
      <MainPage />
      <About />
      <Services />
      <ExplanationServices />
      <AboutD />
      <GetToKnowMe />
      <SkillsAndExpertise />
      <Projects />
      <Opinions />
      <PortfolioEntry />
      <FAQs />
      <ContactMe />
    </div>
  );
};

export default HomePage;

//   <Helmet>
//   <title> Category</title>
// </Helmet>
