var _ = require('lodash');
var mainObj = [];
//we know that we have store name on index[0],id on [1],address on [2],email on [3],class on [4],and marks on [5]

//for adding record
function addRecord(idd,namee,addresss,emaill,classs,markks)
{
     //var obj = [{id:idd , name:namee,  address:addresss, email:emaill, clas:classs, marks : markks }]; 
     //var mainObj  = _.concat(obj,);
     mainObj.push( {id:idd, name:namee,  address:addresss, email:emaill, clas:classs, marks : markks } );
}
//for updating record
function updRecord(namee){
 // get index of object with given name
  var reqIndex = _.findIndex(mainObj, function(o) { return o.name == namee; }); 
  
  if(mainObj[reqIndex].name=== namee)
   {
    mainObj[reqIndex].clas = "10th";
    mainObj[reqIndex].email = "hamzaaa@gmail.com";
    mainObj[reqIndex].marks = 300;
    return "Data updated successfully";   
   }
   
}

function displayRecord(namee){
    // get index of object with given name
     var Index = _.findIndex(mainObj, function(o) { return o.name == namee; }); 
     if(mainObj[Index].name=== namee)
      {
            console.log(mainObj[Index]);
      }
      
   }

//for removing record
function remRecord(namee){
// remove object
    var removed = _.remove(mainObj, item => item.name === namee);  
    }


    //now we want to add 3 records
addRecord(001,"asad","isb","asad@gmail.com","9th",500);
addRecord(002,"hamza","rwp","hamza@gmail.com","10th",400);
addRecord(003,"junaid","rwp","junaid@gmail.com","10th",500);

//now we wanna remove one record by giving student's id as argument
remRecord("asad"); 

// now we wanna update record of hamza
updRecord("hamza");
//display specific record
displayRecord("hamza");

//console.log(mainObj);