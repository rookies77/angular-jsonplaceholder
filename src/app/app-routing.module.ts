import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoComponent } from './components/photo/photo.component';
import { UsersComponent } from './components/users/users.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'users', component: UsersComponent},
  {path: 'users/:id', component: UsersComponent},
  {path: 'photo', component: PhotoComponent},
  {path: 'photo/:id', component: PhotoComponent},
  {path: '', redirectTo:'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
