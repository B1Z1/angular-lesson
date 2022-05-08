import { Component, ComponentRef, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import {
  LessonThirdDynamicComponent,
  THIRD_LESSON_VALUE_TOKEN
} from 'src/app/lessons/lesson-third/dynamic/lesson-third-dynamic.component';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-lesson-third',
  templateUrl: './lesson-third.component.html',
  styleUrls: ['./lesson-third.component.scss'],
  providers: [
    // LessonThirdService
  ]
})
export class LessonThirdComponent implements OnInit {

  @ViewChild('templateRef', { read: ViewContainerRef, static: true })
  templateContainerRef: ViewContainerRef;

  private created: boolean = false;

  constructor(
    private readonly injector: Injector
  ) {
  }

  ngOnInit() {
    setInterval(() => {
      this.created ? this.createComponent() : this.clearComponent();

      this.created = !this.created;
    }, 5000);
  }

  private createComponent(): void {
    const tokenValue$ = new BehaviorSubject<string>('Token Value');
    const injector = Injector.create(
      {
        parent: this.injector,
        providers: [
          {
            provide: THIRD_LESSON_VALUE_TOKEN,
            useValue: tokenValue$.asObservable()
          }
        ]
      }
    );
    const componentRef: ComponentRef<LessonThirdDynamicComponent> = this.templateContainerRef.createComponent(
      LessonThirdDynamicComponent,
      {
        // That's if you want to choose another or your module with needed providers
        // ngModuleRef: createNgModuleRef(LessonThirdFakeModule),
        injector: injector
      }
    );

    componentRef.instance.inputValue = 'Input value';

    setTimeout(() => {
      componentRef.instance.inputValue = 'New Input Value';
      tokenValue$.next('New Token Value');
    }, 1000);
  }

  private clearComponent(): void {
    this.templateContainerRef.clear();
  }
}
