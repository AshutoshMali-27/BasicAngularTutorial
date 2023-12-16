import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class YService {

   url="https://ipinfo.io/161.185.160.93/geo";
  constructor(private http:HttpClient) { }

  ashu(){
    return [
      {name:'ashutosh',age:24,email:'ashutosh@test.com'},
      {name:'naksh',age:24,email:'naksh@test.com'},
      {name:'misha',age:24,email:'misha@test.com'},
    ]
  };


  ashi(){
    debugger;
    return this.http.get(this.url);
  }

}
