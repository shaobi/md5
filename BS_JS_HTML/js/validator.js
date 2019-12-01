/* SAMPLE
function nameValidator(pole, poleError) {
	// console.log("coś");

	var pole = document.getElementById(pole);
	var poleError = document.getElementById(poleError);
	// nazwa towaru: maxlength="10" pattern="[A-Za-z]{10}" 

	// console.log(pole.value);

	if(pole.value.length < 2) {
		poleError.innerHTML = "za krótkie";
		pole.classList.add("is-invalid");
		poleError.classList.add("invalid-feedback");
	}
	else {
		poleError.innerHTML = "ok";
		
		pole.classList.remove("is-invalid");
		pole.classList.add("is-valid");
		poleError.classList.remove("invalid-feedback");
		poleError.classList.add("valid-feedback");
	}
} 
END SAMPLE */

var wszystkoOK = false;
// sprawdzane przy naciśnięciu przycisku wyślij
// jeżeli false to nie wysyłaj danych

function poleOK(pole, poleError, komunikat) {

		poleError.innerHTML = komunikat;
		wszystkoOK = true;
		pole.classList.remove("is-invalid");
		pole.classList.add("is-valid");
		poleError.classList.remove("invalid-feedback");
		poleError.classList.add("valid-feedback");
}

function poleNOK(pole, poleError, komunikat) {

		poleError.innerHTML = komunikat;
		wszystkoOK = false;
		pole.classList.remove("is-valid");
		pole.classList.add("is-invalid");
		poleError.classList.remove("valid-feedback");
		poleError.classList.add("invalid-feedback");	
}

function checkNazwaTowaru(pole, poleError) {

	// tylko litery, max długość 10 znaków, pole obowiązkowe
	var pole = document.getElementById(pole);
	var poleError = document.getElementById(poleError);
	var regex = /^[a-zA-Z\s]+$/;

	if( regex.test(pole.value) && pole.value.length >1 && pole.value.length <= 10) {
		poleOK(pole, poleError, "Nazwa Towaru super :) ");
	}
	else {
		poleNOK(pole, poleError, "Nazwa Towaru no nie super :( ");
	}
}

function checkKodTowaru(pole, poleError) {

	// format XX-XX cyfry i litery (bez znaków specjalnych), pole obowiązkowe
	var pole = document.getElementById(pole);
	var poleError = document.getElementById(poleError);
	var regex = /^[0-9a-zA-Z]{2}(?:-[0-9a-zA-Z]{2})?$/;

	if( regex.test(pole.value) && pole.value.length > 3 ) {
		poleOK(pole, poleError, "Kod Towaru super :) ");
	}
	else {
		poleNOK(pole, poleError, "Kod Towaru no nie super :( ");
	}
}

function checkCenaNetto(pole, poleError) {

	// tylko cyfry, automatyczne dodanie ‘.00’ jeśli nie ma liczby po przecinku,
	// pole obowiązkowe
	var pole = document.getElementById(pole);
	var poleError = document.getElementById(poleError);
	var regex = /[0-9]+\.[0-9]{2}/;

	if( regex.test(pole.value) ) {
		poleOK(pole, poleError, "Cena Netto super :) ");
	}
	else {
		poleNOK(pole, poleError, "Cena Netto no nie super :( ");
	}
	obliczCenaBrutto();
}

function cenaNettoZera(pole, poleError){

	var pole = document.getElementById(pole);
	var poleError = document.getElementById(poleError);

	if (pole.value.length > 0) {
		if (pole.value.includes(",") == false || pole.value.includes(".") == false) {
			pole.value = parseFloat(pole.value).toFixed(2);
			poleOK(pole, poleError, "Cena Netto super :) ");
		}
	}
	else {
		poleNOK(pole, poleError, "Cena Netto no nie super :( ");
	}
}

function checkStawkaVAT(pole, poleError) {

	// tylko cyfry, pole obowiązkowe
	var pole = document.getElementById(pole);
	var poleError = document.getElementById(poleError);
	var regex = /[0-9]{2}/;

	if( regex.test(pole.value) && pole.value.length == 2 ) {
		poleOK(pole, poleError, "Stawka VAT super :) ");
	}
	else {
		poleNOK(pole, poleError, "Stawka VAT no nie super :( ");
	}
	obliczCenaBrutto();
}

function obliczCenaBrutto(){
	
	// pole liczy się automatycznie (po uzupełnieniu ceny netto i stawki VAT),
	// pole jest nieedytowalne
	var cenaNetto = parseFloat(document.getElementById("inputCenaNetto").value);
	var stawkaVAT = document.getElementById("inputStawkaVAT").value;
	var cenaBrutto = document.getElementById("inputCenaBrutto");

	if (!isNaN(stawkaVAT) && !isNaN(cenaNetto)) {
		cenaBrutto.value = cenaNetto + (cenaNetto * stawkaVAT/100);
		cenaBrutto.innerHTML = cenaBrutto.value;
	}
	else {
		cenaBrutto.value = 0;
		cenaBrutto.innerHTML = cenaBrutto.value;
	}	
}

function checkKategoriaTowarowa(pole, poleError) {

	// lista wyboru z 3 opcjami, jedna opcja musi być wybrana, pole obowiązkowe
	var pole = document.getElementById(pole);
	var poleError = document.getElementById(poleError);

	if( pole.value != 0 ) {
		poleOK(pole, poleError, "Kategoria Towarowa super :) ");
	}
	else {
		poleNOK(pole, poleError, "Wybierz jedną z pozycji na liście!");
	}
}

function checkOpcjeTowaru(pole, poleError) {

	// checkbox z 5 opcjami do zaznaczenia, 2 muszą być wybrane
	var pole = document.getElementById(pole);
	var poleError = document.getElementById(poleError);
	
	var ileZaznaczonych = document.querySelectorAll('input[name="cbOpcjeTowaru"]:checked').length;
	//console.log ("ileZaznaczonych: "+ ileZaznaczonych);

	if (ileZaznaczonych >= 2) {
		poleOK(pole, poleError, "Opcje Towatu super :) ");
	}
	else {
		poleNOK(pole, poleError, "Wybierz min.2 pozycje!");
	}
}

function czyWszystkoOK(){

	//checkNazwaTowaru();
	//console.log("Wszystko ok: " + wszystkoOK) ;
	if(!wszystkoOK)
	{
		alert("Uzupełnij puste lub źle wypełnione pola!");
	}
}








