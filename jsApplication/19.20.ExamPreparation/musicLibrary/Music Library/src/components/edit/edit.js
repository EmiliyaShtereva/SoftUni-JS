export class EditComponent {
    constructor(albumsService, renderHandler, templateFunction, router) {
        this.albumsService = albumsService;
        this.renderHandler = renderHandler;
        this.templateFunction = templateFunction;
        this.router = router;
        this.editHandler = this._editHandler.bind(this);
        this.showView = this._showView.bind(this);
    }

    async _showView(ctx) {
        let id = ctx.params.id;
        let album = await this.albumsService.getById(id);
        let template = this.templateFunction(album, this.editHandler);
        this.renderHandler(template);
    }

    async _editHandler(e, id) {
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

        let result = await this.albumsService.edit(id, albums);
        this.router.navigate(`/details/${id}`);
    }
}