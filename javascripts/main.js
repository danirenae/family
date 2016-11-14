"use strict";

var apiKeys = {};
var uid = "";


function familyMemberToDOM (){
  Family.getFamilyMember(apiKeys,uid).then(function(fam){
    console.log("fam", fam);
  });
}


$(document).ready(function(){
  Family.firebaseCredentials().then(function(keys){
    console.log("keys", keys);
    apiKeys = keys;
      firebase.initializeApp(apiKeys);
  });
});

$('#nfm-submit').on('click', function(){
  console.log("button works");
  let newFamily = {
    "name" : $('#name').val(),
    "age" : $('#age').val(),
    "gender" : $('#gender').val(),
    "skills" : $('#skills').val() // may have to write this differently?
  };
  Family.addFamilyMember(apiKeys, newFamily).then(function(){
    familyMemberToDOM();
  });
});










