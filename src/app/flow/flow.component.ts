import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DropdownModule} from 'primeng/dropdown';
import {SelectItem} from 'primeng/api';
import {InputTextareaModule}	from 'primeng/inputtextarea';

interface Step {
  name: string;
  code: string;
}

@Component({
  selector: 'app-flow',
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.css'],
})


export class FlowComponent implements OnInit {

  steps: Step[];
  selectedStep: Step;
  newFlow: Step[];

  constructor() {
    this.steps = [
        {name:'Criar conta',            code:'1'},
        {name:'Desbloqueio',            code:'2'},
        {name:'Compra',                 code:'3'},
        {name:'Pagamento fatura',       code:'4'},
        {name:'Parcelamento de fatura', code:'5'},
      ];
  }

  addToFlowList(){
    this.newFlow.push(this.selectedStep);
  }
  
  removeToFlowList(stepId){
    this.newFlow.splice(stepId, 1); 
  }

  ngOnInit() {
    this.newFlow = [];
  }
}