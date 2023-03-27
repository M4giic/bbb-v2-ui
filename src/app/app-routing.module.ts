import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './src/home/home.component';
import { AuthGuard } from './src/_guards/auth.guard';
import { NotFoundComponent } from './src/errors/not-found/not-found.component';
import { RegisterComponent } from './src/register/register.component';
import { LoginPageComponent } from './src/login-page/login-page.component';
import { WalletsListComponent } from './src/wallets-list/wallets-list.component';
import { PaymentsListComponent } from './src/payments-list/payments-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {

    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children:[
      {path: 'home', component: HomeComponent},
      {path: 'wallets', component: WalletsListComponent},
      {path: 'payments', component: PaymentsListComponent},
    ]
  },
  {path: 'register', component: RegisterComponent},
  {path: 'loginPage', component: LoginPageComponent},
  {path: '**', component: NotFoundComponent, pathMatch: 'full'},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
