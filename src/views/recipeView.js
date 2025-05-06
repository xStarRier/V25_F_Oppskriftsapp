function recipeView() {
    let recipeHtml = createTagsHtml(recipeTagList());
    if(model.app.searchTag !== ''){
        let filteredRecipes = model.recipes.filter(object => object.tags.includes(model.app.searchTag))
        console.log(filteredRecipes)
        for(const recipe of filteredRecipes){
        recipeHtml += recipeComponent(recipe);
        }
        }
    
    if(model.app.searchInput !== ''){  
        let filteredRecipes = model.recipes.filter(object => object.title.toLocaleLowerCase().includes(model.app.searchInput))
     for(const recipe of filteredRecipes){
        recipeHtml += recipeComponent(recipe);
     }
    }else {   
      for(const recipe of model.recipes) {
        recipeHtml += recipeComponent(recipe);
    }  
    }
    return /*HTML*/`       
         <div id="recipe-list">
            ${recipeHtml}
        </div>
    `;
}