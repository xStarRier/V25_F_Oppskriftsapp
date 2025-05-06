function recipeTagList(){
    let uniqueTagArray = []
    for(const recipe of model.recipes){
        for(const tag of recipe.tags){
            if(uniqueTagArray.includes(tag)){
                continue
            }
            uniqueTagArray.push(tag)
        }
    }   
            return uniqueTagArray
}
recipeTagList();

function setTag(tag) {
    if(model.app.searchTag == tag) {
        model.app.searchTag = '';
    }
    else{
        model.app.searchTag = tag;
    }
    updateView()
}

