const loadMeals=(search)=>{
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayMeals(data.meals))
};
const displayMeals=meals=>{

    const mealsContainer=document.getElementById('meals-container');
    mealsContainer.innerHTML=``;

    meals.forEach(m => {
        console.log(m)
        const mealDiv=document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML=`
        <div onclick="loadMealDetail(${m.idMeal})" class="card">
        <img src="${m.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${m.strMeal
          }</h5>
          <p class="card-text">${m.strInstructions.slice(0,200)
          }</p>
        </div>
      </div>
        
        `;
        mealsContainer.appendChild(mealDiv);

        
    });
}
const searchFood=()=>{

    const searchField=document.getElementById('search-field');
    const searchText=searchField.value;
    loadMeals(searchText);
    searchField.value='';
}
const loadMealDetail=(datailmeal)=>{
// console.log('gogo',datailmeal)
const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${datailmeal}`
// console.log(url)
fetch(url)
.then(res=>res.json())
.then(data=>displayMealDetails(data.meals[0]))

}
const displayMealDetails=(mealinformation)=>{
  const mealsdetailContainer=document.getElementById('mealsdetail-container');
  
  mealsdetailContainer.innerHTML=``;
  const detailDiv=document.createElement('div');
  detailDiv.classList.add('card');
  detailDiv.innerHTML=`
  <img src="${mealinformation.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body ">
                  <h5 class="card-title">${mealinformation.strMeal}</h5>
                  <p class="card-text">${mealinformation.strInstructions.slice(0,200)
                  }</p>
                  <p><strong>${mealinformation.strArea}</strong></p>
                </div>
  
  `;
  mealsdetailContainer.appendChild(detailDiv);


}
//  loadMeals('a');