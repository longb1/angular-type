import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TextScreenComponent } from './components/game-interface/text-screen/text-screen.component';
import { TextInputComponent } from './components/game-interface/text-input/text-input.component';
import { GameInterfaceComponent } from './components/game-interface/game-interface.component';
import { HttpClientModule } from '@angular/common/http';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TextScreenComponent,
    TextInputComponent,
    GameInterfaceComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
