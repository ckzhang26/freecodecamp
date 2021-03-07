function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  return arr.map(obj => {
    return {
      name: obj.name,
      orbitalPeriod: calcOrbitalPeriod(obj.avgAlt + earthRadius, GM)
    }
  });
}

function calcOrbitalPeriod(d, gm) {
  return Math.round(2 * Math.PI * Math.sqrt(d**3 / gm));
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

