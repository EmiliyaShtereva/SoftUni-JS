import { BaseApiService } from "./baseApiService.js";


export class AuthServise extends BaseApiService {
    constructor(baseUrl, authDataService) {
        super(baseUrl);
        this.url = `${this.baseUrl}/users`;
        this.authDataService = authDataService;
    }

    async login(user) {
        let settings = {
            method: 'Post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        };
    
    
        let result = await this._internalFetch(`${this.url}/login`, settings);
        this.authDataService.setAccessToken(result.accessToken);
        return result;
    
    }
    
    async register(user) {
        let settings = {
            method: 'Post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        };
    
        let result = await this._internalFetch(`${this.url}/register`, settings);
        this.authDataService.setAccessToken(result.accessToken);
    
    }
    
    async logout() {
        let settings = {
            method: 'Get',
            headers: { 'X-Authorization': this.authDataService.getAccessToken() }
        };
        let result = await this._internalFetch(`${this.url}/logout`, settings);
        this.authDataService.clearAccessToken();
        return;
    }
    
    async isUserLoggedIn() {
        return this.authDataService.getAccessToken() != undefined;
    }
}
