"use strict";

var Family = (function(){
 return {
  firebaseCredentials : function(){
    return new Promise ((resolve, reject)=>{
      $.ajax({
        method: 'GET',
        url: `apiKeys.json`
      }).then((response)=>{
        resolve(response);
        console.log("response", response);
      },(error)=>{
        reject(error);
      });
    });
  }
 };
})();