import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderModule } from './header/header.module';
import { RulesComponent } from './pages/rules/rules.component';
import { AuthGuard } from './guards/link.guard';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RulesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    HeaderModule
  ],
  providers: [ AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
