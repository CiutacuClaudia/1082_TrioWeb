import React from "react";
function Frigider() {
  return (
    <>
      <h1>Frigiderul meu</h1>
      {/* categoriile o sa fie din bd */}
      <div>
        <label htmlFor="categorie">Categorie </label>
        <select name="categorii">
          <option value="Lactate">Lactate</option>
          <option value="Carne">Carne</option>
          <option value="Fructe">Fructe</option>
          <option value="Legume">Legume</option>
          <option value="Patiserie">Patiserie</option>
        </select>
      </div>
    </>
  );
}
export default Frigider;
