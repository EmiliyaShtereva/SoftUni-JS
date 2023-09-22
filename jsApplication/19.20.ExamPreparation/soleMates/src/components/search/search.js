export class SearchComponent {
    constructor(authService, shoeService, renderHandler, templateFunction, router) {
        this.authService = authService;
        this.shoeService = shoeService;
        this.renderHandler = renderHandler;
        this.templateFunction = templateFunction;
        this.router = router;
        this.searchHandler = this._searchHandler.bind(this);
        this.showView = this._showView.bind(this);
    }

    async _showView(ctx) {
        let isUserLoggedIn = this.authService.isUserLoggedin();
        let queryString = ctx.querystring;
        let shoes = [];
        if (queryString != '') {
            let queryArr = queryString.split('=');
            let value = queryArr[1];
            shoes = await this.shoeService.getByBrand(value);
        }

        let template = this.templateFunction(shoes, this.searchHandler, isUserLoggedIn);
        this.renderHandler(template);
    }

    async _searchHandler(e, id) {
        e.preventDefault();
        let form = e.target;
        let formData = new FormData(form);

        let searchValue = formData.get('search');
        this.router.navigate(`/search?brand=${searchValue}`);
    }
}