"use strict";

var Family = (function(oldFB){

oldFB.getFamilyMembers = function(apiKeys, uid){
  return new Promise((resolve, reject)=>{
    $.ajax({
      method: 'GET',
      url: `${apiKeys.databaseURL}/items.json?orderBy="uid"&equalTo="${uid}"` // change this
    }).then((response)=>{
      let items = [];
        Object.keys(response).forEach(function(key){
          response[key].id = key;
          items.push(response[key]);
        });
      resolve(items);
    },(error) =>{
      console.log(error);
      reject(error);
    });
  });
};

oldFB.addFamilyMember = function(apiKeys, newItem){
  return new Promise((resolve, reject)=>{
    $.ajax({
      method: 'POST',
      url: `${apiKeys.databaseURL}/items.json`, // change this
      data: JSON.stringify(newItem),
      dataType: 'json'
    }).then((response)=>{
      console.log("response from POST", response);
      resolve(response);
    },(error) =>{
      reject(error);
    });
  });
};

oldFB.deleteFamilyMember = function(apiKeys, itemId){
  return new Promise((resolve, reject)=>{
    $.ajax({
      method: 'DELETE',
      url: `${apiKeys.databaseURL}/items/${itemId}.json`, //change this
    }).then((response)=>{
      console.log("response from DELETE", response);
      resolve(response);
    },(error) =>{
      reject(error);
    });
  });
};

oldFB.editFamilyMember = function(apiKeys, itemId, editedItem){
  return new Promise((resolve, reject)=>{
    $.ajax({
      method: 'PUT',
      url: `${apiKeys.databaseURL}/items/${itemId}.json`,
      data: JSON.stringify(editedItem), //this makes sure that whatever is coming back is valid json
      dataType: 'json'
    }).then((response)=>{
      console.log("response from POST", response);
      resolve(response);
    },(error) =>{
      reject(error);
    });
  });
};

return oldFB;
})(Family || {});
