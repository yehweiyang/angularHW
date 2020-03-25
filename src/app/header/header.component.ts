import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'app';
  url = 'http://blog.miniasp.com/';
  imul = '/assets/images/logo.png';
  counter = 0;

  constructor() { }

  ngOnInit() {
  }
<<<<<<< HEAD

  getStyle() {
    return { 'font-size': (12 + this.counter) + 'px' };
  }
=======
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
>>>>>>> dce87817f2648ff08afaae00353c6317786bf6e7

  changeTitle(altKey: boolean) {
    if (altKey) {
      this.title = 'The Will Will Web';
    }
    this.counter++;
  }
}
