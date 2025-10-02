import { Component } from '@angular/core';
import { Travel } from '../models/travelModel';
import { CarbonFootprintCompute } from '../services/carbon-footprint-compute';

@Component({
  selector: 'app-travel-carbon-footprint',
  templateUrl: './travel-carbon-footprint.component.html',
  styleUrls: ['./travel-carbon-footprint.component.scss']
})
export class TravelCarbonFootprintComponent {
  travels: Travel[] = []; // Array of tavels to display
  resume: any; // Objet résumé (distance totale, consommation moyenne, CO2 total)

  // Injection of service for using it in the component
  constructor(private carbonService: CarbonFootprintCompute) {}

  // Au moment de l'initialisation du composant
  ngOnInit(): void {
    // Retrieve the list of tavels from the service
    this.travels = this.carbonService.getVoyages();

    // Calculate the summary (total distance , average comsumption, CO2 total)
    this.resume = this.carbonService.getResumeVoyages();
  }

  // Add a random travel
  addRandomVoyage(): void {
    const newVoyage: Travel = {
      id: Math.random(), // Unique random identifier
      distanceKm: Math.floor(Math.random() * 500), // distance between 0 et 500 km
      consumptionPer100km: 5 + Math.random() * 3 // random consumption between 5 et 8 L/100km
    };

    // Add the new travel to the service
    this.carbonService.addVoyage(newVoyage);

    // Update the displayed travels list
    this.travels = this.carbonService.getVoyages();

    // Update the global resume
    this.resume = this.carbonService.getResumeVoyages();
  }

}
