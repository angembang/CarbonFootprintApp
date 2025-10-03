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
  showForm: boolean = false; // For display or not the form


  // Injection of service for using it in the component
  constructor(private carbonService: CarbonFootprintCompute) {}

  // Au moment de l'initialisation du composant
   ngOnInit(): void {
    this.loadTravels();
  }

  // Retrieve travels
  loadTravels() {
    this.travels = this.carbonService.getVoyages();
    this.resume = this.carbonService.getResumeVoyages();
  }

  // Close the form when the travel is added
  onTravelAdded() {
    this.loadTravels();
    this.resume = this.carbonService.getResumeVoyages();
    this.showForm = false; // close the form
  }

  // Button to display the form
  toggleForm() {
    this.showForm = !this.showForm;
  }

}
