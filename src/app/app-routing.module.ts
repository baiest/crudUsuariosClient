import { UserFormComponent } from './components/user-form/user-form.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [{
  path: 'users',
  component: UserListComponent,
  pathMatch: 'full'
},
{
  path: 'users/create',
  component: UserFormComponent,
  pathMatch: 'full'
},
{
  path: 'users/edit/:id',
  component: UserFormComponent,
  pathMatch: 'full'
},
{
  path: 'users/:id',
  component: UserDetailComponent,
  pathMatch: 'full'
},
{
  path: '',
  redirectTo: '/users',
  pathMatch: 'full'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
