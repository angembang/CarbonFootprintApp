import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CarbonFootprintCompute } from '../services/carbon-footprint-compute';

@Component({
  selector: 'app-travel-carbon-footprint-form',
  templateUrl: './travel-carbon-footprint-form.component.html',
  styleUrls: ['./travel-carbon-footprint-form.component.scss']
})
export class TravelCarbonFootprintFormComponent {
  // Initialize travel object attribute with empty value
  type: string = '';
  distanceKm: number = 0;
  consumptionPer100km: number = 0;
  date: string = '';

  // Initialise the error message
  errorMessage: string = '';

  // Create an Output event emitter to notify the parent
  @Output() voyageAdded = new EventEmitter<void>();

  constructor(private carbonService: CarbonFootprintCompute, private router: Router) {}

  addTravel() {
    this.errorMessage = '';

    try {
      this.carbonService.addVoyage(this.type, this.distanceKm, this.consumptionPer100km, this.date);
      // Notify the parent that a travel is added for recalculate the summaer
      this.voyageAdded.emit();
    } catch (err: any) {
      this.errorMessage = err.message;
    }
  }
}
