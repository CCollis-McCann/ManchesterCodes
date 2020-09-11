const reachDestination = (distance, speed) =>
  `I should be there in ${Math.ceil(distance / speed / 0.5) * 0.5} hours.`;

module.exports = reachDestination;
