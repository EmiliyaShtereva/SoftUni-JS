export class DetailsPage {
    constructor(recipeService, templateFunction, renderHandler, navigate) {
        this.recipeService = recipeService;
        this.templateFunction = templateFunction;
        this.renderHandler = renderHandler;
        this.navigate = navigate;
        this.showDetail = this._showDetail.bind(this);
        this.goToEdit = this._goToEdit.bind(this);
    }

    async _showDetail(ctx) {
        let id = ctx.params.id;
        let recipe = await this.recipeService.getRecipeById(id);
        let template = this.templateFunction(recipe, this.goToEdit);
        this.renderHandler(template);
    }
    
    async _goToEdit(id) {
        let path = `/editRecipe/${id}`;
        this.navigate(path);
    }
    
}