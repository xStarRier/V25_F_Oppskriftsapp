

function appView() {
    let view = '';
    if(model.app.activeTab === '') {
        model.app.activeTab = model.app.tabs.recipes;
    }

    switch(model.app.activeTab) {
        case model.app.tabs.recipes:
            view = recipeView();
            break;
        case model.app.tabs.addRecipe:
            view = addRecipeView();
            break;
    }

    document.getElementById('app').innerHTML = /*HTML*/`
        <header>
            <h1>Onkel Dags oppskrifter</h1>        
        </header>    
        
        <div class="search">
            <input type="text" id="search" onchange="searchRecipe()" placeholder="Søk oppskrifter...">
            <button onclick="resetInput()">Se alle</button>
        </div>
        
        <div class="tabs">
            <div class="tab ${model.app.activeTab === model.app.tabs.recipes ? 'active' : ''}" onclick="setActiveTab(model.app.tabs.recipes)">Oppskrifter</div>
            <div class="tab ${model.app.activeTab === model.app.tabs.addRecipe ? 'active' : ''}" onclick="setActiveTab(model.app.tabs.addRecipe)">Legg til ny oppskrift</div>
        </div>
        
        <div class="content">
            ${view}
        </div>
    `;
}

function updateView() {
    appView();
}