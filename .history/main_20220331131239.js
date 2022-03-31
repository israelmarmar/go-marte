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
    var windRose = {'E': 0, 'N': 1, 'W': 2, 'S': 3};
    var windRoseInv = {'0': 'E', '1': 'N', '2': 'W', '3': 'S'};
    var directionIndex = windRose[initialPos[2]];
    
    initialPos.push(0);

    var output = probeInstruction.split('').reduce((prev,curr) => {

        var cos = COS[prev[3] % 360];
        var sin = SIN[prev[3] % 360];

        const output = [
            instruc[curr] ? prev[0] + cos : prev[0], 
            instruc[curr] ? prev[1] + sin : prev[1],
        ];

        if(curr=='L')
            output.push(windRoseInv[directionIndex-- % 4]);
        else if(curr=='R')
            output.push(windRoseInv[directionIndex++ % 4]);
        else
            output.push(windRoseInv[directionIndex % 4]);

        output.push(instruc[curr] == 1 ? prev[3] : prev[3] + instruc[curr]);

        console.log(curr,prev,output);

        return output;

        },initialPos
    );

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
console.log("")
console.log(finalPos([3,3,'E'],'MMRMMRMRRM'));