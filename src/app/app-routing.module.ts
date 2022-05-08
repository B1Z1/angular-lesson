import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'lessons',
    children: [
      {
        path: 'third',
        loadChildren: () => import('src/app/lessons/lesson-third/lesson-third.module').then(m => m.LessonThirdModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
