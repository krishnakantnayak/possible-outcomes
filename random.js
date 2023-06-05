//below function is getting called for the random outcome of the event baised by the given probability
function generateOutcome(eventOutcomes) {

    let outcomes = Object.keys(eventOutcomes);
    let probabilities = Object.values(eventOutcomes);
    //rand contains a random value between 0 to 1
    let rand = Math.random();
    //this loop will iterate for the number of possibilities 
    for (let i = 0; i < outcomes.length; i++) {
        //main logic: the sum of all the probabilities is never more than 100% and converting from percentage by division by 100
        // "rand - probabilities[i];" by using the following expression we are generating random occurance of
        // event occur
        rand = rand - probabilities[i] / 100;

        //whichever occurance will have mroe probability value will be returned more times usually.
        if (rand < 0) {
            return outcomes[i];
        }
    }
}

//pass testcases to following function
function getans(testcase) {
    resultmap = {}
    for (i of Object.keys(testcase)) {
        resultmap[i] = 0;
    }

    let sum = Object.values(testcase).reduce((acc, val) => acc + val);
    
    //exception handling for wrong test case
    if(sum>100){
        console.log('invalid testcase => percentage sum is more than 100');
        return;
    }

    for (var i = 0; i < 1000; i++) {
        var ou = generateOutcome(testcase);
        resultmap[ou]++;
    }
    console.log('On triggering the event 1000 times we got following result,\n', resultmap, '\n which is roughly inline with the biasness given.\n');
}

//hardcoded unit testcases key value pair where key-> probability and value-> percentage 
//make sure when your test case probability percentages of all probable occurance should be equal to 100% else you might recieve another key as undefined for that unmentioned occurance

//dice test case
let tc0 = { '1': 10, '2': 30, '3': 15, '4': 15, '5': 30, '6': 0 };
//toss testcase
let tc1 = { "Heads": 80, "Tails": 20};

getans(tc0);
getans(tc1);
