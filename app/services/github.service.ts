import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username:string;
    private client_id = '9a3e7458eedcc3d3ba25';
    private client_secret = '95f66f270b1880175d6610112796a761c130166a';

    constructor(private _http:Http){    
        this.username = "kinny94";
    }

    getUser(){
        return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret).map(res => res.json())
    }

    getRepos(){
        return this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret).map(res => res.json())
    }

    updateUser(username:string){
        this.username = username;
    }
}