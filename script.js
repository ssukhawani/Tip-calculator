
function calculation(){

    let billamt = Number(document.getElementById("enterbill").value);
    let tippercent = Number(document.getElementById("tiprange").value);
    let splitpeople = Number(document.getElementById("splitrange").value);

    document.getElementById("splitid").innerHTML = splitpeople +" Person"
    document.getElementById("tipid").innerHTML = tippercent + "%"

     let totaltip = billamt * (tippercent / 100);
     let tippereach = Math.ceil(totaltip / splitpeople);
     let totalbill = billamt + totaltip;

    
    console.log(totalbill);

    let button = document.getElementById("button");
    button.addEventListener('click', outputCalculations);

    function outputCalculations(){
       
        document.getElementById("output").innerHTML = tippereach;
        document.getElementById("totalbill").innerHTML = totalbill;
        document.getElementById("totaltip").innerHTML = totaltip;

    }
    
}



