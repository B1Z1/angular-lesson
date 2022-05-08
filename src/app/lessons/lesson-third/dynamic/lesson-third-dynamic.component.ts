import {
  AfterViewInit,
  Component,
  Inject,
  InjectionToken,
  Input,
  OnChanges,
  OnInit,
  Optional,
  SimpleChanges
} from '@angular/core';
import { LessonThirdService } from 'src/app/lessons/lesson-third/lesson-third.service';
import { Observable, take } from 'rxjs';

export const THIRD_LESSON_VALUE_TOKEN = new InjectionToken<Observable<string>>('THIRD_LESSON_VALUE_TOKEN');

@Component({
  selector: 'app-dynamic',
  templateUrl: './lesson-third-dynamic.component.html',
  styleUrls: ['./lesson-third-dynamic.component.scss']
})
export class LessonThirdDynamicComponent implements OnChanges, OnInit, AfterViewInit {

  @Input()
  inputValue: string;

  tokenValue: string;

  constructor(
    private readonly lessonThirdService: LessonThirdService,
    @Optional() @Inject(THIRD_LESSON_VALUE_TOKEN) public readonly tokenValue$: Observable<string>
  ) {
    console.log('Lesson third: Parent service', this.lessonThirdService);
    console.log('Lesson third: All hooks in dynamic component work properly');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Lesson third: OnChanges doesn\'t work :(', changes);
  }

  ngOnInit(): void {
    this.observeTokenValue();

    console.log('Lesson third: OnInit works');
  }

  ngAfterViewInit() {
    console.log('Lesson third: AfterViewInit too');
  }

  private observeTokenValue(): void {
    this.tokenValue$
      .pipe(take(2))
      .subscribe((tokenValue: string) => {
        this.tokenValue = tokenValue;
      });
  }
}
