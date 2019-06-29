import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, /* other http imports */ } from "@angular/common/http";




// Component
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { HeaderComponent } from './component/header/header.component';
import { TaxComponent } from './component/pages/tax/tax.component';

// PrimeNG
import {CommonModule} from '@angular/common';
import { TieredMenuModule } from 'primeng/tieredmenu';
import {PanelMenuModule} from 'primeng/panelmenu';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule } from 'primeng/inputtext'
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import {ToolbarModule} from 'primeng/toolbar';
import {SplitButtonModule} from 'primeng/splitbutton';
import {TableModule} from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { DynamicDialogModule } from 'primeng/components/dynamicdialog/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ToastModule } from 'primeng/toast';
import {CardModule} from 'primeng/card';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {SelectButtonModule} from 'primeng/selectbutton';


import { CustomerComponent } from './component/pages/customer/cutomer.component';
import { AddComponent } from './component/pages/customer/add/add.component';
import { ViewComponent } from './component/pages/customer/view/view.component';
import { ReportComponent } from './component/pages/report/report.component';
import { PurchaseReportComponent } from './component/pages/report/purchase-report/purchase-report.component';
import { PurchaseReturnReportComponent } from './component/pages/report/purchase-return-report/purchase-return-report.component';
import { SalesReportComponent } from './component/pages/report/reports/sales-report/sales-report.component';
import { SalesReturnReportComponent } from './component/pages/report/reports/sales-return-report/sales-return-report.component';
import { PoReportComponent } from './component/pages/report/reports/po-report/po-report.component';
import { PurchaseSummaryReportComponent } from './component/pages/report/reports/purchase-summary-report/purchase-summary-report.component';
import { SaleSummaryReportComponent } from './component/pages/report/reports/sale-summary-report/sale-summary-report.component';
import { StockAdjustmentReportComponent } from './component/pages/report/reports/stock-adjustment-report/stock-adjustment-report.component';
import { ExpensesReportComponent } from './component/pages/report/reports/expenses-report/expenses-report.component';
import { ExpensesComponent } from './component/pages/expenses/expenses.component';
import { ExpensesViewComponent } from './component/pages/expenses/expenses-view/expenses-view.component';
import { DashboardComponent } from './component/pages/dashboard/dashboard.component';
import { VendorComponent } from './component/pages/vendor/vendor.component';
import { VendorViewComponent } from './component/pages/vendor/vendor-view/vendor-view.component';
import { VendorAddComponent } from './component/pages/vendor/vendor-add/vendor-add.component';
import { PoAddComponent } from './component/pages/purchase-order/po-add/po-add.component';
import { PoViewComponent } from './component/pages/purchase-order/po-view/po-view.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HeaderComponent,
    TaxComponent,
    CustomerComponent,
    AddComponent,
    ViewComponent,
    ReportComponent,
    PurchaseReportComponent,
    PurchaseReturnReportComponent,
    SalesReportComponent,
    SalesReturnReportComponent,
    PoReportComponent,
    PurchaseSummaryReportComponent,
    SaleSummaryReportComponent,
    StockAdjustmentReportComponent,
    ExpensesReportComponent,
    ExpensesComponent,
    ExpensesViewComponent,
    DashboardComponent,
    VendorComponent,
    VendorViewComponent,
    VendorAddComponent,
    PoAddComponent,
    PoViewComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TieredMenuModule,
    MenubarModule,
    PanelMenuModule,
    InputTextModule,
    ButtonModule,
    TabViewModule,
    CodeHighlighterModule,
    ToolbarModule,
    SplitButtonModule,
    TableModule,
    DropdownModule,
    DynamicDialogModule,
    MultiSelectModule,
    ContextMenuModule,
    ToastModule,
    ScrollingModule,
    DialogModule,
    FormsModule,
    HttpClientModule,
    CardModule,
    BreadcrumbModule,
    SelectButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
