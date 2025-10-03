import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelCarbonFootprintFormComponent } from './travel-carbon-footprint-form.component';

describe('TravelCarbonFootprintFormComponent', () => {
  let component: TravelCarbonFootprintFormComponent;
  let fixture: ComponentFixture<TravelCarbonFootprintFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravelCarbonFootprintFormComponent]
    });
    fixture = TestBed.createComponent(TravelCarbonFootprintFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
