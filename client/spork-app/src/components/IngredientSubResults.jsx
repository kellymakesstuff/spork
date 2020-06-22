// As of right now, this is roughly created since I pretty much just copied and edited what Zain had in RecipeResults.jsx
// Input API call as normal
// Set "ingredient" (e.target.value) to searched value

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Search from "./shared/Search";
import axios from "axios";

export default function IngredientSubResults(props) {
  console.log(props);

  // function SubResults() {
  //   const filteredData = props.data.filter((ingredient) => {
  //     return ingredient.substitution
  //       .toLowerCase()
  //       .includes(props.inputValue.toLowerCase());
  //   });
  // }

  const [substitute, updateSubstitute] = useState([]);

  useEffect(async () => {
    let data = await axios(
      `https://api.spoonacular.com/food/ingredients/substitutes?apiKey=8aa87f0f7bfb4adc8f4270c1c8cc9042&ingredientName=${props.inputValue}`
    );
    console.log(data, "line 25");
    // console.log(recipe)
  }, []);

  return (
    <div>
      <h2>Hi</h2>
    </div>
  );

  //   <div>
  //     <div className="header">Substitutions</div>
  //     {filteredData.map((substitute) => (
  //       <div className="filter-detail" key={substitute.ingredientName}>
  //         <Link to={`/substitute/${substitute}`}>
  //           {/* <img src={} width="250px" /> */}
  //           <h3>{substitute.ingredientName}</h3>
  //         </Link>
  //         <div className="conversionAmt">{substitute.sourceAmount}</div>
  //         <div className="conversionUnit">{substitute.sourceUnit}</div>
  //         <div className="targetUnit">{substitute.targetUnit}</div>
  //         <img src="/src/images/down-arrow.png" alt="Down Arrow" />
  //       </div>
  //     ))}
  //   </div>
  // );
}

// return (
//   <div>
//     <div className="header">Substitutions</div>
//     {filteredData.map((substitute) => (
//       <div className="filter-detail" key={substitute.ingredientName}>
//         <Link to={`/substitute/${substitute}`}>
//           {/* <img src={} width="250px" /> */}
//           <h3>{substitute.ingredientName}</h3>
//         </Link>
//         <div className="conversionAmt">{substitute.sourceAmount}</div>
//         <div className="conversionUnit">{substitute.sourceUnit}</div>
//         <div className="targetUnit">{substitute.targetUnit}</div>
//         <img src={/src/images/down-arrow.png} alt="Down Arrow" />
//       </div>
//     ))}
//   </div>
// );
// }

// export const getSubstitution = async () => {
//   try {
//     const response = await api.get(
//       `/food/ingredients/substitutes?ingredientName=${ingredient}`
//     );
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };
