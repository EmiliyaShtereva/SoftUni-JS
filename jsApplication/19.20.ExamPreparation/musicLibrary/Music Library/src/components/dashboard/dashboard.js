export class DashboardComponent {
    constructor(albumsService, renderHandler, templateFunction) {
        this.albumsService = albumsService;
        this.renderHandler = renderHandler;
        this.templateFunction = templateFunction;
        this.showView = this._showView.bind(this);
    }

    async _showView() {
        let albums = await this.albumsService.getAll();
        let template = this.templateFunction(albums);
        this.renderHandler(template);
    }
}