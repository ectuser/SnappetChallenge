import {ErrorHandler, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from "./shared/shared.module";
import { LayoutComponent } from './core/layout/layout.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { NavMenuComponent } from './core/layout/nav-menu/nav-menu.component';
import { HttpClientModule } from '@angular/common/http';
import {ErrorHandlerService} from "@core/services/error-handler.service";


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [{ provide: ErrorHandler, useClass: ErrorHandlerService },],
  bootstrap: [AppComponent]
})
export class AppModule { }
