import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TextScreenComponent } from './game-interface/text-screen/text-screen.component';
import { TextInputComponent } from './game-interface/text-input/text-input.component';
import { GameInterfaceComponent } from './game-interface/game-interface.component';
import { MainInterfaceComponent } from './main-interface/main-interface.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginInterfaceComponent } from './login-interface/login-interface.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TextScreenComponent,
    TextInputComponent,
    GameInterfaceComponent,
    MainInterfaceComponent,
    LoginInterfaceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
