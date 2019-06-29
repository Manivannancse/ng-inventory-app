import { Component, OnInit } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {TabViewModule} from 'primeng/tabview';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  types: SelectItem[];

  selectedType: string;

  constructor() {
    this.types = [];
    this.types.push({title: 'GST', value: 'GST', label: "GST"});
    this.types.push({title: 'IGST', value: 'IGST', label: "IGST"});
  }

  ngOnInit() {
  }

}
