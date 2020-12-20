//Function to convert Hexadecimal to Decimal code 
//first we will make a decimal to hexadecimal and hexadecimal to decimal program
// We are known to the fact that A hex can be easily converted to a Binary because it is the simple binary concatenation
// of single entites


// Dec to Bin   
//Input : Number
//Output: String
//Note: We need a 4 digit binary number so we have to fill the empty spaces with zero's
const decToBin = (num) => {
  // num = Number(num); 
  let bin;
  if(num<0)
  throw Error(`Enter a positive number`);

  bin = num.toString(2); // converstion to binary in string 
  bin=bin.padStart(8,0);
    return bin;
  }
//In dec to bin while converting user input from string to a number check if the number is valid or not only then parse the function


//Bin To Dec
//Input : String
//Output: Integer 
const binToDec = (bin) => {
    
    bin = Number(bin);
    let dec = 0;  
    let temp=0;
      for(let i=0 ; bin!==0 ; i++){
       temp=bin%10;
       if(temp!==1 && temp!==0){
         alert(`Enter a valid binary number`);
         throw Error(`Enter a valid binary number`);
       }
       if(temp===1){
        dec=dec+(2**i);}
        bin=parseInt(bin/10);
      }  
      return dec;
    }


//Hex to Bin 
//Input : String
//Output: String
//we will store all the binary equivalents of the hex to bin with conditions
  const hexToBin = (hex) => {
    switch (hex) {
      case `0`: return `0000`;
      case `1`: return `0001`;
      case `2`: return `0010`; 
      case `3`: return `0011`;
      case `4`: return `0100`;
      case `5`: return `0101`; 
      case `6`: return `0110`;
      case `7`: return `0111`;
      case `8`: return `1000`; 
      case `9`: return `1001`;
      case `A`:
      case `a`: return `1010`;
      case `B`:
      case `b`: return `1011`;
      case `C`:
      case `c`: return `1100`;
      case `D`:
      case `d`: return `1101`;
      case `E`:
      case `e`: return `1110`; 
      case `F`:
      case `f`: return `1111`;
      default : return 0 ;
        break;
    }
  }


  const binToHex = (bin) => {
    switch (bin) {
      case `0000`: return `0`;
      case `0001`: return `1`;
      case `0010`: return `2`; 
      case `0011`: return `3`;
      case `0100`: return `4`;
      case `0101`: return `5`; 
      case `0110`: return `6`;
      case `0111`: return `7`;
      case `1000`: return `8`; 
      case `1001`: return `9`;
      case `1010`: return `A`;
      case `1011`: return `B`;
      case `1100`: return `C`;
      case `1101`: return `D`;
      case `1110`: return `E`; 
      case `1111`: return `F`;
      default:
       console.log("Not an hexadecimal for this..!!!");
        break;
    }
  }

//Function to convert Hexadecimal code to RGB values
//Input : String
//Return: Array of Integers 
//Note: the code should be of 6 digits
//The 'code' would be a string
const hexToRgb = (code) => {
let red,green,blue;
let one,two;
one = hexToBin(code[0]); //Both one and two are strings
two = hexToBin(code[1]);
red = parseInt(one.concat(two)); //A binary number for red


one = hexToBin(code[2]); //Both one and two are strings
two = hexToBin(code[3]);
green = parseInt(one.concat(two)); //A binary number for green


one = hexToBin(code[4]); //Both one and two are strings
two = hexToBin(code[5]);
blue = parseInt(one.concat(two)); //A binary number for blue


//We have to return an array with comma seperated DECIMAL values...
return [binToDec(red),binToDec(green),binToDec(blue)];
}

//Function to convert RGB to hexadecimal
//Input : Array of Integers
//Return: String 
//Input will be an array of three decimal numbers and return value would a string 
RGBToHex = (colors) => {
let red,green,blue; //will store the binary representations
red = decToBin(colors[0]);
green = decToBin(colors[1]);
blue = decToBin(colors[2]);

let hex="#";
let x = binToHex(red.substr(0,4));
hex = hex.concat(x); //console.log(hex);
x =  binToHex(red.substr(4,8));
hex = hex.concat(x); //console.log(hex);
x = binToHex(green.substr(0,4));
hex = hex.concat(x); //console.log(hex);
x = binToHex(green.substr(4,8));
hex = hex.concat(x); //console.log(hex);
x =  binToHex(blue.substr(0,4));
hex = hex.concat(x); //console.log(hex);
x = binToHex(blue.substr(4,8)) ;
hex = hex.concat(x); //console.log(hex);

console.log(hex);
return hex;
}

