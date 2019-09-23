import { RoutesPath } from './../../../../core/enums/route/routes.enum';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: RoutesPath.Home, loadChildren: './modules/home/home.module#HomePageModule', pathMatch: 'full' },
  // { path: RoutesPath.Login, loadChildren: './modules/login/login.module#LoginPageModule' },
  // { path: RoutesPath.Register, loadChildren: './modules/register/register.module#RegisterPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
