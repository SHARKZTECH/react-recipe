import './App.css';
import React,{useEffect,useState} from 'react';
import Recip from './Recip';

function App() {
  const [recipes,setRecipe]=useState([]);
  const [search,setSearch]=useState("");
  const [query,setQuery]=useState(" ");

   useEffect(()=>{
    getRecipe();
  },[query]);

     
  const getRecipe= async ()=>{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}
    `)
    const data= await response.json();
    setRecipe(data.meals)
    console.log(recipes)
  }

  const updateSearch=e=>{
    setSearch(e.target.value);  
  }

  const getSeach=e=>{
    e.preventDefault();
    setQuery(search);  
  
    setSearch(" ");
   
  }

  return (
    <div className="container" >
      		<div class="meal-wrapper">
			<div class="meal-search">
				<h2>Find Meal For Your Ingredient</h2>
					
						
          <form onSubmit={getSeach} >
          <div class="meal-search-box">
					<input type="text" className="search-control" placeholder="Enter an ingreadient"  value={search} onChange={updateSearch}/>
					<button type="submit" className="search-btn btn" id="search-btn">
						<i className="fas fa-search">search</i>
					</button>
          </div>
          </form>
			
			</div>
      </div>
      <div id="meal">

         {
            recipes.map(recipe=>(
          <Recip recipe={recipe} key={recipe.idMeal}  />
        ))
        
         }
     </div>
    </div>
  );
}

export default App;
