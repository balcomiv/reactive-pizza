import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaCreatorComponent } from './pizza/containers/pizza-creator/pizza-creator.component';

const routes: Routes = [{ path: '', component: PizzaCreatorComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
