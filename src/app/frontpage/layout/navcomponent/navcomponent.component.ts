import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navcomponent',
  templateUrl: './navcomponent.component.html',
  styleUrls: ['./navcomponent.component.css']
})
export class NavcomponentComponent implements OnInit {

  val_set: any;

  constructor() {
    //this.setvalue();
    this.val_set = [
      {
        'loggedin': false,
        'logedName': 'Payoot pholjan'
      }
    ];
  }

  ngOnInit() {
  }


  setvalue() {
    // this.val_set = [
    //   { 'loggedin': true },
    //   { 'logedName': 'Payoot pholjan' },
    // ];
    console.log(this.val_set);

  }

}
