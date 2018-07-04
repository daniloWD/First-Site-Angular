import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuTopComponent } from './menu-top/menu-top.component';
import { FrameComponent } from './frame/frame.component';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { MusicDetailComponent } from './music-detail/music-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';
import { MusicalGenreComponent } from './musical-genre/musical-genre.component';
import { OracleDetailsComponent } from './oracle-details/oracle-details.component';
import { RegiaoDetailsComponent } from './regiao-details/regiao-details.component';
import { InsertFormComponent } from './insert-form/insert-form.component';
import { ProcondwComponent } from './procondw/procondw.component';
import { FrameMongoComponent } from './frame-mongo/frame-mongo.component';
import { SubMenuMongoComponent } from './sub-menu-mongo/sub-menu-mongo.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuTopComponent,
    FrameComponent,
    MusicDetailComponent,
    PageNotFoundComponent,
    ProcondwComponent,
    SubMenuComponent,
    MusicalGenreComponent,
    OracleDetailsComponent,
    RegiaoDetailsComponent,
    InsertFormComponent,
    FrameMongoComponent,
    SubMenuMongoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
