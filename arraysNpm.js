var _ = require('lodash');
var mainArray = [];
//we know that we have store name on index[0],id on [1],address on [2],email on [3],class on [4],and marks on [5]

//for adding record
function addRecord(idd,namee,addresss,emaill,classs,markks)
{
     var arr = [idd , namee,addresss,emaill,classs,markks ]; 
     //var mainObj  = _.concat(obj,);
     mainArray.push(arr);
}

//for updating record
function updRecord(namee){
    // get index of object with given name
 _.findIndex(mainArray, function(o) { if(o[1] === namee){
     o[3]="hamzaaa@gmail.com";
     o[4]="10th";
     o[5]=300;
     
     return "Data updated successfully"; 
 }
});

}


//for displaying specific record  
function displayRecord(namee){
       // get index of object with given name
        var Index = _.findIndex(mainArray, function(o) { return o[1] === namee; }); 
        //finally print that index
        console.log(mainArray[Index]);
         
}
   
  
//for removing record
   function remRecord(namee){
   // remove object
       _.remove(mainArray, item => item[1] === namee);  
       }
   

    //now we want to add 3 records
addRecord(001,"asad","isb","asad@gmail.com","9th",500);
addRecord(002,"hamza","rwp","hamza@gmail.com","10th",400);
addRecord(003,"junaid","rwp","junaid@gmail.com","10th",500);


// now we wanna update record of hamza
updRecord("hamza");

//now we wanna remove one record by giving student's id as argument
remRecord("asad"); 


//display specific record
displayRecord("hamza");

//for displaying whole record
//console.log(mainArray);