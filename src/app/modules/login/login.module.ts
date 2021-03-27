import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {LoginComponent} from './pages/login.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class LoginModule {
}
