function searchRecipe(){
    model.app.searchInput = document.getElementById('search').value
    updateView();
}

function resetInput(){
    model.app.searchInput = '';
    updateView();
}