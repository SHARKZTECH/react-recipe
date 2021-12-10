import React from "react";


function Recip({recipe}){
    let s="strYoutube,idMeal, strMeasure1 , strMealThumb, strMeal, strInstructions,strIngredient1,strCategory"
    return(      
      
         
			<div className="meal-item">
          <div className="meal-img">
            <img src={recipe.strMealThumb} alt="food"/>
          </div>
            <div className="meal-name">
               <h5>{recipe.strMeal}</h5>
               <a href="#" className="recipe-btn">Get Recipe</a>
            </div>
         </div> 
      





     
    )
}
export default Recip;