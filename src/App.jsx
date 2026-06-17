import { useEffect } from "react";
import Home from "./pages/Home";
import WhatsAppButton from "./components/WhatsAppButton";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Home />

      <WhatsAppButton />
    </>
  );
}

export default App;