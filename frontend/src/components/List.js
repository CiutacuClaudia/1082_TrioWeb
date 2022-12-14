import React from "react";
import {NavLink} from 'react-router-dom'
import '../css/listStyle.css'

function List() {
  return (
    <header>
      <div className="container">
        <nav>
          <div className="list">
            <NavLink exact to="/" className="listItem" activeClassName="ActiveItem">  Acasa  </NavLink>
            <NavLink to="/contulmeu"className="listItem" activeClassName="ActiveItem">  Contul Meu  </NavLink>
            <NavLink to="/frigiderulmeu"className="listItem" activeClassName="ActiveItem">   Frigiderul meu  </NavLink>
            <NavLink to="/produseDisponibile"className="listItem" activeClassName="ActiveItem">  Produse disponibile  </NavLink>
            <NavLink to="/prieteni"className="listItem" activeClassName="ActiveItem">  Prieteni  </NavLink>
            <NavLink to="/oferaProdus"className="listItem" activeClassName="ActiveItem">  Ofera un produs  </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
export default List;
