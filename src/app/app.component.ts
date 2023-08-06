import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'emmy-cupcakes';
  pageSelected = 'home'

  onSelectPage(event: string){
    this.pageSelected = event;
    console.log(this.pageSelected);
  }
}
