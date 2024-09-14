import Focuson from "./components/focuson";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Initiative from "./components/initiative";
import MostRequested from "./components/mostrequested";
import Navbar from "./components/navbar";
import Options from "./components/opttions";
import YourGovt from "./components/yourgovt";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <MostRequested/>
      <Options/>
      <Focuson/>
      <YourGovt/>
      <Initiative/>
      <Footer/>
    </>
  );
}
