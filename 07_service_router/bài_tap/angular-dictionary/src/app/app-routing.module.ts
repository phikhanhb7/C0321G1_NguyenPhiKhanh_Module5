import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DictionaryDetailComponent} from './distionavy-detail/dictionary-detail.component';
import {DistionavyPageComponent} from './distionavy-page/distionavy-page.component';



const routes: Routes = [{
  path: 'dictionary',
  component: DistionavyPageComponent,
  children: [
    {
      path: ':key',
      component: DictionaryDetailComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
