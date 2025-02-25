

function addRecipeView() {
    return /*HTML*/`
    <div class="content">
        <form id="recipe-form">
            <div class="form-group">
                <label for="title">Recipe Title</label>
                <input type="text" id="title" required>
            </div>
            
            <div class="form-group">
                <label for="tags">Tags (comma separated)</label>
                <input type="text" id="tags" placeholder="e.g. Breakfast, Vegetarian, Quick">
            </div>
            
            <div class="form-group">
                <label for="ingredients">Ingredients</label>
                <textarea id="ingredients" placeholder="Write each ingredient on a new line" required></textarea>
            </div>
            
            <div class="form-group">
                <label for="instructions">Instructions</label>
                <textarea id="instructions" placeholder="Describe the step-by-step process" required></textarea>
            </div>
            
            <button type="submit">Add Recipe</button>
        </form>
    </div>  
    `;
}