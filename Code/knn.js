/**
   Given data where each member has the form
   
    data = {
     "firstName" : "null",
     "lastName" : "null",
     "color" : "null",
     "group" : -1,
     "stats" : [
        5,
        3,
        4
     ]
    }

    and

    groupSize = 6;

    will assign group on each member
 */

 function distance(a, b){
    size = a["stats"].length;

    total = 0;

    for(i = 0; i < size; i++){
        total += Math.pow(a["stats"][i] - b["stats"][i],2);
    }

    total = Math.sqrt(total);
 }

 function groupify(dataSet, numGroups) {
     
    groupSize = Math.floor(dataSet.length/numGroups);

    size = dataSet.length;


    for(i = 0; i < dataSet.length; i++){
        if(dataSet[i]["group"] == -1){
            
            tempGroup = new Array();

            neighbors = new Array();
            nMax = Number.MAX_VALUE;

            for(k = 0; k < dataSet.length; k++){
                if(k != i){
                    if(dataSet[k]["group"] == -1){
                        d = distance(dataSet[i], dataSet[k]);
                        if(d < nMax){
                            for(z = 0; z < neighbors.length; z++){
                                if(neighbors[z]["distance"] == nMax){
                                    neighborr.
                                }
                            }
                        }
                    }
                }
            }

        }
    }
 }



