

function appView() {
    let view = '';
    switch(model.app.activeTab) {
        case 'recipes':
            view = recipeView();
            break;
        case 'addRecipe':
            view = addRecipeView();
            break;
    }

    document.getElementById('app').innerHTML = /*HTML*/`
    <header>
        <h1>Onkel Dags oppskrifter</h1>        
    </header>    
    
    <div class="search">
        <input type="text" id="search" placeholder="Search for recipes...">
    </div>
    
    <div class="tabs">
        <div class="tab ${model.app.activeTab == 'recipes' ? 'active' : ''}" onclick="setActiveTab('recipes')">Oppskrifter</div>
        <div class="tab ${model.app.activeTab == 'addRecipe' ? 'active' : ''}" onclick="setActiveTab('addRecipe')">Legg til ny oppskrift</div>
    </div>
    
    <div class="content">
        ${view}
    </div>
    `;
}

function updateView() {
    appView();
}