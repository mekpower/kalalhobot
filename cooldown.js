let array = [];

function add(id){
	array.push(id);
}

function remove(id){
	array.splice(array.indexOf(id),1);
}

function is(id){
	return array.includes(id);
}

module.expors = {
	add: add,
	remove: remove,
	is: is
}