
function calculation(){

    let billamt = Number(document.getElementById("enterbill").value);
    let tippercent = Number(document.getElementById("tiprange").value);
    let splitpeople = Number(document.getElementById("splitrange").value);

    document.getElementById("splitid").innerHTML = splitpeople +" Person"
    document.getElementById("tipid").innerHTML = tippercent + "%"

     let totaltip = billamt * (tippercent / 100);
     let tippereach = Math.ceil(totaltip / splitpeople);
     let totalbill = billamt + totaltip;

    
    

    let button = document.getElementById("button");
    button.addEventListener('click', outputCalculations);

    function outputCalculations(){
       
        document.getElementById("output").innerHTML = tippereach;
        document.getElementById("totalbill").innerHTML = totalbill;
        document.getElementById("totaltip").innerHTML = totaltip;

    }

    var obj ={
            0:" ",
            5: "Average",
            10: "Good",
            15: "Too Good",
            20: "Excellent"
        };

    let newob = document.getElementById("tipvalue").innerHTML = obj[tippercent];
    // console.log(obj[tippercent]);
    
}



