export class DetailsComponent {
    constructor(authService, albumsService, renderHandler, templateFunction, router) {
        this.authService = authService;
        this.albumsService = albumsService;
        this.renderHandler = renderHandler;
        this.templateFunction = templateFunction;
        this.router = router;
        this.deleteHandler = this._deleteHandler.bind(this);
        this.showView = this._showView.bind(this);
    }

    async _showView(ctx) {
        let id = ctx.params.id;
        let album = await this.albumsService.getById(id);
        let currentUserId = this.authService.getUserId();
        let isOwner = currentUserId === album._ownerId;
        let isUserLoggedIn = this.authService.isUserLoggedin();
        let template = this.templateFunction(album, isOwner, isUserLoggedIn, this.deleteHandler);
        this.renderHandler(template);
    }

    async _deleteHandler(id) {
        let result = confirm('Are you sure you want to delete this item?');
        if (result == false) {
            return;
        }

        let deleteResult = await this.albumsService.delete(id);
        this.router.navigate('/dashboard');
    }
}