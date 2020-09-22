import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { CartComponent } from './cart.component';
import { MsalGuard } from '@azure/msal-angular';

export const routes = [
  {
    path: '', component: CartComponent, pathMatch: 'full',
    canActivate: [
      MsalGuard
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    CartComponent
  ]
})
export class CartModule { }
