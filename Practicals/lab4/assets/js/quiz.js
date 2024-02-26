let correct = 0;
let incorrect = 0;

function checkAnswers(){
    console.log("Checking for answers");
    console.log(document.getElementById("questionOne"));
    console.log(document.getElementById("questionOne").value);
    document.getElementById("solutionTable").style.display = "inline-block";

    if(document.getElementById("questionOne").value === "1964")
    {
        correct++;
        document.getElementById("tableQuestionOne").classList.add("correctHeading");
        document.getElementById("tableTextOne").classList.add("correctText");
        console.log("correct:", correct);
    
    }

    else if(document.getElementById("questionOne").value != "1964")
    {
        document.getElementById("tableQuestionOne").classList.add("incorrectHeading");
        document.getElementById("tableTextOne").classList.add("incorrectText");
        incorrect++;
        console.log("incorrect:", incorrect);
    }

    if(document.getElementById("questionTwo").value === "UnitedStates")
    {
        correct++;
        document.getElementById("tableQuestionTwo").classList.add("correctHeading");
        document.getElementById("tableTextTwo").classList.add("correctText");
        console.log("correct:", correct);
    }

    else if(document.getElementById("questionTwo").value != "UnitedStates")
    {
        document.getElementById("tableQuestionTwo").classList.add("incorrectHeading");
        document.getElementById("tableTextTwo").classList.add("incorrectText");
        incorrect++;
        console.log("incorrect:", incorrect);
    }

    var checkedButton = document.querySelector('input[name = "slang"]:checked');
    console.log(checkedButton)

    if(checkedButton && checkedButton.value === "Sophisticated")
    {
        correct++;
        document.getElementById("tableQuestionThree").classList.add("correctHeading");
        document.getElementById("tableTextThree").classList.add("correctText");
        console.log("correct:", correct);
    }

    else if(checkedButton.value != "Sophisticated")
    {
        document.getElementById("tableQuestionThree").classList.add("incorrectHeading");
        document.getElementById("tableTextThree").classList.add("incorrectText");
        incorrect++;
        console.log("incorrect:", incorrect);
        
    }

   
  
}

