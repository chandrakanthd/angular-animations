import { Component } from '@angular/core';
import { Course } from './models/course.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-style-animations';

  courses: Course[] = [
    { title: 'Angular Course 1', isActive: false },
    { title: 'Angular Course 2', isActive: false },
    { title: 'Angular Course 3', isActive: false }
  ]
}
