function finalPos(input){
    var instructions = {'L': (-1)*Math.PI/2, 'R': Math.PI/2, 'M': 1};

    var mesh = input.shift(input.length);
    var output = new Array();
    var probePositions = input.filter((item,index)=>index % 2 == 0);
    var probeInstructions = input.filter((item,index)=>index % 2 != 0);


    var output = probePositions.reduce((previous, current, index) => [...previous, instructions]);
}