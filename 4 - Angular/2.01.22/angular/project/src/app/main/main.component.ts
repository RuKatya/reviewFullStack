import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  click () {
  //const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date();
  const now = date.toLocaleDateString("he-HE")
  console.log(now)
  }
}
