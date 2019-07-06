import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TimerComponent } from 'src/app/components/timer/timer.component';
import { SkeletonComponent } from 'src/app/components/skeleton/skeleton.component';


@NgModule({
  declarations: [
    TimerComponent, SkeletonComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    TimerComponent, SkeletonComponent
  ]
})

export class ComponentsModule { }