function decimalCount(num){

    const numStr = String(num);

    if (numStr.includes('.')) {
       return numStr.split('.')[1].length;
    };

    return 0;
 }


function finalPos(initialPos, probeInstruction){
    var COS = {'0': 1, '90': 0, '-90': 0, '180': -1, '-180': -1, '270': 0, '-270': 0, '360': 1, '-360': 1};
    var SIN = {'0': 0, '90': 1, '-90': 1, '180': 0, '-180': 0, '270': -1, '-270': -1, '360': 0, '-360': 0};
    var instruc = {'L': -90, 'R': 90, 'M': 1};
    var windRose = {'E': 0, 'N': 90, 'W': 180, 'S': 270};
    var windRoseCos = {'1:0': 'E', '0:1': 'N', '-1:0': 'W', '0:-1': 'S'};
    
    initialPos[2] = windRose[initialPos[2]];

    var output = probeInstruction.split('').reduce((prev,curr) => {

        var cos = COS[prev[2]];
        var sin = SIN[prev[2]];

        console.log(prev[2],cos,sin);

        return [
            instruc[curr] ? prev[0] + cos : prev[0], 
            instruc[curr] ? prev[1] + sin : prev[1],
            instruc[curr] == 1 ? prev[2] : prev[2] + instruc[curr],
        ]
        },initialPos
    );

    var cos = COS[output[2]];
    var sin = SIN[output[2]];

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