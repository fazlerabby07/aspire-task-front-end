import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

const routes: Routes = [
  {
    path: 'listUsers',
    component: ListUsersComponent,
  },
  {
    path: 'userDetails/:nickname',
    component: UserDetailComponent,
  },
  {
    path: '',
    redirectTo: 'listUsers',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
