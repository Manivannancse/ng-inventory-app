import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/shared/vendor/vendor';
import { VendorService } from 'src/app/shared/vendor/vendorservice';

@Component({
  selector: 'app-vendor-view',
  templateUrl: './vendor-view.component.html',
  styleUrls: ['./vendor-view.component.scss']
})
export class VendorViewComponent implements OnInit {

  vendor: Vendor[];

  selectedVendor: Vendor[];

  cols: any[];

  constructor(private vendorService: VendorService) { }

  ngOnInit() {
      this.vendorService.getVendorSmall().then(cars => this.vendor = cars);

      this.cols = [
          { field: 'vendor_name', header: 'Vendor Name' },
          { field: 'address', header: 'Address' },
          { field: 'lane_line_no', header: 'Lane Line No' },
          { field: 'mobile_no', header: 'Color' }
      ];
  }
}
