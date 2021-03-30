let list = [];

function addToList(item) {
  list.push(item);
}

function getList() {
  return list;
}

//Exporterar funktioner så det blir tillgängliga i andra moduler
exports.addToList = addToList;
exports.getList = getList;