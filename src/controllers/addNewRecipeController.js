function addNewRecipe(){
    let inputTitle = document.getElementById('title').value
    let inputIngredients = document.getElementById('ingredients').value
    let inputTags = document.getElementById('tags').value
    let inputInstructions = document.getElementById('instructions').value
    
   recipe = {

        id:model.recipes.length+1,
        title: inputTitle,
        addedByUser: 1,
        ingredients: inputIngredients.split("\n"),
        instructions: inputInstructions.split("\n"),
        tags: inputTags.split(','),
    }
    model.recipes.push(recipe)
    updateView();
}