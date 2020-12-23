//Function to convert Hexadecimal to Decimal code 
//first we will make a decimal to hexadecimal and hexadecimal to decimal program
// We are known to the fact that A hex can be easily converted to a Binary because it is the simple binary concatenation
// of single entites



// Major functions
  
//Input : Number
//Output: String
//Note: We need a 4 digit binary number so we have to fill the empty spaces with zero's
const decToBin = (num) => {
  let bin;
  if(num<0){
  alert(`Enter a Positive Number !`);
  throw Error(`Enter a positive number`);}

  bin = num.toString(2); // converstion to binary in string 
  bin=bin.padStart(8,0);
    return bin;
  }


//Input : String
//Output: Integer 
const binToDec = (bin) => {
    
    bin = Number(bin);
    let dec = 0;  
    let temp=0;
      for(let i=0 ; bin!==0 ; i++){
       temp=bin%10;
       if(temp!==1 && temp!==0){
         alert(`Enter a valid Binary Number`);
         throw Error(`Enter a valid binary number`);
       }
       if(temp===1){
        dec=dec+(2**i);}
        bin=parseInt(bin/10);
      }  
      return dec;
    }


//Input : String
//Output: String
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
      default : return NaN ;
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


//Input : String
//Return: Array of Integers 
const hexToRgb = (code) => {
let red,green,blue;
let one,two;

one = hexToBin(code[0]); //Both one and two are strings
two = hexToBin(code[1]);

if (isNaN(one) || isNaN(two))
{alert(`Enter a valid Hex Code`);
return;}

red = parseInt(one.concat(two)); //A binary number for red

one = hexToBin(code[2]); //Both one and two are strings
two = hexToBin(code[3]);

if (isNaN(one) || isNaN(two))
{alert(`Enter a valid Hex Code`);
return;}

green = parseInt(one.concat(two)); //A binary number for green

one = hexToBin(code[4]); //Both one and two are strings
two = hexToBin(code[5]);

if (isNaN(one) || isNaN(two))
{alert(`Enter a valid Hex Code`);
return;}

blue = parseInt(one.concat(two)); //A binary number for blue

//We have to return an array with comma seperated DECIMAL values...
return [binToDec(red),binToDec(green),binToDec(blue)];
}


//Input : Array of Integers
//Return: String 
RGBToHex = (colors) => {
let red,green,blue; //will store the binary representations
red = decToBin(colors[0]);
green = decToBin(colors[1]);
blue = decToBin(colors[2]);

let hex="#";
let x = binToHex(red.substr(0,4));
hex = hex.concat(x); 
x =  binToHex(red.substr(4,8));
hex = hex.concat(x); 
x = binToHex(green.substr(0,4));
hex = hex.concat(x); 
x = binToHex(green.substr(4,8));
hex = hex.concat(x); 
x =  binToHex(blue.substr(0,4));
hex = hex.concat(x); 
x = binToHex(blue.substr(4,8)) ;
hex = hex.concat(x); 

console.log(hex);
return hex;
}

//----------------------------------------------------------------------------------------------

// Sub-Major functions

//Functions to maniplate IP/OP for the simple functions

//Dec to Bin
ToBin = (inp) => {

  setPreview(`none`);

  if(inp.split("").filter(item => item===`.`).length)
  {alert(`Enter a valid Integer !!!`);
   return ;
  }

  inp = Number(inp);

  if(inp<0)
  return alert(`Enter a Positive Number`);

  else if(inp===0)
  return 0;
  
  else if(!inp)
  return alert(`Enter a valid Decimal Number`);

  else if(inp>10000000)
  return alert(`Try a smaller integer`);
   
  return decToBin(inp);
}

//Bin to Dec
ToDec = (inp) => {
  setPreview(`none`);

  if(inp.length>16){
    alert(`Try a smaller number`);
    return;
  }
  return binToDec(inp); 
}

