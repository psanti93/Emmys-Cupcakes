import { Component } from '@angular/core';
import { Cupcake } from 'src/app/cupcakes/cupcake.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {
  cupcake?: Cupcake
}
