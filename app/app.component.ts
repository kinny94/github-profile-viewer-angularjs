import { Component } from '@angular/core';
import { ProfileComponent } from './components/profile.component';
@Component({

    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <profile></profile>
        <p>Hello World!</p>
    `,
    directives: [ProfileComponent]
})
export class AppComponent { }
