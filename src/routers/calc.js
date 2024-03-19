const calc = function (body) {
    const department = body.department;
    const day = body.day;
    const teamNumber = parseInt(body.teamNumber);
    const quarter = parseInt(body.quarter);
    const no_of_workers = parseInt(body.no_of_workers);
    const over_time = parseInt(body.over_time);
    const smv = parseInt(body.smv);
    const incentive = parseInt(body.incentive);
    const targeted_productivity = parseInt(body.targeted_productivity);
  
    const pred = [];
    const final = [];
    const arrTeam = [
      5.46898514 * Math.exp(-1),
      -2.62356749 * Math.exp(-2),
      4.29241611 * Math.exp(-1),
      1.91484785 * Math.exp(-1),
      1.90414063 * Math.exp(-1),
      5.76303594 * Math.exp(-2),
      -6.35805972 * Math.exp(-1),
      -4.77345863 * Math.exp(-1),
      -8.46103418 * Math.exp(-2),
      -2.74361564 * Math.exp(-1),
      -2.81829355 * Math.exp(-1),
      6.24008643 * Math.exp(-1),
    ];
  
    for (let i = 0; i < arrTeam.length; i++) {
      final[i] = calci(
        department[0],
        department[1],
        day[0],
        day[1],
        day[2],
        day[3],
        day[4],
        day[5],
        arrTeam[i],
        quarter,
        no_of_workers,
        over_time,
        smv,
        incentive,
        targeted_productivity
      );
    
      }
    return final;
    }
  
  const calci = function (
    department_finishing,
    department_sewing,
    day_Monday,
    day_Saturday,
    day_Sunday,
    day_Thursday,
    day_Tuesday,
    day_Wednesday,
    pred,
    quarter,
    no_of_workers,
    over_time,
    smv,
    incentive,
    targeted_productivity
  ) {
    const z =
      department_finishing * -1.80985375 * Math.exp(-2) +
      department_sewing * 2.77587742 * Math.exp(-1) +
      day_Monday * 1.79857606 * Math.exp(-1) +
      day_Saturday * 5.5961837 * Math.exp(-1) +
      day_Sunday * -2.12074484 * Math.exp(-1) +
      day_Thursday * -7.24832262 * Math.exp(-1) +
      day_Tuesday * 3.14369284 * Math.exp(-1) +
      day_Wednesday * 1.42550691 * Math.exp(-1) +
      quarter * -2.05349903 * Math.exp(-1) +
      no_of_workers * 7.67109133 * Math.exp(-2) +
      over_time * 1.95321255 * Math.exp(-5) +
      smv * -1.13023925 * Math.exp(-1) +
      incentive * 9.9307144 * Math.exp(-4) +
      targeted_productivity * 1.95961127 * Math.exp(-1) +
      pred + 0.26000446
    const f = 1 / (1 + Math.exp(-z));
    return f;
  };
  
  module.exports = {
      calc: calc
  };
  