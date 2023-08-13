import { Component } from '@angular/core';
import { Cupcake } from './cupcake.model';

@Component({
  selector: 'app-cupcakes',
  templateUrl: './cupcakes.component.html',
  styleUrls: ['./cupcakes.component.css']
})
export class CupcakesComponent {

  cupcakes = [
    new Cupcake('Zesty-Lemon', 'Lemony Cupcake Special', "https://preppykitchen.com/wp-content/uploads/2020/03/lemono-cupcakes-recipe.jpg"),
    new Cupcake('Emmy Special', 'Emmy Red Velvet Special','https://www.lovelesscafe.com/wp-content/uploads/2019/11/red-velvet-cupcake.jpg')
  ]
}
