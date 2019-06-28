import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      { "label": "Dashboard", "icon": 'pi pi-fw pi-th-large', "routerLink": ['/dashboard'], "routerLinkActiveOptions": "{exact:true}" },
      { "label": "Vendor Master", "icon": 'pi pi-fw pi-users', "routerLink": ['/vendor/view'], "routerLinkActiveOptions": "{exact:true}" },
      { "label": "Customer Master", "icon": 'pi pi-fw pi-user', "routerLink": ['/customers/view'], "routerLinkActiveOptions": "{exact:true}" },
      { "label": "Inventry Master", 
        // "icon": "pi pi-fw pi-briefcase",
        "items": [
          { "label": "Unit List", "icon": 'pi pi-fw pi-arrow-circle-right', "routerLink": ['/unit-list/view'], "routerLinkActiveOptions": "{exact:true}" },
          { "label": "HSN List", "icon": 'pi pi-fw pi-arrow-circle-right', "routerLink": ['/hsnList/view'], "routerLinkActiveOptions": "{exact:true}" },
          { "label": "Storage Master", "icon": 'pi pi-fw pi-arrow-circle-right', "routerLink": ['/storage-master/view'], "routerLinkActiveOptions": "{exact:true}" },
          { "label": "Catagory", "icon": 'pi pi-fw pi-arrow-circle-right', "routerLink": ['/catagory/view'], "routerLinkActiveOptions": "{exact:true}" },
          { "label": "Sub Catagory", "icon": 'pi pi-fw pi-arrow-circle-right', "routerLink": ['/sub-catagory/view'], "routerLinkActiveOptions": "{exact:true}" },
          { "label": "Products Master", "icon": 'pi pi-fw pi-arrow-circle-right', "routerLink": ['/products-master/view'], "routerLinkActiveOptions": "{exact:true}" },
          { "label": "Price List", "icon": 'pi pi-fw pi-arrow-circle-right', "routerLink": ['/price-list/view'], "routerLinkActiveOptions": "{exact:true}" },
          { "label": "EndUser PriceList", "icon": 'pi pi-fw pi-arrow-circle-right', "routerLink": ['/endUser-priceList/view'], "routerLinkActiveOptions": "{exact:true}" }
        ] 
      },
      { "label": "Purchase Order", "icon": 'pi pi-fw pi-shopping-cart', "routerLink": ['/purchase-order/view'], "routerLinkActiveOptions": "{exact:true}" },
      { "label": "Goods Received Note", "icon": 'pi pi-fw pi-bookmark', "routerLink": ['/goods-received/view'], "routerLinkActiveOptions": "{exact:true}" },
      { "label": "Goods Return", 
        "items": [
          { "label": "Purchase Return", "icon": 'pi pi-fw pi-arrow-circle-right', "routerLink": ['/purchase-return/view'], "routerLinkActiveOptions": "{exact:true}" },
        ] 
      },
      { "label": "Stock Details", 
        "items": [
          { "label": "Stock Summary", "icon": 'pi pi-fw pi-arrow-circle-right', "routerLink": ['/stock-summary/view'], "routerLinkActiveOptions": "{exact:true}" },
          { "label": "Prodcut Wise Stock Summary", "icon": 'pi pi-fw pi-arrow-circle-right', "routerLink": ['/prodcut-sise-stock-summary/view'], "routerLinkActiveOptions": "{exact:true}" },
          { "label": "Opening / Closing Summary", "icon": 'pi pi-fw pi-arrow-circle-right', "routerLink": ['/opening-closing-summary/view'], "routerLinkActiveOptions": "{exact:true}" },
          { "label": "Consumption", "icon": 'pi pi-fw pi-arrow-circle-right', "routerLink": ['/consumption/view'], "routerLinkActiveOptions": "{exact:true}" },
          { "label": "PO Short Close", "icon": 'pi pi-fw pi-arrow-circle-right', "routerLink": ['/po-short-Close/view'], "routerLinkActiveOptions": "{exact:true}" },
          { "label": "Add Free Product to sale", "icon": 'pi pi-fw pi-arrow-circle-right', "routerLink": ['/add-free-product-to-sale/view'], "routerLinkActiveOptions": "{exact:true}" },
          { "label": "Product to sale List", "icon": 'pi pi-fw pi-arrow-circle-right', "routerLink": ['/product-to-sale-list/view'], "routerLinkActiveOptions": "{exact:true}" }
        ] 
      },
      { "label": "Vendor Transaction", 
        "items": [
          { "label": "Vendor Billing", "icon": 'pi pi-fw pi-arrow-circle-right', "routerLink": ['/vendor-billing/view'], "routerLinkActiveOptions": "{exact:true}" },
          { "label": "Vendor Payment List", "icon": 'pi pi-fw pi-arrow-circle-right', "routerLink": ['/vendor-payment-list/view'], "routerLinkActiveOptions": "{exact:true}" }
        ] 
      },
      { "label": "Sales & Invoice", 
        "items": [
          { "label": "Add Sale", "icon": 'pi pi-fw pi-arrow-circle-right', "routerLink": ['/add-sale/view'], "routerLinkActiveOptions": "{exact:true}" },
          { "label": "Invoice List", "icon": 'pi pi-fw pi-arrow-circle-right', "routerLink": ['/invoice-list/view'], "routerLinkActiveOptions": "{exact:true}" },
          { "label": "Invoice Payment List", "icon": 'pi pi-fw pi-arrow-circle-right', "routerLink": ['/invoice-payment-list/view'], "routerLinkActiveOptions": "{exact:true}" },
          { "label": "Sales Return", "icon": 'pi pi-fw pi-arrow-circle-right', "routerLink": ['/Sales-return/view'], "routerLinkActiveOptions": "{exact:true}" },
          { "label": "Sales Return Payment", "icon": 'pi pi-fw pi-arrow-circle-right', "routerLink": ['/sales-return-payment/view'], "routerLinkActiveOptions": "{exact:true}" }
        ] 
      },
      { "label": "Expenses", "icon": 'pi pi-fw pi-money-bill', "routerLink": ['/expenses/view'], "routerLinkActiveOptions": "{exact:true}" },
      { "label": "Reports", 
        "items": [
          { "label": "Purchase Report", "icon": 'pi pi-fw pi-arrow-circle-right', "routerLink": ['/reports/purchase-report'], "routerLinkActiveOptions": "{exact:true}" },
          { "label": "Purchase Return Report", "icon": 'pi pi-fw pi-arrow-circle-right', "routerLink": ['/reports/purchase-return-report'], "routerLinkActiveOptions": "{exact:true}" },
          { "label": "Sales Report", "icon": 'pi pi-fw pi-arrow-circle-right', "routerLink": ['/reports/sales-report'], "routerLinkActiveOptions": "{exact:true}" },
          { "label": "Sales Return Report", "icon": 'pi pi-fw pi-arrow-circle-right', "routerLink": ['/reports/sales-return-report'], "routerLinkActiveOptions": "{exact:true}" },
          { "label": "PO Report", "icon": 'pi pi-fw pi-arrow-circle-right', "routerLink": ['/reports/po-report'], "routerLinkActiveOptions": "{exact:true}" },
          { "label": "Purchase Summary Report", "icon": 'pi pi-fw pi-arrow-circle-right', "routerLink": ['/reports/purchase-summary-report'], "routerLinkActiveOptions": "{exact:true}" },
          { "label": "Sale Summary Report", "icon": 'pi pi-fw pi-arrow-circle-right', "routerLink": ['/reports/sale-summary-report'], "routerLinkActiveOptions": "{exact:true}" },
          { "label": "Stock Adjustment Report", "icon": 'pi pi-fw pi-arrow-circle-right', "routerLink": ['/reports/stock-adjustment-report'], "routerLinkActiveOptions": "{exact:true}" },
          { "label": "Expenses Report", "icon": 'pi pi-fw pi-arrow-circle-right', "routerLink": ['/reports/expenses-report'], "routerLinkActiveOptions": "{exact:true}" }
        ] 
      },
      { "label": "Security Management", "icon": 'pi pi-fw pi-cog', "routerLink": ['/customers/view'], "routerLinkActiveOptions": "{exact:true}" }
    ]
    // this.items = [
    //   {
    //     label: 'File',
    //     icon: 'pi pi-pw pi-file',
    //     items: [{
    //       label: 'New',
    //       icon: 'pi pi-fw pi-plus',
    //       items: [
    //         { label: 'User', icon: 'pi pi-fw pi-user-plus' },
    //         { label: 'Filter', icon: 'pi pi-fw pi-filter' }
    //       ]
    //     },
    //     { label: 'Open', icon: 'pi pi-fw pi-external-link' },
    //     { separator: true },
    //     { label: 'Quit', icon: 'pi pi-fw pi-times' }
    //     ]
    //   },
    //   {
    //     label: 'Edit',
    //     icon: 'pi pi-fw pi-pencil',
    //     items: [
    //       { label: 'Delete', icon: 'pi pi-fw pi-trash' },
    //       { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
    //     ]
    //   },
    //   {
    //     label: 'Help',
    //     icon: 'pi pi-fw pi-question',
    //     items: [
    //       {
    //         label: 'Contents',
    //         icon: 'pi pi-pi pi-bars'
    //       },
    //       {
    //         label: 'Search',
    //         icon: 'pi pi-pi pi-search',
    //         items: [
    //           {
    //             label: 'Text',
    //             items: [
    //               {
    //                 label: 'Workspace'
    //               }
    //             ]
    //           },
    //           {
    //             label: 'User',
    //             icon: 'pi pi-fw pi-file',
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     label: 'Actions',
    //     icon: 'pi pi-fw pi-cog',
    //     items: [
    //       {
    //         label: 'Edit',
    //         icon: 'pi pi-fw pi-pencil',
    //         items: [
    //           { label: 'Save', icon: 'pi pi-fw pi-arrow-circle-right' },
    //           { label: 'Update', icon: 'pi pi-fw pi-arrow-circle-right' },
    //         ]
    //       },
    //       {
    //         label: 'Other',
    //         icon: 'pi pi-fw pi-tags',
    //         items: [
    //           { label: 'Delete', icon: 'pi pi-fw pi-minus' }
    //         ]
    //       }
    //     ]
    //   }
    // ];
  }

}
