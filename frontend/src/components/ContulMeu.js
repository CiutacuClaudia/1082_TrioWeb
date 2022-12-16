import React from "react";
function ContulMeu() {
  return (
    <>
      <h1>Contul meu</h1>
      <form className="contulMeu">
        <div>
          <label htmlFor="nume">Nume</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="prenume">Prenume</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="adresa">Adresa</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="grup">Grup preferential</label>
          <select name="grup">
            <option value="vegetarian">Vegetarian</option>
            <option value="pofticios de de toate">Iubitor de zacusca</option>
            <option value="vegan">Vegan</option>
            <option value="iubitor de dulciuri">Iubitor de dulciuri</option>
            <option value="carnivor">Carnivor</option>
          </select>
        </div>
        <div className="buton">
          <button type="button">Creeaza cont !</button>
        </div>
      </form>
    </>
  );
}
export default ContulMeu;
