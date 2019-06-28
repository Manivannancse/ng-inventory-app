import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaxComponent } from './component/pages/tax/tax.component';
import { ModuleWithProviders } from '@angular/core';
import { AddComponent } from './component/pages/customer/add/add.component';
import { ViewComponent } from './component/pages/customer/view/view.component';
import { CustomerComponent } from './component/pages/customer/cutomer.component';
import { ReportComponent } from './component/pages/report/report.component';
import { PurchaseReportComponent } from './component/pages/report/purchase-report/purchase-report.component';
import { PurchaseReturnReportComponent } from './component/pages/report/purchase-return-report/purchase-return-report.component';
import { SalesReportComponent } from './component/pages/report/reports/sales-report/sales-report.component';
import { SalesReturnReportComponent } from './component/pages/report/reports/sales-return-report/sales-return-report.component';
import { PoReportComponent } from './component/pages/report/reports/po-report/po-report.component';
import { PurchaseSummaryReportComponent } from './component/pages/report/reports/purchase-summary-report/purchase-summary-report.component';
import { StockAdjustmentReportComponent } from './component/pages/report/reports/stock-adjustment-report/stock-adjustment-report.component';
import { ExpensesReportComponent } from './component/pages/report/reports/expenses-report/expenses-report.component';
import { ExpensesComponent } from './component/pages/expenses/expenses.component';
import { ExpensesViewComponent } from './component/pages/expenses/expenses-view/expenses-view.component';
import { DashboardComponent } from './component/pages/dashboard/dashboard.component';
import { VendorComponent } from './component/pages/vendor/vendor.component';
import { VendorAddComponent } from './component/pages/vendor/vendor-add/vendor-add.component';
import { VendorViewComponent } from './component/pages/vendor/vendor-view/vendor-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { 
    path: 'customers', 
    component: CustomerComponent,
    children: [
      { path: '', redirectTo: 'view', pathMatch: 'full' },
      { path: 'add', component:  AddComponent},
      { path: 'view', component:  ViewComponent}
    ]
  },
  {
    path: 'reports',
    component: ReportComponent,
    children: [
      { path: '', redirectTo: 'purchase-report', pathMatch: 'full' },
      {path: 'purchase-report', component: PurchaseReportComponent},
      {path: 'purchase-return-report', component: PurchaseReturnReportComponent},
      {path: 'sales-report', component: SalesReportComponent},
      {path: 'sales-return-report', component: SalesReturnReportComponent},
      {path: 'po-report', component: PoReportComponent},
      {path: 'purchase-summary-report', component: PurchaseSummaryReportComponent},
      {path: 'sale-summary-report', component: PurchaseReportComponent},
      {path: 'stock-adjustment-report', component: StockAdjustmentReportComponent},
      {path: 'expenses-report', component: ExpensesReportComponent},
    ]
  },
  {
    path: 'expenses',
    component: ExpensesComponent,
    children: [
      { path: '', redirectTo: 'view', pathMatch: 'full' },
      {path: 'view', component: ExpensesViewComponent}
    ]
  },
  {
    path: 'vendor',
    component: VendorComponent,
    children:[
      { path: '', redirectTo: 'view', pathMatch: 'full' },
      { path: 'add', component: VendorAddComponent },
      { path: 'view', component: VendorViewComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
