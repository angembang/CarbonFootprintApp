import { Injectable } from '@angular/core';
import { Travel } from '../models/travelModel';

@Injectable({
  providedIn: 'root'
})

export class CarbonFootprintCompute {
  private travels: Travel[] = [];

  constructor() {
    // Load travels from localStorage
    const savedTravels = localStorage.getItem('travels');
    if (savedTravels) {
      this.travels = JSON.parse(savedTravels);
    }
  }

  // Save travels to the localStorage
  private saveTravels() {
    localStorage.setItem('travels', JSON.stringify(this.travels));
  }

  // Retrieve all travels
  getVoyages(): Travel[] {
    return this.travels;
  }

  // Add a travel
  addVoyage(type: string, distanceKm: number, consumptionPer100km: number, date: string): Travel {
    if (distanceKm <= 0) {
      throw new Error('La distance doit être supérieure à 0');
    }
    if (type === 'voiture' && consumptionPer100km <= 0) {
      throw new Error('La consommation doit être supérieure à 0');
    }
    if (!date) {
      throw new Error('La date est obligatoire');
    }

    // Calculate the carbon footprint according to the travel type
    let co2Quantity = 0;
    switch(type) {
      case 'voiture':
        co2Quantity = (distanceKm * consumptionPer100km) / 100 * 2.3;
        break;
      case 'train':
        co2Quantity = distanceKm * 0.03;
        break;
      case 'avion':
        co2Quantity = distanceKm * 0.2;
        break;
      default:
        throw new Error('Type de voyage invalide');
    }

    const newTravel: Travel = {
      id: Date.now(),
      type,
      distanceKm,
      ...(type === 'voiture' ? { consumptionPer100km } : {}),
      date,
      co2Quantity
    };

    this.travels.push(newTravel);
    this.saveTravels();

    return newTravel;
  }

  // Calculate a global resume of travels
  getResumeVoyages() {
  let totalDistance = 0;
  let totalConsumption = 0; // Only for car
  let totalCo2 = 0;

  let voitureCount = 0; //  car travel nomber for the average calcul

  this.travels.forEach(v => {
    totalDistance += v.distanceKm;

    // Calculate CO2 according to the travel type
    let co2 = 0;
    switch (v.type) {
      case 'voiture':
        co2 = (v.distanceKm * (v.consumptionPer100km ?? 0)) / 100 * 2.3;
        totalConsumption += v.consumptionPer100km ?? 0;
        voitureCount++;
        break;
      case 'train':
        co2 = v.distanceKm * 0.03;
        break;
      case 'avion':
        co2 = v.distanceKm * 0.2;
        break;
    }

    v.co2Quantity = co2;
    totalCo2 += co2;
  });

  const avgConsumption = voitureCount > 0 ? totalConsumption / voitureCount : 0;


    // Return an object resume with 3 properties
    return {
      distanceKm: totalDistance, // total distance
      consumptionAverage: avgConsumption, // consommation moyenne
      TotalCO2Quantity: totalCo2 // CO₂ total
    };
  }

}
