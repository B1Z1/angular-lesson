import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LessonThirdComponent } from 'src/app/lessons/lesson-third/lesson-third.component';
import { LessonThirdDynamicComponent } from './dynamic/lesson-third-dynamic.component';
import { LessonThirdService } from 'src/app/lessons/lesson-third/lesson-third.service';


@NgModule({
  declarations: [
    LessonThirdComponent,
    // You can delete it here. This is not necessary
    LessonThirdDynamicComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: LessonThirdComponent }])
  ],
  providers: [
    LessonThirdService
  ]
})
export class LessonThirdModule {
}
