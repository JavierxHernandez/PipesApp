import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public helloLower: string = 'hello world!';
  public helloUpper: string = 'HELLO WORLD!';
  public hello: string = 'HeLlO WoRlD!';

  public customDate: Date = new Date();

}
