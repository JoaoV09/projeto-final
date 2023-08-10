import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { environment as env } from './../environments/environment';
import { redirectUnauthorizedTo, redirectLoggedInTo, AuthGuard } from '@angular/fire/auth-guard';

const toLogin = () => redirectUnauthorizedTo(['/login']);
const toHome = () => redirectLoggedInTo(['/home']);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'home',
    title: `${env.appName} - Inicio`,
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'about',
    title: `${env.appName} - Sobre`,
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'contacts',
    title: `${env.appName} - Faça Contato`,
    loadChildren: () => import('./pages/contacts/contacts.module').then( m => m.ContactsPageModule)
  },
  {
    path: '404',
    title: `${env.appName} - Erro 404`,
    loadChildren: () => import('./pages/e404/e404.module').then( m => m.E404PageModule)
  },
  {
    path: 'login',
    title: `${env.appName} - Entre`,
    loadChildren: () => import('./user/login/login.module').then( m => m.LoginPageModule),

   // Se usuário já está logado, carrega a 'home'.
   canActivate: [AuthGuard],
   data: { authGuardPipe: toHome }
  },
  {
    path: 'prociles',
    title: `${env.appName} - Perfil`,
    loadChildren: () => import('./user/profile/profile.module').then( m => m.ProfilePageModule),
     // Se usuário não está logado, carrega 'login'.
     canActivate: [AuthGuard],
     data: { authGuardPipe: toLogin }
  },
  {
    path: 'fbpopulate',
    loadChildren: () => import('./temp/fbpopulate/fbpopulate.module').then( m => m.FbpopulatePageModule)
  },
  {
    path: 'view/:id',
    title: `${env.appName} - Exibeção de trecos`,
    loadChildren: () => import('./pages/view/view.module').then( m => m.ViewPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./pages/registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'gps',
    loadChildren: () => import('./temp/gps/gps.module').then( m => m.GpsPageModule)
  },
  {
    path: 'camera',
    loadChildren: () => import('./pages/camera/camera.module').then( m => m.CameraPageModule)
  },
  {
    path: 'poke',
    loadChildren: () => import('./pages/poke/poke.module').then( m => m.PokePageModule)
  },
  {
    path: 'poke-info/:name',
    loadChildren: () => import('./pages/poke-info/poke-info.module').then( m => m.PokeInfoPageModule)
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
