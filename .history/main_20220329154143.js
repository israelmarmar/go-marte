
function finalPos(initialPos, probeInstruction){
    var instruc = {'L': (-1)*Math.PI/2, 'R': Math.PI/2, 'M': 1};
    var windRoseCos = {'1:0': 'E', '0:1': 'N', '-1:0': 'W', '0:-1': 'S'};

    var output = probeInstruction.split('').reduce((prev,curr) => {
        console.log(instruc[curr] ? initialPos[0] + Math.cos(prev[2]) : initialPos[0] + 0);
        return [
            instruc[curr] ? initialPos[0] + Math.cos(prev[2]) : initialPos[0] + 0, 
            instruc[curr] ? initialPos[1] + Math.sin(prev[2]) : initialPos[1] + 0,
            !instruc[curr] ? prev[2] + curr[2] : prev[2]
        ]
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

console.log(finalPos([1,2,Math.PI/2],'LMLMLMLMM'));