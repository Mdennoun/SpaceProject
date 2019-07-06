import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { Tab1Page } from './tab1.page';
import { ComponentsModule } from '../modules/components/components.modules';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
    children: [
      {
        path: '',
        component: Tab1Page
      }
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
