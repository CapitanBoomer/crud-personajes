import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'agregar',
    loadChildren: () => import('./personajes/agregar/agregar.module').then( m => m.AgregarPageModule)
  },
  {
    path: 'modificar',
    loadChildren: () => import('./personajes/modificar/modificar.module').then( m => m.ModificarPageModule)
  },
  {
    path: 'listar',
    loadChildren: () => import('./personajes/listar/listar.module').then( m => m.ListarPageModule)
  },
  {
    path: 'eliminar',
    loadChildren: () => import('./personajes/eliminar/eliminar.module').then( m => m.EliminarPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
