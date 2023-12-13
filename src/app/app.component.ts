import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Helloworld my name is Ashutosh mali';
  color="palevioletred";
users=['Ashutosh','naksh','omkar','rohit','rahul'];


userDetailofsocial=[
  {name:'ashutosh',email:'ashutosh@123.com',phone:'8051' ,socialAccounts:['facebook','insta','gmail']},
  {name:'naksh',email:'naksh@123.com',phone:'8052' ,socialAccounts:['facebook','insta','gmail']},
  {name:'Omkar',email:'Omkar@123.com',phone:'8053',socialAccounts:['facebook','insta','gmail']},
  {name:'Rohit',email:'Rohit@123.com',phone:'8054',socialAccounts:['facebook','insta','gmail']},
];

userDetail=[
  {name:'ashutosh',email:'ashutosh@123.com',phone:'8051'},
  {name:'naksh',email:'naksh@123.com',phone:'8052'},
  {name:'Omkar',email:'Omkar@123.com',phone:'8053'},
  {name:'Rohit',email:'Rohit@123.com',phone:'8054'},
];
  data="hello world";
  datas=10;
  num =100;
  name='peter';
  disable=false;
  show='yes';
  user={
    name:'ashutosh',
    age:24

  }
  today=Date();
  getName(name:string){
    alert(name);
  }

  getnumber(){
    alert("this is a number");
  }

  getdate(){
    console.log("hello");
  }

  getevent(val:string){
    console.warn(val)
  }
count=0
  counter(type:string){
    type ==='add'?this.count++:this.count--
  }

  updateColor(){
    this.color='brown';
  }

  bgcolor='red';
  updatebgcolor(){
    this.bgcolor='blue';
  }

  Userdata:any=[]

  getData(data:NgForm){
    console.warn(data);
    this.Userdata=data;
  }

  display=false;

  toggle(){
this.display=!this.display;
  }

  list:any[]=[];
  addtask(item:string){
   
    this.list.push({id:this.list.length,name:item});
    console.warn(this.list);

  }

  removeTask(id:number){

    this.list=this.list.filter(item=>item.id!==id)
    console.warn(id)

  }


}
