module.exports.create = { 
	'table_name' : 'mahasiswa', 
	'engine' : 'innoDB', 
	'blueprint' : function(){
		increment('id');
		varchar('nim',15),unique();
		varchar('nama',100);

	}
};

module.exports.update = {
	'blueprint' : function(){

	}
};

module.exports.delete = {
	'blueprint' : function(){
		dropIfExistsTable('mahasiswa');
	}
};
