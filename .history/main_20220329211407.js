function decimalCount(num){
    // Convert to String
    const numStr = String(num);
    // String Contains Decimal
    if (numStr.includes('.')) {
       return numStr.split('.')[1].length;
    };
    // String Does Not Contain Decimal
    return 0;
 }


function finalPos(initialPos, probeInstruction){
    var instruc = {'L': (-1)*Math.PI/2, 'R': Math.PI/2, 'M': 1};
    var windRose = {'E': 0, 'N': Math.PI/2, 'W': Math.PI, 'S': Math.PI + Math.PI/2};
    var windRoseCos = {'1:0': 'E', '0:1': 'N', '-1:0': 'W', '0:-1': 'S'};
    
    initialPos[2] = windRose[initialPos[2]];

    var output = probeInstruction.split('').reduce((prev,curr) => {

        var cos = Math.cos(prev[2]);
        var sin = Math.sin(prev[2]);

        console.log(cos,sin);

        return [
            instruc[curr] ? prev[0] + cos : prev[0], 
            instruc[curr] ? prev[1] + sin : prev[1],
            instruc[curr] == 1 ? prev[2] : prev[2] + instruc[curr],
        ]
        },initialPos
    );

    var cos = Math.floor(Math.cos(output[2]));
    var sin = Math.floor(Math.sin(output[2]));

    output[2] = windRoseCos[`${cos}:${sin}`]

    return output;
}

function inputData(input){


    var mesh = input.shift(input.length);
    var output = new Array(input.length);
    var probePositions = input.filter((item,index)=>index % 2 == 0);
    var probeInstructions = input.filter((item,index)=>index % 2 != 0);


    var output = probePositions.reduce((previous, current, index) => [...previous, []]);
}

console.log(finalPos([1,2,'N'],'LMLMLMLMM'));
console.log(finalPos([3,3,'E'],'MMRMMRMRRM'));