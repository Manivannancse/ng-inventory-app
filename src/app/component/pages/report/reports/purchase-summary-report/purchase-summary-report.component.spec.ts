import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseSummaryReportComponent } from './purchase-summary-report.component';

describe('PurchaseSummaryReportComponent', () => {
  let component: PurchaseSummaryReportComponent;
  let fixture: ComponentFixture<PurchaseSummaryReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseSummaryReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseSummaryReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
