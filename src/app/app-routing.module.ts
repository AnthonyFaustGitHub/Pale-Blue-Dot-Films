import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Films
import { MenuComponent } from './menu/menu.component';
import { ReelComponent } from './reel/reel.component';
import { FilmsComponent } from './films/films.component';

const routes: Routes = [

  // Films
  {
    path: '',
    component: FilmsComponent
  },
  {
    path: 'reel',
    component: ReelComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
