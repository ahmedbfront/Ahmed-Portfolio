import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('router', [
      transition('*<=>*',  [
        style({
          transform: 'translateX(100%)',
        }),
        animate('350ms', style({
          transform: 'translateX(0)',
        }))
      ])
    ])
  ]
})
export class AppComponent {
  
}
