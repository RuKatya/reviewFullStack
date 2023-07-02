import { UsersComponent } from './users/users.component';
import { users } from './users';
import { ErorComponent } from './eror/eror.component';
import { ChildChildBComponent } from './child-child-b/child-child-b.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', component: ChildAComponent },
  { path: 'child-b', component: ChildBComponent, children: [
    { path: 'child-b', component: ChildChildBComponent }
  ]},
  { path: users, component: UsersComponent}
  { path: '**', component: ErorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
