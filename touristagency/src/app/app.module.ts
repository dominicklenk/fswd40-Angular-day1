import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { RouterModule, Routes } from '@angular/router';
const appRoutes: Routes = [
{
  path: '', component: HomePageComponent
},
{
  path: 'about-us', component: AboutUsPageComponent
},
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    HomePageComponent,
    AboutUsPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
