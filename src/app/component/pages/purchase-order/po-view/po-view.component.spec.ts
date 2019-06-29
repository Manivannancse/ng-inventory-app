import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoViewComponent } from './po-view.component';

describe('PoViewComponent', () => {
  let component: PoViewComponent;
  let fixture: ComponentFixture<PoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
