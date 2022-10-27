import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css']
})
export class TextBoxComponent implements OnInit {

  public data:string='';

  constructor() { }

  ngOnInit(): void {
  }
  textUpdate(e){
    console.log(e.target.value);
  }
}
