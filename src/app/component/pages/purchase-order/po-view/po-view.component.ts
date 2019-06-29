import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/app/shared/vendor/vendorservice';
import { Vendor } from 'src/app/shared/vendor/vendor';

@Component({
  selector: 'app-po-view',
  templateUrl: './po-view.component.html',
  styleUrls: ['./po-view.component.scss']
})
export class PoViewComponent implements OnInit {
  vendor: Vendor[];

  selectedVendor: Vendor[];

  cols: any[];
  items: any[];

  constructor(private vendorService: VendorService) { }

  ngOnInit() {
      this.vendorService.getVendorSmall().then(cars => this.vendor = cars);

      this.cols = [
          { field: 'vendor_name', header: 'Vendor Name' },
          { field: 'lane_line_no', header: 'Count' }
      ];
      this.items = [
        {label: 'Edit'},
        {label: 'Delete'},
        {label: 'Export PDF'}
    ];
  }
}
