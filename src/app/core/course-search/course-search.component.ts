import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.scss'],
})
export class CourseSearchComponent implements OnInit {
  public searchValue = '';

  ngOnInit(): void {}

  public handleSearch(): void {
    console.log(this.searchValue);
  }
}
