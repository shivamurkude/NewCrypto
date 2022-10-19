import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoinDetailComponent } from './coin-detail/coin-detail.component';
import { CoinListComponent } from './coin-list/coin-list.component';
import { TrendingComponent } from './trending/trending.component';

export const routes: Routes = [
{
  path:'coin-list',component:CoinListComponent
},
{
  path:'coin-detail/:id',component:CoinDetailComponent
},
{path:"",redirectTo:'coin-list',pathMatch:'full'},
{path:"trending",component:TrendingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
