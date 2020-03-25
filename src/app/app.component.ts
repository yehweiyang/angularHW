import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {

  http : HttpClient;

  constructor(http : HttpClient) {
    this.http = http;
  }
  springClick(){
    this.http.get("http://localhost:8080/getOpenData").subscribe((v)=>{
      console.log(v);
    });
    alert('do it !');
  }
}
