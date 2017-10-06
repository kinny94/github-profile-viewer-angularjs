import { Component } from '@angular/core';
import { ProfileComponent } from './components/profile.component';
import {GithubService} from './services/github.service';
import {HTTP_PROVIDERS} from '@angular/http';

@Component({

    // We include components as directives and services as providers
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [ProfileComponent],
    providers: [HTTP_PROVIDERS, GithubService]
})
export class AppComponent { }
