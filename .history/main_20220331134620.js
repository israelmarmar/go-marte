function decimalCount(num){

    const numStr = String(num);

    if (numStr.includes('.')) {
       return numStr.split('.')[1].length;
    };

    return 0;
 }
function forwardDirectionIndex(directionIndex){
    directionIndex++;

        if(directionIndex == 4)
            directionIndex = 0;

    return directionIndex;
}
 
function backwardDirectionIndex(directionIndex){
    directionIndex--;

        if(directionIndex == -1)
            directionIndex = 3;

    return directionIndex;
 }

function finalPos(initialPos, probeInstruction){
    var COS = {'0': 1, '90': 0, '-90': 0, '180': -1, '-180': -1, '270': 0, '-270': 0, '360': 1, '-360': 1};
    var SIN = {'0': 0, '90': 1, '-90': 1, '180': 0, '-180': 0, '270': -1, '-270': -1, '360': 0, '-360': 0};
    var instruc = {'L': -90, 'R': 90, 'M': 1};
    var windRose = {'E': 0, 'N': 1, 'W': 2, 'S': 3};
    var windRoseInv = {'0': 'E', '1': 'N', '2': 'W', '3': 'S'};
    var initialAngle = {'E': 0, 'N': 90, 'W': 180, 'S': 270};
    var directionIndex = windRose[initialPos[2]];
    
    initialPos.push(initialAngle[initialPos[2]]);

    var output = probeInstruction.split('').reduce((prev,curr) => {

        var cos = COS[prev[3] % 360];
        var sin = SIN[prev[3] % 360];

        const output = [
            instruc[curr] ? prev[0] + cos : prev[0], 
            instruc[curr] ? prev[1] + sin : prev[1],
        ];

        if(curr=='L'){
            directionIndex = forwardDirectionIndex(directionIndex);
            output.push(windRoseInv[directionIndex]);
        }
        else if(curr=='R'){
            directionIndex = backwardDirectionIndex(directionIndex);
            output.push(windRoseInv[directionIndex]);
        }
        else
            output.push(windRoseInv[directionIndex]);

        output.push(instruc[curr] == 1 ? prev[3] : prev[3] + instruc[curr]);

        console.log(directionIndex,curr,prev,output);

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