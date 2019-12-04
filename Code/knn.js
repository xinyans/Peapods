/**
 *      data format
        {
            "name" : "a a",
            "contact" : "a",
            "g" : -1,
            "c" : -1,
            "answers" : ["ASDasd", 0.83, "ASdasdas", 0.37, "asdasdasdas"],
            "data" : [0.83,0.37,0.44,0.36,0.23,0.95,0.81,0.46,0.73,0.11]
        },
 */

 function distance(dataSet, i, k){
    size = dataSet[i]["data"].length;

    total = 0;

    for(a = 0; a < size; a++){
        total += Math.pow(dataSet[i]["data"][a] - dataSet[k]["data"][a],2);
    }

    total = Math.sqrt(total);
    return total
 }

 function formatter(dataSet, numGroups) {
    console.log(dataSet);
    base =
    {
        "formTitle": "Groups",
        "groups": [
        ]
    }
    for(i = 0; i < numGroups; i++){
        item = {
            "members": [
            ]
        }
        for(k = 0; k < dataSet.length; k++){
            if(dataSet[k]["g"] == i){
                item["members"].push(
                    {
                        "name" : dataSet[k]["name"],
                        "contact" : dataSet[k]["contact"] 
                    }
                );
            }
        }
        base["groups"].push(item);
    }
    return JSON.stringify(base);
 }

 function groupify(dataSet, numGroups) {
    specialCase = false;
    groupSize = Math.floor(dataSet.length/numGroups) - 1;
    if(dataSet.length/numGroups != Math.floor(dataSet.length/numGroups)){
        specialCase = true;
    }
    size = dataSet.length;

    groupVal = 0;
    for(i = 0; i < dataSet.length; i++){
        if(dataSet[i]["g"] == -1){
            dataSet[i]["g"] = groupVal;
            tempGroup = new Array();
            if(specialCase){
                neighbors = new Array(groupSize + 1).fill(-1);
                distances = new Array(groupSize + 1).fill(-1);
                specialCase = false;
            }
            else {
                neighbors = new Array(groupSize).fill(-1);
                distances = new Array(groupSize).fill(-1);
            }

            // console.log(neighbors);
            nMax = Number.MAX_VALUE;
            for(k = 0; k < dataSet.length; k++){
                if(k != i){
                    if(dataSet[k]["g"] == -1){
                        d = distance(dataSet, i, k);
                        full = true;
                        for(z = 0; z < neighbors.length; z++){
                            if(neighbors[z] == -1){
                                full = false;
                                neighbors[z] = k;
                                distances[z] = d;
                                break;
                            }
                        }
                        nMax = 0;
                        for(z = 0; z < distances.length; z++){
                            if(nMax < distances[z]){
                                nMax = distances[z];
                            }
                        }
                        if(full && d < nMax){
                            for(z = 0; z < neighbors.length; z++){
                                if(distances[z] == nMax){
                                    neighbors[z] = k;
                                    distances[z] = d;
                                    break;
                                }
                            }
                        }
                    }
                }
            }
            for(z = 0; z < neighbors.length; z++){
                if(neighbors[z] != -1){
                    dataSet[neighbors[z]]["g"] = groupVal;
                } 
            }
            groupVal++;
        }
    }
    return dataSet;
 }

function runAlgo(code){
    $.ajax({
        type: "POST",
        url: "../Ajax/ajaxGetData.php",
        data: {code: code},
        success: function(msg){
            $.ajax({
                type: "POST",
                url: "../Ajax/ajaxReturnAlgoData.php",
                data: {code: code, data: formatter(groupify(JSON.parse(msg)["data"], 4),4)},
                success: function(msg){
                    console.log(msg);
                }
            });
        }
    });
}