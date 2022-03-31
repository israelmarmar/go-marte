
function finalPos(initialPos, probeInstruction){
    var instruc = {'L': (-1)*Math.PI/2, 'R': Math.PI/2, 'M': 1};

    return probeInstruction.split('').reduce((prev,curr) => 
        [
            instruc[curr[2]] ? initialPos[0] + Math.sin(instruc[prev[2]]) : initialPos[0] + 0, 
            instruc[curr[2]] ? initialPos[1] + Math.cos(instruc[prev[2]]) : initialPos[1] + 0,
            !instruc[curr[2]] ? prev[2] + curr[2] : prev[2]
        ]
    );
}

function inputData(input){


    var mesh = input.shift(input.length);
    var output = new Array(input.length);
    var probePositions = input.filter((item,index)=>index % 2 == 0);
    var probeInstructions = input.filter((item,index)=>index % 2 != 0);


    var output = probePositions.reduce((previous, current, index) => [...previous, []]);
}

console.log(finalPos([1,2,Math.PI/2],'LMLMLMLMM'));