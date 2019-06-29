import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';


@Component({
  selector: 'app-vendor-add',
  templateUrl: './vendor-add.component.html',
  styleUrls: ['./vendor-add.component.scss']
})
export class VendorAddComponent implements OnInit {

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
