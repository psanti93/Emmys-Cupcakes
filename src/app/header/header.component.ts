import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  @Output() selectedPage = new EventEmitter<string>();
  collapsed = true;

  onPrintOut(){
    console.log("collapsed is:" + this.collapsed)
  }

  onSelected(page:string){
      this.selectedPage.emit(page);
  }

}
