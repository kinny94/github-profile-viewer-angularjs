import { Component } from '@angular/core';
import {GithubService} from '../services/github.service';
import 'rxjs/add/operator/map';

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html'
})
export class ProfileComponent {
    user = [];
    // we do dependency injection in constructor in angular 2
    constructor(private _githubService:GithubService){
        this._githubService.getUser().subscribe(user => {
            console.log(user);
            this.user = user;
        })
    }
}
