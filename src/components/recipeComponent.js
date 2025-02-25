

function recipeComponent(recipe) {   
    return /*HTML*/`
        <div class="recipe">
            <div class="recipe-header">
                <h3>${recipe.title}</h3>
            </div>
            <div class="tag-list">
                ${createTagListHtml(recipe.tags)}
            </div>
            <p><strong>Ingredients:</strong></p>
            <ul class="ingredients-list">
                ${createIngredientsHtml(recipe.ingredients)}
            </ul>
            <p><strong>Instructions:</strong></p>
            ${createInstructionsHtml(recipe.instructions)}
        </div>
    `;
}

function createInstructionsHtml(instructions) {
    let instructionsHtml = '';
    let counter = 1;
    for(const instruction of instructions) {
        instructionsHtml += `<p>${counter+1}. ${instruction}</p>`;
        counter++;
    }

    return instructionsHtml;
}

function createTagListHtml(tags) {
    let tagListHtml = '';
    for(const tag of tags) {
        tagListHtml += `<span class="tag">${tag}</span>`;
    }

    return tagListHtml;
}

function createIngredientsHtml(ingredients) {
    let ingredientsHtml = '';
    for(const ingredient of ingredients) {
        ingredientsHtml += `<li>${ingredient}</li>`;
    }

    return ingredientsHtml;
}