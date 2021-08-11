var myArray = [
    {name: 'deepak', place: 'bangalore'}, 
    {name: 'deepak', place: 'bangalore'}, 
    {name: 'deepak', place: 'bangalore'}, 
    {name: 'alok', place: 'berhampur'},
    {name: 'alok1', place: 'berhampur'},
    {name: 'alok2', place: 'berhampur'},
];
var toRemove = [
    {name: 'deepak', place: 'bangalore'},
    {name: 'alok', place: 'berhampur'},
    {name: 'chandan', place: 'mumbai'}
];

for( var i=myArray.length - 1; i>=0; i--){
    for( var j=0; j<toRemove.length; j++){
        if(myArray[i] && (myArray[i].name === toRemove[j].name)){
            toRemove.splice(j, 1);
        }
    }
}

console.log("DATA-->", toRemove);