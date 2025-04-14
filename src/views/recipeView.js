function recipeView() {
    let recipeHtml = '';
    for(const recipe of model.recipes) {
        recipeHtml += recipeComponent(recipe);
    }

    return /*HTML*/`       
         <div id="recipe-list">
            ${recipeHtml}
        </div>
    `;
}