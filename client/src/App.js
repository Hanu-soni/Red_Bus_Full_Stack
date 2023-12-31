import "./App.css";  //to use all defined css
import { useState } from "react";//react hook
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";//
import Footer from "./Components/Footer";
import HomePage from "./Pages/Home_Page";
import AvailableBusPage from "./Pages/Available_bus_page";
import InfoPage from "./Pages/Info_page";
import PaymentPage from "./Pages/Payment_page";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Allbus from "./Components/allbuses";
function App() {
  const [authentication, setAuthentication] = useState(false);
  return (
    <div className="App">
      <ToastContainer></ToastContainer>
      <Header
        authentication={authentication}
        setAuthentication={setAuthentication}
      />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
              // authentication={authentication}
              // setAuthentication={setAuthentication}
              />
            }
          />
          <Route path="/availablebus" element={<AvailableBusPage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/allbus" element={<Allbus />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
