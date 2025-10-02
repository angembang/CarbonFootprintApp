import { Injectable } from '@angular/core';
import { Travel } from '../models/travelModel';

@Injectable({
  providedIn: 'root'
})
export class CarbonFootprintCompute {

  constructor() { }
  // a private array witch contain an array of travels
  private travels: Travel[] = [
    {
      id: 1,
      distanceKm: 120,
      consumptionPer100km: 6
    },

    {
      id: 2,
      distanceKm: 250,
      consumptionPer100km: 5.5 }
  ];

  // Retrieve all travels
  getVoyages(): Travel[] {
    return this.travels;
  }

  // Add a new travel
  addVoyage(voyage: Travel): void {
    this.travels.push(voyage); // Add the travel object to the array of  Travel
  }

  // Calculate a global resume of travels
  getResumeVoyages() {
    // Calculate the total distance traveled
    const totalDistance = this.travels.reduce((acc, v) => acc + v.distanceKm, 0);

    // Calculate the average consumption
    const avgConsumption =
      this.travels.reduce((acc, v) => acc + v.consumptionPer100km, 0) /
      this.travels.length;

    // Calculate the total quantity of the CO₂
    const totalCo2 = this.travels.reduce((acc, v) => {
      // Formule : CO2 = (distance * consommation) / 100 * 2.3
      const co2 = (v.distanceKm * v.consumptionPer100km) / 100 * 2.3;

      // Stock the CO2 quantity in each travel
      v.co2Quantity = co2;

      // Cumulate the total Co2 quantity
      return acc + co2;
    }, 0);

    // Return an object resume with 3 properties
    return {
      distanceKm: totalDistance, // total distance
      consumptionAverage: avgConsumption, // consommation moyenne
      TotalCO2Quantity: totalCo2 // CO₂ total
    };
  }

}
