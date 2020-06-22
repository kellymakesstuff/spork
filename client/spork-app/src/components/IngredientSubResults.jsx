// As of right now, this is roughly created since I pretty much just copied and edited what Zain had in RecipeResults.jsx

import React from "react";
import { Link } from "react-router-dom";
import Search from "./shared/Search";

function SubResults() {
  const filteredData = props.data.filter((ingredient) => {
    return ingredient.substitution
      .toLowerCase()
      .includes(props.inputValue.toLowerCase());
  });

  return (
    <div>
      <div className="header">Substitutions</div>
      {filteredData.map((substitute) => (
        <div className="filter-detail" key={substitute.ingredientName}>
          <Link to={`/substitute/${substitute}`}>
            {/* <img src={} width="250px" /> */}
            <h3>{substitute.ingredientName}</h3>
          </Link>
          <div className="conversionAmt">{substitute.sourceAmount}</div>
          <div className="conversionUnit">{substitute.sourceUnit}</div>
          <div className="targetUnit">{substitute.targetUnit}</div>
          <img src={/src/images/down-arrow.png} alt="Down Arrow" />
        </div>
      ))}
    </div>
  );
}
