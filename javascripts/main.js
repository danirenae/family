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

