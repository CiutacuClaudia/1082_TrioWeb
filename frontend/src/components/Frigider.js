// import React from "react";
// function Frigider() {
//   return (
//     <>
//       <h1>Frigiderul meu</h1>
//       {/* categoriile o sa fie din bd */}
//       <div>
//         <label htmlFor="categorie">Categorie </label>
//         <select name="categorii">
//           <option value="Lactate">Lactate</option>
//           <option value="Carne">Carne</option>
//           <option value="Fructe">Fructe</option>
//           <option value="Legume">Legume</option>
//           <option value="Patiserie">Patiserie</option>
//         </select>
//       </div>
//     </>
//   );
// }
// export default Frigider;
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const FoodItemList = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/frigiderulmeu');
      const data = await response.json();
      setFoodItems(data);

      // extract categories from food items
      const categories = Array.from(new Set(data.map(item => item.category)));
      setCategories(categories);
    }
    fetchData();
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  }

  const handleMarkAsAvailable = (foodItemId) => {
    dispatch(markFoodItemAsAvailable(foodItemId));
  }

  let filteredItems = foodItems;
  if (selectedCategory) {
    filteredItems = foodItems.filter(item => item.category === selectedCategory);
  }

  return (
    <div>
      <h1>Food Items</h1>
      <div>
        <label>
          Select Category:
          <select value={selectedCategory} onChange={e => handleCategorySelect(e.target.value)}>
            <option value="">All</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </label>
      </div>
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>
            {item.name} - {item.category}
            <button onClick={() => handleMarkAsAvailable(item.id)}>Mark as Available</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodItemList;
