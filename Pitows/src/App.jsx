import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Section from "./components/section";
import Title from "./components/Title";
import './App.css';
function App() {
  return (
    <div className="App">
      <Header />
      <Title />
      <Section title={'O que são peças sob medida?'} content={
        'Peças sob medida são feitas para realçar o estilo e a individualidade de cada cliente. Na Pitows, entendemos que cada corpo é único, e, por isso, ajustamos cada detalhe para que o caimento seja impecável, valorizando o biotipo e proporcionando conforto absoluto. Combinando tradição e sofisticação, nossas peças sob medida traduzem a elegância sob uma perspectiva personalizada.'
      } content_right={true} img_path={'./src/img/made-page.png'} />

      <Section title={'Ajustes'} content={
'Além das peças sob medida, a Pitows oferece ajustes de alta qualidade para peças pré-prontas, garantindo que cada detalhe se adapte perfeitamente ao corpo de quem veste. Nosso serviço de ajustes é minucioso e preciso, transformando qualquer peça em uma extensão do estilo pessoal do cliente. Com dedicação e técnica, asseguramos conforto e elegância em cada ajuste.'} content_right={false} img_path={'./src/img/made-page-2.png'} />

      <Section title={'Convite'} content={
        'Convidamos você a visitar nossa loja física e vivenciar a experiência de provar nossos ternos de alfaiataria. Aqui, você encontrará modelos exclusivos e poderá sentir de perto a qualidade, o caimento e o estilo que cada peça oferece, descobrindo qual delas melhor atende às suas expectativas. A elegância veste Pitows.'
      } content_right={true} img_path={'./src/img/made-page-3.png'} />
      
      <Footer />
    </div>
  );
}

export default App;
