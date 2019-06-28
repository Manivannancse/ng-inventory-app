import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleSummaryReportComponent } from './sale-summary-report.component';

describe('SaleSummaryReportComponent', () => {
  let component: SaleSummaryReportComponent;
  let fixture: ComponentFixture<SaleSummaryReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleSummaryReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleSummaryReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
