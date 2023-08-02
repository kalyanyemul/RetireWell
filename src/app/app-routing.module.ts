import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputpageComponent } from './inputpage/inputpage.component';
import { HomeComponent } from './home/home.component';
import { LoadingpageComponent } from './loadingpage/loadingpage.component';
import { GridviewComponent } from './gridview/gridview.component';
import { OutputpageComponent } from './outputpage/outputpage.component';
import { Output2Component } from './output2/output2.component';
import { Output3Component } from './output3/output3.component';
import { Output1Component } from './output1/output1.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path:'inputpage', component:InputpageComponent},
  {path: 'home', component: HomeComponent },
  {path: 'loading',component:LoadingpageComponent},
  {path: 'grid',component:GridviewComponent},
  {path: 'outputpage',component:OutputpageComponent},
  {path: 'outputpage2',component:Output2Component},
  {path: 'outputpage3',component:Output3Component},
  {path: 'outputpage1',component:Output1Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
