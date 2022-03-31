
function finalPos(initialPos, probeInstruction){
    var instruc = {'L': (-1)*Math.PI/2, 'R': Math.PI/2, 'M': 1};
    var windRose = {'E': 0, 'N': Math.PI/2, 'W': Math.PI, 'S': Math.PI + Math.PI/2};
    var windRoseCos = {'1:0': 'E', '0:1': 'N', '-1:0': 'W', '0:-1': 'S'};

    var output = probeInstruction.split('').reduce((prev,curr) => {
        return [
            instruc[curr] ? prev[0] + Math.cos(prev[2]) : prev[0], 
            instruc[curr] ? prev[1] + Math.sin(prev[2]) : prev[1],
            instruc[curr] == 1 ? prev[2] : windRose[curr]
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