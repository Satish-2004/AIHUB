import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DirectoryComponent } from './directory/directory.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'home', component: HomeComponent, canActivate: [authGuard]},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'directory', component: DirectoryComponent, canActivate: [authGuard]},
    {path: 'favorites', component: FavouritesComponent, canActivate: [authGuard]},
    {path: 'about', component: AboutComponent, canActivate: [authGuard]},
    {path: 'contact', component: ContactComponent, canActivate: [authGuard]},
    {path: '**', redirectTo: 'login', pathMatch: 'full' }
];
