import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { SlicesContainerComponent } from "src/app/slices/slices-container.component";
import { MatButtonModule } from "@angular/material/button";

const routes: Routes = [
  { path: '', pathMatch: 'full', component: SlicesContainerComponent }
];

@NgModule({
  declarations: [
    SlicesContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
  ],
})
export class SlicesModule {}
