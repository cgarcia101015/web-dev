function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    var i = 0;
    var output = [];


        if (n === 1) {
            output = [0];

        } else if ( n === 2) {
            output = [0,1];

        } else {
            output = [0,1];
            output.push(output[0] + output[1]);
        }




    return output;



}

    //Return an array of fibonacci numbers starting from 0.

//Do NOT change any of the code below 👇


fibonacciGenerator(20);
