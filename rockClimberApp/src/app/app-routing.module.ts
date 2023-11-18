import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameInterfaceComponent } from './components/game-interface/game-interface.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path: '', component: GameInterfaceComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
