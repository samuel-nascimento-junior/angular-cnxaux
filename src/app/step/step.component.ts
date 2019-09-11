import { Component, OnInit } from '@angular/core';
import {SelectButtonModule} from 'primeng/selectbutton';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {
  
  methods: SelectItem[];
  selectedMethod: string;

  constructor() {
    this.methods = [
      {label: 'GET', value: 'get'},
      {label: 'POST', value: 'post'},
      {label: 'PATCH', value: 'patch'},
      {label: 'DELETE', value: 'delete'},
    ]
  }

  ngOnInit() {
  }

}