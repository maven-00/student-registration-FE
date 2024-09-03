import { Component, OnInit } from '@angular/core';
import { IStudent } from '../models/student.model';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-list-page',
  templateUrl: './student-list-page.component.html',
  styleUrl: './student-list-page.component.css'
})
export class StudentListPageComponent implements OnInit {

  students: IStudent[] = [];
  searchTerm: string = "";


  constructor(private studentService: StudentService) {}
  
  ngOnInit(): void {
    this.getStudents(); //Fetch all
  }

  getStudents(): void{
    this.studentService.getAllStudents().subscribe((data: IStudent[]) => {
      this.students = data;
      console.log(this.students);
    }, 
    error => console.log(error));
  }

  searchStudent(): void{

    if (this.searchTerm) {
      this.studentService.searchStudent(this.searchTerm).subscribe((data: IStudent[]) => {
        this.students = data;
        console.log(this.students);
      },
      error => console.log(error));

    } else {
      this.getStudents();
    }
  }


}
