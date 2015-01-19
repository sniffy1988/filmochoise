app.controller('filmListController', function(){
	this.films = [];
	this.film = '';
	this.reccomend ='';
	this.save = function(nameFilm){
		 var film_list = nameFilm;
		 if (this.films.length != 0) {
		 	for(var i = 0; i < this.films.length; i++){
			 	if (film_list === this.films[i]) {
			 		var error = document.getElementById('error_output');
			 		var error_text = 'List already have this film. Add another';
			 		error.innerHTML = error_text;
			 		this.film = '';
			 		return false;
			 	}
			 }
		 };
		this.films.push(film_list);
		this.film = '';
	};
	this.reset = function(){
		this.film = '';
	};
	//TODO check for input if not null clear error;
	this.randomize = function(){
		var randomNumber =  Math.floor(Math.random() * ((this.films.length-1) - 0 + 1)) + 0;
		this.reccomend = this.films[randomNumber];
	}
});