
import { MusicalGenreComponent } from './musical-genre/musical-genre.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrameComponent } from './frame/frame.component';
import { FrameMongoComponent } from './frame-mongo/frame-mongo.component';
import { MusicDetailComponent } from './music-detail/music-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OracleDetailsComponent } from './oracle-details/oracle-details.component';
import { RegiaoDetailsComponent } from './regiao-details/regiao-details.component';
import { InsertFormComponent } from './insert-form/insert-form.component';
import { ProcondwComponent } from './procondw/procondw.component';

const routes: Routes = [
  { path: '', component: FrameComponent},
  // { path: '', component: FrameMongoComponent},
  { path: 'api/oracleDB', component: ProcondwComponent},
  { path: 'api/oracleDB/inserir', component: InsertFormComponent},
  { path: ':genre/:id', component: MusicDetailComponent},
  { path: ':genre', component: MusicalGenreComponent},
  { path: 'api/oracleDB/:name/:uf', component: OracleDetailsComponent},
  { path: '**', component: PageNotFoundComponent }
  


];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}