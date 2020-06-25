import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Search from "./shared/Search";
import axios from "axios";
import "../css/Main.css";
import DummyComponent from "../components/DummyComponent";
import CondensedHeader from "./shared/CondensedHeader";
import downArrow from "../images/down-arrow.png";

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
  const [newIngred, updatenewIngred] = useState([]);
  // const [ingredImgName, updateIngredImgName] = useState([])
<<<<<<< HEAD
  let lastWordImg = [];
=======
  let lastWordImg = []


  let renameImg = (newIngred) => {
    for (let i = 0; i < newIngred.length; i++) {
      let lastWord = newIngred[i].split(" ").pop();
      console.log(lastWord, "last word")
      lastWordImg.push(lastWord)
      console.log(lastWordImg, "lastWordImg")
    }

  }


  // let imgPopulate = () => {
  //   for (let i = 0; i < newIngred.length; i++) {
  //     // let newItem = newIngred[i]
  //     // let newImg = lastWordImg[i]
  //     // console.log("newItem", newItem)
  //     console.log("newImg", newImg[i])
  //     // return <div><img className="circleImg" src={`https://spoonacular.com/cdn/ingredients_500x500/${newImg}.jpg`} alt="chosen ingredient" /><p>{newItem}</p></div>
  //   }

  // }
>>>>>>> 07359daf9336581a5dcdcecc18652a2f167457dd

  useEffect(async () => {
    let data = await axios(
      `https://api.spoonacular.com/food/ingredients/substitutes?apiKey=8aa87f0f7bfb4adc8f4270c1c8cc9042&ingredientName=${props.inputValue}`
    );

    console.log(data.data, "line 25");
<<<<<<< HEAD
    updateSubstitute(data.data);
    updatenewIngred(data.data.substitutes);
    console.log(newIngred, "line 29");

    let renameImg = (newIngred) => {
      for (let i = 0; i < newIngred.length; i++) {
        let lastWord = newIngred[i].split(" ").pop();
        console.log(lastWord, "last word");
        lastWordImg.push(lastWord);
        console.log(lastWordImg, "lastWordImg");
      }
    };

    renameImg(newIngred);
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
          {newIngred.map((ing) => (
            <div>
              <img
                className="circleImg"
                src={`https://spoonacular.com/cdn/ingredients_500x500/${ing}.jpg`}
                alt="chosen ingredient"
              />
              <p>{ing}</p>
            </div>
          ))}
        </div>
=======
    updateSubstitute(data.data)
    renameImg(data.data.substitutes)
    updatenewIngred(data.data.substitutes)
    console.log(newIngred, "line 29")



  }, []);

  return <>
    <CondensedHeader />
    <div className="ingSubFull">
      <div className="header">Substitute Results</div>
      <img className="circleImg" src={`https://spoonacular.com/cdn/ingredients_500x500/${props.inputValue}.jpg`} alt="chosen ingredient" />
      <h2>{substitute.ingredient}</h2>
      <img src={downArrow} className="downArrow" alt="down arrow" />

      <div className="ingSubBox">
        {lastWordImg.map(ing => <img className="circleImg" src={`https://spoonacular.com/cdn/ingredients_500x500/${ing}.jpg`} alt="chosen ingredient" />)}
        {newIngred.map(ing => <p>{ing}</p>)}


>>>>>>> 07359daf9336581a5dcdcecc18652a2f167457dd
      </div>
    </>
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
