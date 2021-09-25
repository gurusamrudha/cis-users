import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'users',
        // Load module on demand to avoid high bundle size initially.
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
      },
      {
        path: '**',
        redirectTo: '/users'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
