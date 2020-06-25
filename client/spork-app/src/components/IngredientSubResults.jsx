import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/Main.css";
import "../css/IngredientSub.css";
import CondensedHeader from "./shared/CondensedHeader";
import downArrow from "../images/down-arrow.png";
import sporkLogo from "../images/spork-logo.png";
import dotenv from "dotenv";
dotenv.config();
const API_KEY = process.env.REACT_APP_SPOON_API_KEY;

export default function IngredientSubResults(props) {
  const [substitute, updateSubstitute] = useState([]);
  const [newIngred, updatenewIngred] = useState([]);
  let lastWordImg = [];
  let [lastWord, updateLastWord] = useState([]);
  let renameImg = (newIngred) => {
    for (let i = 0; i < newIngred.length; i++) {
      let lastWord = newIngred[i].split(" ").pop();
      let imgUrl = `https://spoonacular.com/cdn/ingredients_500x500/${lastWord}.jpg`;
      console.log(lastWord, "last word");
      lastWordImg.push(imgUrl);
      console.log(lastWordImg, "lastWordImg");
    }
    updateLastWord(lastWordImg);
  };

  useEffect(async () => {
    let data = await axios(
      `https://api.spoonacular.com/food/ingredients/substitutes?apiKey=${API_KEY}&ingredientName=${props.inputValue}`
    );

    updateSubstitute(data.data);
    console.log("data", data.data);
    if (data.data.status === "failure") {
      updatenewIngred(["Oops! No substitutes found."]);
      updateLastWord([sporkLogo]);
    } else {
      updatenewIngred(data.data.substitutes);
      renameImg(data.data.substitutes);
    }
  }, []);

  return (
    <>
      <CondensedHeader />
      <div className="ingSubFull">
        <div className="header">Substitute Results</div>
        <img
          className="circleImg"
          src={`https://spoonacular.com/cdn/ingredients_500x500/${props.inputValue}.jpg`}
          alt="chosen ingredient"
        />
        <h2>{substitute.ingredient}</h2>
        <img src={downArrow} className="downArrow" alt="down arrow" />

        <div className="ingSubBox">
          {lastWord.map((ing) => (
            <img className="circleImg" src={ing} alt="chosen ingredient" />
          ))}
          {newIngred.map((ing) => (
            <p>{ing}</p>
          ))}
        </div>
      </div>
    </>
  );
}
