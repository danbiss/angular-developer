import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { APIFunHouseComponent} from './api-fun-house/api-fun-house.component';
import { InstructionsComponent } from './instructions/instructions.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'dashboard',
    component: ECommerceComponent
  },
  {
    path: 'api-fun-house',
    component: APIFunHouseComponent
  },
  {
    path: 'instructions',
    component: InstructionsComponent
  },
  {
    path: 'miscellaneous',
    loadChildren: './miscellaneous/miscellaneous.module#MiscellaneousModule'
  },
  {
    path: '',
    redirectTo: 'instructions',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
