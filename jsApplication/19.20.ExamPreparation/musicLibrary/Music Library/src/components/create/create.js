export class CreateComponent {
    constructor(albumsService, renderHandler, templateFunction, router) {
        this.albumsService = albumsService;
        this.renderHandler = renderHandler;
        this.templateFunction = templateFunction;
        this.router = router;
        this.createHandler = this._createHandler.bind(this);
        this.showView = this._showView.bind(this);
    }

    _showView() {
        let template = this.templateFunction(this.createHandler);
        this.renderHandler(template);
    }

    async _createHandler(e) {
        e.preventDefault();
        let form = e.target;
        let formData = new FormData(form);

        let albums = {
            singer: formData.get('singer'),
            album: formData.get('album'),
            imageUrl: formData.get('imageUrl'),
            release: formData.get('release'),
            label: formData.get('label'),
            sales: formData.get('sales'),
        }

        if (albums.singer == '' || albums.album == '' || albums.imageUrl == '' ||
            albums.release == '' || albums.label == '' || albums.sales == '') {
            alert('All fields are required');
            return;
        }

        let result = await this.albumsService.create(albums);
        this.router.navigate('/dashboard');
    }
}