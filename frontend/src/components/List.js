import React from "react";
import {NavLink} from 'react-router-dom'
function List() {
  return (
    <header>
      <div className="container">
        <nav>
          <div className="list">
            <NavLink to="/">Acasa></NavLink>
            <NavLink to="/contulmeu">Contul Meu></NavLink>
            <NavLink to="/frigiderulmeu">Frigiderul meu></NavLink>
            <NavLink to="/produseDisponibile">Produse disponibile></NavLink>
            <NavLink to="/prieteni">Prieteni></NavLink>
            <NavLink to="/oferaProdus">Ofera un produs></NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
export default List;
