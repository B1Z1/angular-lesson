import { Component } from '@angular/core';
import { LessonItem } from 'src/app/LessonItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  lessons: Array<LessonItem> = [
    {
      id: 1,
      name: 'Third Lesson',
      path: 'third'
    }
  ];

  trackByLessons(index: number, item: LessonItem): number {
    return item.id;
  }
}
