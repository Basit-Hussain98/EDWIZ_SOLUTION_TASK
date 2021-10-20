const airports = [
  {
    start: "ISB",
    end: "LHR",
    cost: 1000,
  },
  {
    start: "LHR",
    end: "NYC",
    cost: 750,
  },
  {
    start: "CBS",
    end: "NYC",
    cost: 775,
  },
  {
    start: "ISB",
    end: "CBS",
    cost: 575,
  },
  {
    start: "CBS",
    end: "GRC",
    cost: 731,
  },
  {
    start: "NYC",
    end: "GRC",
    cost: 459,
  },
];

const cheapestPath = (airports, startingPoint, endingPoint) => {
  let path = [],
    cost = Number.MAX_SAFE_INTEGER,
    currentPath = [],
    currentCost,
    currentPoint,
    ignorePrevStartingPoints = [],
    ignoreCurrentStartingPoint = [];
  //loop for finding objects with startingPoint as start
  for (var i = 0; i < airports.length; i++) {
    if (airports[i].start === startingPoint) {
      //initializing data each time a new path is found
      currentPoint = airports[i].start;
      currentCost = 0;
      currentPath = [];
      ignoreCurrentStartingPoint = [];
      //loop for finding path
      for (var j = 0; j < airports.length; j++) {
        if (ignorePrevStartingPoints.indexOf(j) === -1) {
          //ignoring starting object of previous paths
          if (ignoreCurrentStartingPoint.indexOf(j) === -1) {
            // preventing current path starting object from repeating
            if (airports[j].start === currentPoint) {
              currentPath.push(currentPoint);
              currentCost += airports[j].cost;
              currentPoint = airports[j].end;
              if (airports[j].end === endingPoint) {
                currentPath.push(endingPoint);
                break;
              } else {
                ignoreCurrentStartingPoint.push(j);
                j = 0;
              }
            }
          }
        }
      }
      ignorePrevStartingPoints.push(i);
      //finding min path
      if (currentCost < cost) {
        cost = currentCost;
        path = currentPath;
      }
    }
  }
  console.log("Minimum cost:", cost);
  console.log("Path:", path);
};

cheapestPath(airports, "ISB", "LHR");
