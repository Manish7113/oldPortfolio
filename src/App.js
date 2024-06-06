import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Intro from './Components/Intro';
import About from './Components/About';
import Service from './Components/Service';
import Contact from './Contact';
import Footer from './Footer';
import Header1 from './Components/Header1';
// import {  SettingContextProvider, SettingsConsumer } from "@/@core/context/settingContext";
// import { SettingContextProvider , SettingsConsumer } from './context/settingContext';
import SettingContextProvider from './context/settingContextProvider';


 
function App() {
  return (
    <div className="App">
      <SettingContextProvider>
        
      <Header1></Header1>

      <Intro></Intro>

      <About></About>

      <Service></Service>

      <Contact></Contact>

      <Footer></Footer>

       
      </SettingContextProvider>
    </div>
  );
}

export default App;
