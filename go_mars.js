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
    var directionAngle = {'E': 0, 'N': 90, 'W': 180, 'S': 270};
    var directionIndex = windRose[initialPos[2]];

    var output = probeInstruction.split('').reduce((prev,curr) => {

        var cos = COS[directionAngle[prev[2]]];
        var sin = SIN[directionAngle[prev[2]]];

        const output = [
            instruc[curr] == 1 ? prev[0] + cos : prev[0], 
            instruc[curr] == 1 ? prev[1] + sin : prev[1],
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


        return output;

        },initialPos
    );

    return output;
}

function goMars(input){
    input.shift();

    return input.reduce((prev,curr,index)=>{
        if((index+1)%2 == 0)
            return [...(index > 1 ? prev : []), finalPos(input[index-1],curr)];
        else return prev;
    })
}

//console.log(finalPos([1,2,'N'],'LMLMLMLMM'));
//console.log("")
//console.log(finalPos([3,3,'E'],'MMRMMRMRRM'));
module.exports = { finalPos, goMars};

console.log(goMars([[5,5],[1,2,'N'],'LMLMLMLMM', [3,3,'E'],'MMRMMRMRRM']));