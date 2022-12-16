import React from "react";
function OferaProdus() {
  return (
    <>
      <h1>Ofera un produs</h1>
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
export default OferaProdus;
