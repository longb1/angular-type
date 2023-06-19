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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TextScreenComponent,
    TextInputComponent,
    GameInterfaceComponent,
    MainInterfaceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
