app.controller('filmListController', function(){
	this.films = ['one','two','three'];
	this.film = '';
	this.reccomend ='';
	this.save = function(nameFilm){
		 var film_list = nameFilm;
		this.films.push(film_list);
		this.film = '';
	};
	this.reset = function(){
		this.film = '';
	};
	this.randomize = function(){
		var randomNumber = Math.floor(Math.random() * (this.films.length - 0 + 1)) + 0;
		this.reccomend = this.films[randomNumber];
	}
});