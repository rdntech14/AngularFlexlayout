import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContactUSComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';

const routes: Routes = [
  { path: '.', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contactus', component: ContactUSComponent },
  { path: 'products', component: ProductsComponent },
  { path: '**', redirectTo: '.' }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
