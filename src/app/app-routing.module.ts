import { EditarComponent } from './Money/editar/editar.component';
import { RouterModule, Routes } from '@angular/router';
import { SecurityComponent } from './security/security.component';

const routes: Routes=[
  {path: 'home',component:SecurityComponent},
  {path: 'editar',component:EditarComponent}
]

//export class AppRoutingModule { }
export const AppRoutingModule = RouterModule.forRoot(routes);