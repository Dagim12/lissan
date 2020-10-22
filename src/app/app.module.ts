import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepoTableComponent } from './repo-table/repo-table.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component';
import { RepoModule } from './repo/repo.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { RoutingModule } from './routing/routing.module';
import { HeaderComponent } from './navigation/header/header.component';
import { ContributorModule } from './contributor/contributor.module';

@NgModule({
  declarations: [
    AppComponent,
    RepoTableComponent,
    LayoutComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RepoModule,
    FlexLayoutModule,
    RoutingModule,
    ContributorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
