import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContactUSComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { ContentComponent } from './content/content.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';

const routes: Routes = [
  { path: '.', component: ContentComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'content', component: ContentComponent },
  { path: 'contactus', component: ContactUSComponent },
  { path: 'products', component: ProductsComponent },
  { path: '**', redirectTo: '/content' }
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
