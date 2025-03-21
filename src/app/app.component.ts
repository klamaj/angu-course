import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, ElementRef, Inject, InjectionToken, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import { CoursesService } from './courses/courses.service';
import { APP_CONFIG, AppConfig, CONFIG_TOKEN } from './config';




@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false,
    // changeDetection: ChangeDetectionStrategy.OnPush
    

})
export class AppComponent implements OnInit{



  courses: Course[] = COURSES;
  category: string = "ADVANCED";

  constructor(private coursesService: CoursesService, @Inject(CONFIG_TOKEN) private config: AppConfig, private cd: ChangeDetectorRef ) {

  }





  ngOnInit() {
  }


  onEditCourse(){
    this.category = (this.category === "ADVANCED") ? "BEGINNER" : "ADVANCED";
    // if (this.category === "ADVANCED") {
    //   this.category = "BEGINNER";
    // }
    // else {
    //   this.category = "ADVANCED";
    // }
  }


  save(course:Course){

    this.coursesService.saveCourse(course)
    .subscribe(
      () => console.log('Course saved successfully!')
    );

  }



}