//The Scope of Improvement
// we can reduce the size of the program by merging the hexToBin and binToHex function into
// one by using object and key value pairs.

// error for RGBtoHex[255,255,256]
// error for HextoRGb('-1')


//Functions to maniplate IP/OP for the simple functions

//Dec to Bin
ToBin = (inp) => {

  setPreview(`none`);

  inp = Number(inp);

  if(inp<0)
  return alert(`enter a positive number`);

  else if(inp===0)
  return 0;
  
  else if(!inp)
  return alert(`enter a valid decimal number`);

  else if(inp>10000000)
  return alert(`Try a smaller integer`);
   
  return decToBin(inp);
}

//Bin to Dec
ToDec = (inp) => {
  setPreview(`none`);
  return binToDec(inp); 
}

isPreview = () => {    //this is not working, something freaky about the css/scss
  if(preview.style.display === "")
  return 0;

  else
  return 1;

}

//hex to rgb
ToRgb = (inp) => {
  if(inp.length<6){
    alert(`enter a valid hex`);
    return;
  }

  let value =  hexToRgb(inp);
  return `rgb( ${value} )`;
}

//RGB to Hex
ToHex = (inp) => {      //inp = "1,1,1"
  let stringArray = inp.split(","); //["1","1","1"];
  let array = stringArray.map( item => Number(item));  //[1,1,1]
  let check = array.filter( item => item>225 || Number.isNaN(item));
  console.log(check);
  if(check.length!=0){
    alert(`enter a valid RGB value`);
    return;
  }

  value = RGBToHex(array);
  return value;
}


//set state to none or block
setPreview = (state) => {
  // console.log(`asasas`);
  preview.style.display = state;
}

//set value to rgb  or hex code
setPreviewColor = (value) => {
  preview.style.background = value;
}

//maxlength for the input field
setMaxlength = (n) => {
  inputField.setAttribute("maxlength",n);
}

//minlength for the input field
setMinlength = (n) => {
  inputField.setAttribute("minlength",n);
}

setOctothorp = (state) => {
  octothorp.style.display = state;
}






// ---------------------------------------------------------------------------------------------------------
// Main function from here
let dropDown = document.querySelector(`select`); 
let inputField = document.querySelector(`input`);
let outputField = document.querySelector(`.answer`);
let search = document.querySelector(`.fa-search`); 
let copyButton = document.querySelector(`.fa-clone`);
let preview = document.querySelector(`.preview`);
let octothorp = document.querySelector(`.octothorp`);

//Event Listener to store current state
let current = `Hex to RGB`;   // Current will store the current value of drop down
dropDown.addEventListener(`change`, () => {
  current = dropDown.value;

  if(current === `Hex to RGB`)
  { 
    setMinlength(6);
    setMaxlength(6);
    setOctothorp(`block`);
  }
  else{
    setMinlength();
    setMaxlength();
    setOctothorp(`none`);
  }

});

// Function to fetch user input
const userInput = () => {return inputField.value;};

//Event Listener for search button

search.addEventListener(`click`, ()=>{
  let inp = userInput();
  mainFunc(inp,current);
});

inputField.addEventListener(`keypress` , (e)=>{
if (e.key === 'Enter') {
      let inp = userInput();
      mainFunc(inp,current);
    }

});

//Copy Button
copyButton.addEventListener("click", function(){
   var copyText = outputField;
   copyText.select() ;
   document.execCommand("Copy");
   alert("Copied to clipboard!");
 });


//Make a main function to treat the user input and the current to produce some outputs

const mainFunc = (inp,current) => {
    
    let output;

    switch (current) {

    case `Dec to Bin` : output = ToBin(inp) ;break;
    case `Bin to Dec` : output = ToDec(inp) ;break;
    case `RGB to Hex` : output = ToHex(inp) ;break;
    case `Hex to RGB` : output = ToRgb(inp) ;break;  
    default : console.log(`ohno`);

    }
    console.log(output);
    showOutput(output);

};

// Show Output -----------------------
const showOutput = (output) => {
      //  inputField.innerText=``;   //wanted here to clear the input, soon the output printed 
      if(output === 0 || output )
       outputField.innerText=output;
      else
      alert(`???`); 
}









