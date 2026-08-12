var items = [];

function create (newItem){
    items.push(newItem);
}

function disply (){
    console.log("current items : " + items);
}

function update (index , newValue){
    items[index]= newValue
}

function deleteItem (index){
    items.splice(index,1)
}

create("banana");
create("apple");
create("watermelon")
disply()
update(2,"mongo")
disply()
create("grape")
disply()
deleteItem(3)
disply()