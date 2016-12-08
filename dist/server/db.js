const db = require('mongoose');
const dbUri = 'mongodb://localhost:27017/konik_zamowienia';

db.connect(dbUri);


var suitSchema = new db.Schema({
	// _id: Number,
	data_zamowienia: 'string',
	nazwisko_klienta: 'string',
	zleceniodawca: 'string',

	asortyment: 'string',

	tkanina_marynarka: 'string',
	model_marynarka: 'string',
	rozmiar_mierzony_marynarka: 'string',
	podszewka_marynarka: 'string',
	rozciecia_marynarka: 'string',
	stebnowanie_marynarka: 'string',
	dlugosc_tylu_marynarka: 'string',
	szerokosc_tylu_marynarka: 'string',
	dlugosc_ramienia_marynarka: 'string',
	dlugosc_rekawa_marynarka: 'string',
	opis_marynarka: 'string',

	tkanina_kamizelka: 'string',
	rozmiar_mierzony_kamizelka: 'string',
	model_kamizelka: 'string',
	stebnowanie_kamizelka: 'string',
	dlugosc_przodu_kamizelka: 'string',
	dlugosc_tylu_kamizelka: 'string',
	opis_kamizelka: 'string',

	tkanina_spodnie: 'string',
	rozmiar_mierzony_spodnie: 'string',
	model_spodnie: 'string',
	kieszenie_spodnie: 'string',
	nogawki: 'string',
	dlugosc_nogawek: 'string',
	obwod_pasa: 'string',
	opis_spodnie: 'string'
});

var vestSchema = new db.Schema({
	data_zamowienia: 'string',
	nazwisko_klienta: 'string',

	tkanina_kamizelka: 'string',
	rozmiar_mierzony_kamizelka: 'string',
	model_kamizelka: 'string',
	stebnowanie_kamizelka: 'string',
	dlugosc_przodu_kamizelka: 'string',
	dlugosc_tylu_kamizelka: 'string',
	opis_kamizelka: 'string'
});

var trouserSchema = new db.Schema({
	data_zamowienia: 'string',
	nazwisko_klienta: 'string',
	typ_zamowienia: 'string',

	tkanina_spodnie: 'string',
	rozmiar_mierzony_spodnie: 'string',
	model_spodnie: 'string',
	kieszenie_spodnie: 'string',
	nogawki: 'string',
	dlugosc_nogawek: 'string',
	obwod_pasa: 'string',
	opis_spodnie: 'string'
});

var jacketSchema = new db.Schema({
	data_zamowienia: 'string',
	nazwisko_klienta: 'string',

	tkanina_marynarka: 'string',
	model_marynarka: 'string',
	rozmiar_mierzony_marynarka: 'string',
	podszewka_marynarka: 'string',
	rozciecia_marynarka: 'string',
	stebnowanie_marynarka: 'string',
	dlugosc_tylu_marynarka: 'string',
	szerokosc_tylu_marynarka: 'string',
	dlugosc_ramienia_marynarka: 'string',
	dlugosc_rekawa_marynarka: 'string',
	opis_marynarka: 'string',
});

var userSchema = new db.Schema({
	// _id: Number,
	username: 'string',
	password: 'string',
	name: 'string',

	// orders: [{
	// 	// type: db.Schema.Types.ObjectId, ref: ''
	// }]
});

var Suit = db.model('Suit', suitSchema);
var Vest = db.model('Vest', vestSchema);
var Trouser = db.model('Trouser', trouserSchema);
var Jacket = db.model('Jacket', jacketSchema);
var User = db.model('User', userSchema);

module.exports = {
	db,
	Suit,
	Vest,
	Trouser,
	Jacket,
	User
}
