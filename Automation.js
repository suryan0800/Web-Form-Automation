//https://stackoverflow.com/questions/3219758/detect-changes-in-the-dom

var observeDOM = (function(){
  var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

  return function( obj, callback ){
    if( !obj || obj.nodeType !== 1 ) return; // validation

    if( MutationObserver ){
      // define a new observer
      var obs = new MutationObserver(function(mutations, observer){
          callback(mutations);
      })
      // have the observer observe foo for changes in children
      obs.observe( obj, { childList:true, subtree:false, attributes:false });
    }
    
    else if( window.addEventListener ){
      obj.addEventListener('DOMNodeInserted', callback, false);
      obj.addEventListener('DOMNodeRemoved', callback, false);
    }
  }
})();


var elem1 = document.getElementsByTagName("body")[0]

observeDOM( elem1, function(m){ 
   var addedNodes = [], removedNodes = [];

   m.forEach(record => {record.addedNodes.length & addedNodes.push(...record.addedNodes)});
   
   m.forEach(record => record.removedNodes.length & removedNodes.push(...record.removedNodes))


  //if(addedNodes.length > 0){
    //console.clear();
    console.log('Added:', addedNodes, 'Removed:', removedNodes);
    //console.log(document.getElementsByTagName("input"))
    blck1 = addedNodes.filter(function(el){ return el.className === "modalHost"})
    //m.forEach(record => {blck1.push(record.filter(function(el){ return el.className === "modalHost"}))})
    //blck1 = document.getElementsByClassName("modalHost");
    if (blck1.length > 0){
      setTimeout(myFunc,3000,blck1[0]);
    }

    function myFunc(blck){
    var inputs = blck.getElementsByTagName("input");
    console.log(inputs);
    

    //https://stackoverflow.com/questions/7791507/how-can-i-select-all-checkboxes-from-a-form-using-pure-javascript-without-js-fr
    for(var i = 0; i < inputs.length; i++) {
        if(inputs[i].type === "checkbox" || inputs[i].type === "radio" ) {
          if(inputs[i].checked === false){
            console.log("Checkbox Name ",inputs[i].value," ",inputs[i].checked);
            inputs[i].click();
            console.log("Checkbox Name ",inputs[i].value," ",inputs[i].checked);
            console.log("Successfull");
            butn = document.getElementsByClassName("modal-footer")[0].getElementsByTagName("button")[0];
            console.log(butn.innerHTML);
            setTimeout(function(bun) { bun.click();}, 5000, butn);
            break;
          }
          else{ break;}

          
          //console.log(ko.dataFor(blck.getElementsByClassName("poll-options modal-body")[0]).answers);

        }  
    }
    
    console.log(document.getElementsByTagName("button"));
    }

  //}
});



/*

//https://stackoverflow.com/questions/3219758/detect-changes-in-the-dom

var observeDOM = (function(){
  var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

  return function( obj, callback ){
    if( !obj || obj.nodeType !== 1 ) return; // validation

    if( MutationObserver ){
      // define a new observer
      var obs = new MutationObserver(function(mutations, observer){
          callback(mutations);
      })
      // have the observer observe foo for changes in children
      obs.observe( obj, { childList:true, subtree:false, attributes:false });
    }
    
    else if( window.addEventListener ){
      obj.addEventListener('DOMNodeInserted', callback, false);
      obj.addEventListener('DOMNodeRemoved', callback, false);
    }
  }
})();


var elem1 = document.getElementsByTagName("body")[0]

observeDOM( elem1, function(m){ 
   var addedNodes = [], removedNodes = [];

   m.forEach(record => record.addedNodes.length & addedNodes.push(...record.addedNodes));
   
   m.forEach(record => record.removedNodes.length & removedNodes.push(...record.removedNodes))

  //if(addedNodes.length > 0){
    //console.clear();
    console.log('Added:', addedNodes, 'Removed:', removedNodes);
    //console.log(document.getElementsByTagName("input"))

    var inputs = document.getElementsByTagName("input");
    console.log(inputs);
    

    //https://stackoverflow.com/questions/7791507/how-can-i-select-all-checkboxes-from-a-form-using-pure-javascript-without-js-fr
    for(var i = 0; i < inputs.length; i++) {
        if(inputs[i].type === "checkbox" || inputs[i].type === "radio" ) {
          
          if(inputs[i].checked === false){
            console.log("Checkbox Name ",inputs[i].value," ",inputs[i].checked);
            inputs[i].click();
            console.log("Checkbox Name ",inputs[i].value," ",inputs[i].checked);
            console.log("Successfull");
            console.log(document.getElementsByClassName("modal-footer").getElementsByTagName("button"));
            break;
          }
        }  
    }
    
    
  //}
});


*/
