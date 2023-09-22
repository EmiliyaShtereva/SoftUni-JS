import { UserReadableError } from "../../errors/UserReadableError.js";

export class RegisterPage {
    constructor(authService, templateFunction, renderHandler, navigate) {
        this.authService = authService;
        this.templateFunction = templateFunction;
        this.renderHandler = renderHandler;
        this.navigate = navigate;
        this.showRegister = this._showRegister.bind(this);
        this.register = this._register.bind(this);
        this.formModel = {
            errorClass: '',
            email: {
                value: '',
                error: ''
            },
            password: {
                value: '',
                error: ''
            },
            rePass: {
                value: '',
                error: ''
            },
            submitHandler: this.register
        };
    }

    async _showRegister(ctx, next) {
        let template = this.templateFunction(this.formModel);
        this.renderHandler(template);
    }

    async _register(e) {
        e.preventDefault();
        let form = e.target;
        let formData = new FormData(form);
    
        let email = formData.get('email');
        let rePass = formData.get('rePass');
        let password = formData.get('password');
        this.formModel.email.value = email;
        this.formModel.rePass.value = rePass;
        this.formModel.password.value = password;
    
        if (password !== rePass) {
            return alert('The password need to match');
        }
    
        let user = {
            email,
            password
        };
    
        try {
            let result = await this.authService.register(user);
            this.navigate('/');
        } catch(e) {
            if (e instanceof UserReadableError) {
                this.formModel.email.error = JSON.parse(e.message);
                this.renderHandler(this.templateFunction(this.formModel));
            }
        }
    }
    
}



