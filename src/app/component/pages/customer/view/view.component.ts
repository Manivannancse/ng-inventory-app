import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/shared/vendor/vendor';
import { VendorService } from 'src/app/shared/vendor/vendorservice';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  vendor: Vendor[];

  selectedVendor: Vendor[];

  cols: any[];

  constructor(private vendorService: VendorService) { }

  ngOnInit() {
      this.vendorService.getVendorSmall().then(cars => this.vendor = cars);

      this.cols = [
          { field: 'vendor_name', header: 'Customer Name' },
          { field: 'address', header: 'Address' },
          { field: 'lane_line_no', header: 'Lane Line No' },
          { field: 'mobile_no', header: 'Color' }
      ];
  }

}
