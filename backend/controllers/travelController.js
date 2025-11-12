const travels = require('../data/travels');

exports.addTravel = (req, res) => {
  const { type, distanceKm, consumptionPer100km, date } = req.body;

  if (!type || distanceKm <= 0 || !date) {
    return res.status(400).json({ error: 'Les données renseignées sont invalides' });
  }

  let co2Quantity = 0;

  switch(type) {
    case 'voiture':
      if (consumptionPer100km <= 0) return res.status(400).json({ error: 'La consommation est invalide' });
      co2Quantity = (distanceKm * consumptionPer100km) / 100 * 2.3;
      break;
    case 'train':
      co2Quantity = distanceKm * 0.03;
      break;
    case 'avion':
      co2Quantity = distanceKm * 0.2;
      break;
    default:
      return res.status(400).json({ error: 'Type de voyage invalide' });
  }

  const newTravel = { id: Date.now(), type, distanceKm, consumptionPer100km, date, co2Quantity };
  travels.push(newTravel);
  res.json(newTravel);
};

exports.getTravels = (req, res) => {
  res.json(travels);
};

exports.getResume = (req, res) => {
  let totalDistance = 0;
  let totalConsumption = 0;
  let totalCo2 = 0;
  let voitureCount = 0;

  travels.forEach(v => {
    totalDistance += v.distanceKm;

    let co2 = 0;
    switch(v.type) {
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

    totalCo2 += co2;
  });

  const avgConsumption = voitureCount > 0 ? totalConsumption / voitureCount : 0;

  res.json({
    distanceKm: totalDistance,
    consumptionAverage: avgConsumption,
    TotalCO2Quantity: totalCo2
  });
};
