import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Updated by <b><a href="https://github.com/danbiss" target="_blank">Matt Lamm</a></b> {{date | date : yyyy}}</span>
  `,
})
export class FooterComponent {
  date: Date = new Date();

}
