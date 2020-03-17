import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  imul = "/assets/images/logo.png";
  url = "http//www.google.com";

  word = 0;
  keyword: '';


  keywordReset() {

    this.keyword= '';
  }
  title = '該加油了吧';
  counter = 0 ;
  changeTitle($event: MouseEvent){
    this.counter = this.counter+ 1;
    if($event.altKey)
      this.title = "狼若回頭，不是報恩 就是報仇";

  }

}
