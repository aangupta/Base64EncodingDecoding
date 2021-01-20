const readLineSync = require('readline-sync');
console.log("Welcome to Base64 Encoder and Decoder Utility App\n");

function base64EncoderDecoder(){

  let selectedOption = parseInt(readLineSync.question("Option 0 to leave the Base 64 Utility Application\nOption 1 for encoding the string to Base 64.\nOption 2 for decoding Base64 encoded string.\nPlease provide your input\n"));

  console.log(`Hi, you have selected option: ${selectedOption}\n`);

  
  if(selectedOption==0){
     return selectedOption;
   }

  while(selectedOption!=0){

    switch(selectedOption){

  case 1:
  let stringToEncode = readLineSync.question("Enter the string you wish to encode it to Base64 \n");
  let buff = Buffer.from(stringToEncode);
  let base64data = buff.toString('base64');
  console.log(`Your encoded Base64 string is : ${base64data}\n`);
  break;
  case 2:
  let stringToDecode = readLineSync.question("Enter the encoded string that you wish to decode it from Base64\n");
  let buff1 = Buffer.from(stringToDecode, 'base64');
  let decodedString = buff1.toString('ascii');
  console.log(`Your decoded string from Base 64 is : ${decodedString}\n`);
  break;
  default:
  console.log("Invalid String");
  break;
  }
  
  selectedOption = parseInt(readLineSync.question("Please provide your input\n"));
  console.log(`Hi, you have selected option: ${selectedOption}\n`);
   

  }

}

const val = base64EncoderDecoder();
console.log("Thank you for using Base64 Encoder and Decoder Utility App\n");