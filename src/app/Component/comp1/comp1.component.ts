import { ActivatedRoute, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit{
  constructor(private Routes:ActivatedRoute) { }
  ngOnInit(): void {
      console.warn("user id is",this.Routes.snapshot.paramMap.get('id'))
  }

}
