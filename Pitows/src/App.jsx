import React from "react";
import Header from "./components/Header";
import SobMedida from "./components/SobMedida";
import Ajustes from "./components/Ajustes";
import Convite from "./components/Convite";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <SobMedida />
      <Ajustes />
      <Convite />
      <Footer />
    </div>
  );
}

export default App;
