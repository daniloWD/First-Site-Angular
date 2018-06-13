
import { MusicalGenreComponent } from './musical-genre/musical-genre.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrameComponent } from './frame/frame.component';
import { MusicDetailComponent } from './music-detail/music-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TesteComponent } from './teste/teste.component';
import { OracleDetailsComponent } from './oracle-details/oracle-details.component';

const routes: Routes = [
  // { path: '/:name', component: AerialsComponent },
  { path: '', component: FrameComponent},
  { path: 'api/oracleDB', component: TesteComponent},
  { path: ':genre/:name', component: MusicDetailComponent},
  { path: ':genre', component: MusicalGenreComponent},
  { path: 'api/oracleDB/:name', component: OracleDetailsComponent},
  { path: '**', component: PageNotFoundComponent }


];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}