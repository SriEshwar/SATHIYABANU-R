import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccountComponent } from './account/account.component';
import { ProductComponent } from './product/product.component';


@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet, FormsModule,CounterComponent,CommonModule], -- it works for countercomponent
  // imports: [RouterOutlet, FormsModule,CommonModule,AccountComponent] ,
  imports: [RouterOutlet, FormsModule,CommonModule,ProductComponent] , 

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title='app';
           // Counter App 

//   title = 'counter-app';  // o/p = counter works
//   movies=[
//     'Zootopia',
//     'Batman vs Superman',
//     'Harry Potter',        // ngFor it will display in order
//     'X-men'
//   ]
//               // for ngIf condition
//  // showMe=true; // the content will display
//   showMe=false; //the content will not display 
            
//               // for nfClass condition 
//   // applyRed=false;
//   applyRed=true;              

}