//hex to rgb
ToRgb = (inp) => {
  if(inp.length<6){
    alert(`Enter a valid Hex`);
    return;
  }

  let value =  hexToRgb(inp);

  if(!value && value!==0){
    return;
  }

  setPreview(`block`);
  preview.style.background=`#${inp}`;

  return `rgb( ${value} )`;
}

//RGB to Hex
ToHex = (inp) => {                  //inp = "1,1,1"
  let stringArray = inp.split(","); //["1","1","1"]
  let stringArray2 = stringArray.filter(item => !item.length==0); //to counter the case like -> 12,,12,12

  if(stringArray.length!==3 || stringArray2.length!==3 || inp.length>11){
    alert(`Enter a valid RGB value !!!`);
    return;
  }

  let array = stringArray2.map( item => Number(item));  //[1,1,1]
  let check = array.filter( item => item>255 || Number.isNaN(item));
  if(check.length!=0){
    alert(`Enter a valid RGB value`);
    return;
  }

  value = RGBToHex(array);

  setPreview(`block`);
  preview.style.background=value;

  return value;
}

//---------------------------------------------------------------------------------------------

// Helping functions

//set state to none or block
setPreview = (state) => {
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

//For removing and adding
setOctothorp = (state) => {
  octothorp.style.display = state;
}

//Sets placeholder value
updatePlaceholder = (value) => {
  inputField.setAttribute(`placeholder`, value);
}

// Function to fetch user input
const userInput = () => {
  return inputField.value;
};

//To check user Input is valid 
const check = (inp) => {

  // Eliminate the inputs like ==>  "      " 

  return 1;
}



// ---------------------------------------------------------------------------------------------------------
// Event Listeners

// Main function from here
let dropDown = document.querySelector(`select`); 
let inputField = document.querySelector(`input`);
let outputField = document.querySelector(`.answer`);
let search = document.querySelector(`.fa-search`); 
let copyButton = document.querySelector(`.fa-clone`);
let preview = document.querySelector(`.preview`);
let octothorp = document.querySelector(`.octothorp`);
let clear = document.querySelector(`.fa-remove`);

//Event Listener to store current state
let current = `Hex to RGB`;   // Current will store the current value of drop down
dropDown.addEventListener(`change`, () => {
  current = dropDown.value;

  inputField.value="";
  outputField.innerText="";

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

  if(current === `RGB to Hex`){
    updatePlaceholder(`e.g: 23,122,44`);
  }
  else{
    updatePlaceholder(`Enter Here`);
  }


});



//Event Listener for search button

search.addEventListener(`click`, ()=>{
  let inp = userInput();
  if(check(inp))
  mainFunc(inp,current);

  else{
    alert(`Please Enter Something`);
    return;}
});

inputField.addEventListener(`keypress` , (e)=>{
if (e.key === 'Enter') {
      let inp = userInput();
      if(check(inp))
      mainFunc(inp,current);
    
      else{
        alert(`Please Enter Something`);
        return;}
    }

});

// Event Listener for cross button
clear.addEventListener(`click`, () => {
  inputField.value='';
  outputField.innerText='';
  setPreview(`none`);
  })

//Copy Button
copyButton.addEventListener("click", function(){
   var copyText = outputField;
   copyText.select() ;
   document.execCommand("Copy");
   alert("Copied to clipboard!");
 });

 // Show Output -----------------------
const showOutput = (output) => { 
  if(output === 0 || output )
   outputField.innerText=output; 
}

//-----------------------------------------------------------------------------------------------

// Main Function

//Make a main function to treat the user input and the current to produce some outputs

const mainFunc = (inp,current) => {
    
    let output;

    switch (current) {

    case `Dec to Bin` : output = ToBin(inp) ;break;
    case `Bin to Dec` : output = ToDec(inp) ;break;
    case `RGB to Hex` : output = ToHex(inp) ;break;
    case `Hex to RGB` : output = ToRgb(inp) ;break;  

    }
    showOutput(output);

};


