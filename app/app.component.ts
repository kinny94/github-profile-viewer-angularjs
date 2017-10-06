import { Component } from '@angular/core';
import { ProfileComponent } from './components/profile.component';
import {GithubService} from './services/github.service';
import {HTTP_PROVIDERS} from '@angular/http';

@Component({

    // We include components as directives and services as providers
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <profile></profile>
        <p>Hello World!</p>
    `,
    directives: [ProfileComponent],
    providers: [HTTP_PROVIDERS, GithubService]
})
export class AppComponent { }
