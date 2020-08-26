{
const COLORS_ARRAY= [ "silver", "gray", "black", "maroon", "Yellow", "olive", "lime", "green", "aqua", "teal", "blue", "Navy", "fuchsia"];
let correct = false;
let guess = "";

function runGame()
{
    const targetIndex = Math.floor(Math.random()*COLORS_ARRAY.length);
    const target = COLORS_ARRAY[targetIndex];
    console.log("targetIndex = " + targetIndex +"\n target" + target);
    do
    { guess = prompt('I am thinking of one of these colors:\n\n' + COLORS_ARRAY + '\n\nWhatcolor am I thinking of?\n');
        if(guess===null || guess ==="");
        {
            console.log("cancel =" +guess);
            alert("The game has been aborted.");
            return;
        }
        correct = checkGuess(guess,target);
    }
    while(!correct);

    alert("Your game is finished - GREAT JOB!");
    document.body.style.background = guess;

}

    function checkGuess(guess,target){
        let answer = false;
        if(!COLORS_ARRAY.includes(guess))
        {
            alert("Sorry. I don\'t recognize your color. Try again.";)
        }
        else if (guess < target){
            alert( "Hint: Your color is alphabetically lower than mine. Try again");
        }
        else
        {
            alert( "Congratulations, you pick the correct color");
            answer = true;
        }
        return answer;
    }