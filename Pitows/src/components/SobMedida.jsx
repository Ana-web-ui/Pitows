import React from "react";
import "./css/sobMedida.css";

const SobMedida = () => {
  return (
    <section className="sob-medida">
      <div className="container">
        <div className="image-section">
          <img src="./src/img/made-page.png" alt="" />
        </div>
        <div className="text-section">
          <h2>O que são peças sob medida?</h2>
          <hr />
          <p>
            Peças sob medida são feitas para realçar o estilo e a
            individualidade de cada cliente. Na Pitows, entendemos que cada
            corpo é único, e, por isso, ajustamos cada detalhe para que o
            caimento seja impecável, valorizando o biotipo e proporcionando
            conforto absoluto. Combinando tradição e sofisticação, nossas peças
            sob medida traduzem a elegância sob uma perspectiva personalizada.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SobMedida;
