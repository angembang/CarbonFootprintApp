import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelCarbonFootprintComponent } from './travel-carbon-footprint.component';

describe('TravelCarbonFootprintComponent', () => {
  let component: TravelCarbonFootprintComponent;
  let fixture: ComponentFixture<TravelCarbonFootprintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravelCarbonFootprintComponent]
    });
    fixture = TestBed.createComponent(TravelCarbonFootprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
