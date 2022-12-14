import React from "react";
import {NavLink} from 'react-router-dom'
import "../css/acasa.css"
const Acasa = () => {
  return (
    <>
      <div className="mainSection">
        <div className="continut">
          <p  className="evitaRisipa">
            EVITA RISIPA
          </p>
          <NavLink to="/oferaProdus"className="listItem" activeClassName="ActiveItem">  Ofera un produs  </NavLink>
        </div>
      </div>
    </>
  );
};
export default Acasa;
