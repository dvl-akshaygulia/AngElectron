import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

 const routes: Routes = [
  { 
    path: '', redirectTo: '/maximize', pathMatch: 'full' 
  },
  {
    path: 'minimize', loadChildren: () => import('../app/component/minimize-comp/minimize-comp.module').then(m => m.MinimizeCompModule)
  },
  {
    path: 'maximize', loadChildren: () => import('../app/component/maximize-comp/maximize-comp.module').then(m => m.MaximizeCompModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }