import { style } from '@angular/animations';
import { Component, OnInit,ViewChild,ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'; 

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @ViewChild("submitValue") myNameElem: ElementRef;
  ngOnInit(): void {
  }

  textBox(index:any,column:any){
    let emp=this.employeeList[index];
    // console.log(emp[column]);
    let id=`${index}${column}`;
    let td=<HTMLElement>document.getElementById(id);
    let html="";
    html+=`<form>
    <input type="text" id="i${id}" >
    <button (click)="submit(i,column)">Submit</button>
    </form>`;
    td.innerHTML=html;
    
  }

  submit(index:any,column:any){
    console.log(1)
    let emp=this.employeeList[index];
    // console.log(emp[column]);
    let id=`${index}${column}`;
    let data:any =document.getElementById('i'+id);
    console.log("hi")
    
    emp[column]=data.value;
  }

  header:any=['empId','name','role','gender','dob'];

  employeeList:any=[{'empId':'101',
  'name':'Razal',
  'role':'sde',
  'gender':'male',
  'dob':'18/04/1999'},
  {'empId':'102',
  'name':'Athila',
  'role':'pm',
  'gender':'female',
  'dob':'08/12/1989'},
  {'empId':'103',
  'name':'Azhar',
  'role':'sre',
  'gender':'male',
  'dob':'22/09/1996'},
  {'empId':'104',
  'name':'Akshaya',
  'role':'qa',
  'gender':'female',
  'dob':'11/06/2002'},
  {'empId':'105',
  'name':'Hanan',
  'role':'po',
  'gender':'female',
  'dob':'18/12/1990'},
  {'empId':'106',
  'name':'Arya',
  'role':'tops',
  'gender':'female',
  'dob':'01/10/1969'},
  {'empId':'107',
  'name':'Adithya',
  'role':'sde',
  'gender':'male',
  'dob':'04/04/2000'},
  {'empId':'108',
  'name':'Aswin',
  'role':'hr',
  'gender':'male',
  'dob':'31/01/1996'},
  {'empId':'109',
  'name':'Nanda',
  'role':'l1',
  'gender':'female',
  'dob':'18/08/1999'},
  {'empId':'110',
  'name':'Fawaz',
  'role':'ceo',
  'gender':'male',
  'dob':'25/02/1975'},]

}
