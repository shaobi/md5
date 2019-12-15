var wszystkoOK = false;
// sprawdzane przy naciśnięciu przycisku wyślij
// jeżeli false to nie wysyłaj danych

var IdTowaruCounter = 1;

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

function checkNazwaTowaru() {

	// tylko litery, max długość 10 znaków, pole obowiązkowe
	var pole = document.getElementById("inputNazwaTowaru");
	var poleError = document.getElementById("inputNazwaTowaruError");
	var regex = /^[a-zA-Z\s]+$/;

	if( regex.test(pole.value) && pole.value.length >1 && pole.value.length <= 10) {
		poleOK(pole, poleError, "Nazwa Towaru super :) ");
	}
	else {
		poleNOK(pole, poleError, "Nazwa Towaru no nie super :( ");
	}
}

function checkKodTowaru() {

	// format XX-XX cyfry i litery (bez znaków specjalnych), pole obowiązkowe
	var pole = document.getElementById("inputKodTowaru");
	var poleError = document.getElementById("inputKodTowaruError");
	var regex = /^[0-9a-zA-Z]{2}(?:-[0-9a-zA-Z]{2})?$/;

	if( regex.test(pole.value) && pole.value.length > 3 ) {
		poleOK(pole, poleError, "Kod Towaru super :) ");
	}
	else {
		poleNOK(pole, poleError, "Kod Towaru no nie super :( ");
	}
}

function checkCenaNetto() {

	// tylko cyfry, automatyczne dodanie ‘.00’ jeśli nie ma liczby po przecinku,
	// pole obowiązkowe
	var pole = document.getElementById("inputCenaNetto");
	var poleError = document.getElementById("inputCenaNettoError");
	var regex = /[0-9]+\.[0-9]{2}/;

	if( regex.test(pole.value) ) {
		poleOK(pole, poleError, "Cena Netto super :) ");
	}
	else {
		poleNOK(pole, poleError, "Cena Netto no nie super :( ");
	}
	obliczCenaBrutto();
}

function cenaNettoZera(){

	var pole = document.getElementById("inputCenaNetto");
	var poleError = document.getElementById("inputCenaNettoError");

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

function checkStawkaVAT() {

	// tylko cyfry, pole obowiązkowe
	var pole = document.getElementById("inputStawkaVAT");
	var poleError = document.getElementById("inputStawkaVATError");
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

function checkKategoriaTowarowa() {

	// lista wyboru z 3 opcjami, jedna opcja musi być wybrana, pole obowiązkowe
	var pole = document.getElementById("selectKategoriaTowarowa");
	var poleError = document.getElementById("selectKategoriaTowarowaError");

	if( pole.value != 0 ) {
		poleOK(pole, poleError, "Kategoria Towarowa super :) ");
	}
	else {
		poleNOK(pole, poleError, "Wybierz jedną z pozycji na liście!");
	}
}


function checkOpcjeTowaru() {

	// checkbox z 5 opcjami do zaznaczenia, 2 muszą być wybrane
	var pole = document.getElementById("checkboxListOpcjeTowaru");
	var poleError = document.getElementById("checkboxListOpcjeTowaruError");
	
	var checboxOpcjeTowaru = document.querySelectorAll('input[name="cbOpcjeTowaru"]:checked').length;
	
	if (checboxOpcjeTowaru >= 2) {
		poleOK(pole, poleError, "Opcje Towatu super :) ");
	}
	else {
		poleNOK(pole, poleError, "Wybierz min.2 pozycje!");
	}
}

function czyWszystkoOK(){
	
	checkKodTowaru();
	checkCenaNetto();
	checkStawkaVAT();
	checkKategoriaTowarowa();
	checkOpcjeTowaru();
	checkNazwaTowaru();
	
	//console.log("Wszystko ok: " + wszystkoOK) ;
	if(!wszystkoOK) {
		alert("Uzupełnij puste lub źle wypełnione pola!");
	}
	else {
		addRowToTable();
	}
}

function sortowanieTabeli(){

	var wybor = document.getElementById("selectSortowanieTabeli").value;
	
	// ASC 0 - rosnąco, DESC 1 - malejąco 
	switch (wybor) {
		case '1': // cena brutto od najniższej
			$('#myTable').trigger("sorton", [ [[5,0]] ]);
			break;
		case '2': // cena brutto od najwyższej 
			$('#myTable').trigger("sorton", [ [[5,1]] ]);
			break;	
		case '3': // ocena od najniższej 
			$('#myTable').trigger("sorton", [ [[15,0]] ]);
			break; 
		case '4': // ocena od najwyższej
			$('#myTable').trigger("sorton", [ [[15,1]] ]);
			break;				
		case '5': // nazwa od A
			$('#myTable').trigger("sorton", [ [[1,0]] ]);
			break;
		case '6': // nazwa od Z
			$('#myTable').trigger("sorton", [ [[1,1]] ]);
			break;	
	}
}

function addRowToTable() {

	var nazwaTowaru 	= document.getElementById("inputNazwaTowaru").value;
	var kodTowaru 		= document.getElementById("inputKodTowaru").value;
	var cenaNetto 		= document.getElementById("inputCenaNetto").value; 
	var stawkaVAT 		= document.getElementById("inputStawkaVAT").value;
	var cenaBrutto 		= document.getElementById("inputCenaBrutto").value;
	var zdjecie 		= document.getElementById("inputZdjecie").value; 

	var kategoriaID = document.getElementById("selectKategoriaTowarowa").value; // zwraca id (value) wybranej opcji 
	var kategoriaTowarowa = $("#selectKategoriaTowarowa option:selected").text(); // zwraca tekst wybranej opcji

	var opcjeID='';
	var cbOpcjeTowaru = document.querySelectorAll('input[name="cbOpcjeTowaru"]');
	for (var i=0; i < cbOpcjeTowaru.length; i++) {
		if(cbOpcjeTowaru[i].checked){
			opcjeID = opcjeID + cbOpcjeTowaru[i].value+ " ";  //zwraca zaznaczone ID (value) checkboks'a
		}
	}

	var opcjeTowaru_txt="";
	$("input[name='cbOpcjeTowaru']:checked").each(function() {
	    var idVal = $(this).attr("id");
	    var labelOpcjeTowaru = $("label[for='"+idVal+"']").text() ;
	    opcjeTowaru_txt += labelOpcjeTowaru + ' ';	    
	});

	var ocenaID = document.querySelector('input[name="rbOcenaTowaru"]:checked').value; // zwraca zaznaczone ID (value) radio-przycisku
	var ocenaTowaru;
	$("input[name='rbOcenaTowaru']:checked").each(function() {
	    var idVal = $(this).attr("id");
	    var labelOcenaTowaru = $("label[for='"+idVal+"']").text() ;
	    ocenaTowaru = labelOcenaTowaru;
	});

	IdTowaruCounter += 1;
	var row = '<tr><td hidden>'  + IdTowaruCounter
			+ '</td><td>' + nazwaTowaru 
			+ '</td><td>' + kodTowaru 
			+ '</td><td>' + cenaNetto 
			+ '</td><td>' + stawkaVAT
			+ '</td><td>' + cenaBrutto 
			+ '</td><td>' + kategoriaTowarowa 
			+ '</td><td>' + opcjeTowaru_txt 
			+ '</td><td>' + ocenaTowaru 
			+ '</td><td>' + zdjecie 
			+ '</td><td>' + '<button type="button" class="btn btn-outline-info btn-sm btn-block" onclick="edytujWiersz()">edit</button>'
			+ '</td><td>' + '<button type="button" class="remove btn btn-outline-danger btn-sm btn-block" onclick="usunWiersz()">-</button>'
			+ '</td><td>' + '<button type="button" class="btn btn-outline-warning btn-sm btn-block" onclick="dodajWiersz()">+</button>'
			+ '</td><td hidden>' + kategoriaID 
			+ '</td><td hidden>' + opcjeID 
			+ '</td><td hidden>' + ocenaID 
			+ '</td></tr>'
      , $row = $(row),
      resort = true;
    $('#myTable')
      .find('tbody').append($row)
      .trigger('addRows', [$row, resort]);
      //alert("Nowy Towar został dodany :) ");

    document.getElementById("myForm").reset();

}

function usunWiersz(){
  
	$('#myTable').delegate('button.remove', 'click' ,function() {
    	var t = $('#myTable');
    	$(this).closest('tr').remove();
    	t.trigger('update');
    })

	$('#myAlert').show();
	setTimeout(function() {
        //$("#myAlert").alert('close'); // usuwa całkowicie element ze strony
        $("#myAlert").hide(); // ukrywa element na stronie
    }, 2000);

    IdTowaruCounter -= 1;

	// czysci całą tabliceę
	//$('.tablesorter tbody tr').remove();
	//$('.tablesorter').trigger('update');	
}

var IdTowaru;
function edytujWiersz(){

	document.getElementById('buttonDodajZamowienie').style.display = 'none'; // odwołanie JS
	$('#buttonAktualizujWiersz').show(); // odwołanie JQuery

	var table = document.getElementById('myTable');
	var cells = table.getElementsByTagName('td');

	$("input[name='cbOpcjeTowaru']").prop('checked', false); // wyczyszczenie pól typu checbox

	for (var i = 0; i < cells.length; i++) {
        
        var cell = cells[i]; // Take each cell
        cell.onclick = function() { // do something on onclick event for cell
            
            var rowId = this.parentNode.rowIndex; // zwraca id wiersza
            var rowSelected = table.getElementsByTagName('tr')[rowId]; // zwraca cały wiersz         
            //msg = 'The ID of the company is: ' + rowSelected.cells[0].innerHTML; // zwraca wartość z kolumny nr 0
            //msg += '\nThe cell value is: ' + this.innerHTML; // zwraca wartosc z komorki na ktorej sie kliknelo

        	document.getElementById('inputNazwaTowaru').value = rowSelected.cells[1].innerHTML;
        	document.getElementById('inputKodTowaru').value = rowSelected.cells[2].innerHTML;
        	document.getElementById('inputCenaNetto').value = rowSelected.cells[3].innerHTML;
        	document.getElementById('inputStawkaVAT').value = rowSelected.cells[4].innerHTML;
        	document.getElementById('inputCenaBrutto').value = rowSelected.cells[5].innerHTML;
        	document.getElementById('inputZdjecie').value = rowSelected.cells[9].innerHTML;
        	document.getElementById('selectKategoriaTowarowa').value = rowSelected.cells[13].innerHTML;
			$("input[name='rbOcenaTowaru'][value='"+rowSelected.cells[15].innerHTML+"']").prop('checked', true);
			var opcjeT = rowSelected.cells[14].innerHTML;
			for (var i=0; i < opcjeT.length; i=i+2) {
				$("input[name='cbOpcjeTowaru'][value='"+opcjeT[i]+"']").prop('checked', true);
			}

			// ustawia IdTowaru, w celu aktualizacji wiersza
			IdTowaru = rowSelected.cells[0].innerHTML;
			wszystkoOK = true;
        }
    }
 }

 function aktualizujWiersz(){

	var table = document.getElementById('myTable');
	
	console.log("ID Towaru: "+ IdTowaru); 

	//czyWszystkoOK();
	if ( wszystkoOK ) {
		
		// usuwa wiersz o wybranym ID
		// +1 zeby nie usuwał wiersza th (nagłówki kolumn)
		table.deleteRow(parseInt(IdTowaru) + 1);

    	// dodaje nowy wiersz
    	setTimeout(function() {
        	addRowToTable();
    	}, 1000);
     	

		$('#buttonAktualizujWiersz').hide();
  		$('#buttonDodajZamowienie').show();
	}
	else {
		alert("Uzupełnij puste lub źle wypełnione pola!");
	}
}

 function dodajDoKoszyka(){

 	var table = document.getElementById('myTable');
	var cells = table.getElementsByTagName('td');

	for (var i = 0; i < cells.length; i++) {
        
        var cell = cells[i]; // Take each cell
        cell.onclick = function() { // do something on onclick event for cell
            
            var rowId = this.parentNode.rowIndex; // zwraca id wiersza
            var rowSelected = table.getElementsByTagName('tr')[rowId]; // zwraca cały wiersz         
            //console.log(rowSelected);
        	
        	// dodanie do localStorage: nazwy i cenu brutto towaru
        	localStorage.setItem('nazwaTowaru', rowSelected.cells[1].innerHTML);
        	localStorage.setItem('cenaBruttoTowaru', rowSelected.cells[5].innerHTML);
        	//localStorage.setItem('liczbaSztuk',1);

        	$('#myAlertKoszyk').show();
				setTimeout(function() {
        		$("#myAlertKoszyk").hide(); // ukrywa element na stronie
    			}, 1000);
        }
    }
    uzupelnijKoszyk();
 }

function uzupelnijKoszyk() {

	//var ilosc = '<select class="form-control form-control-sm" id="ilosc" onchange="koszykOblicz()"><option value="1" selected>1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select>';
	var ilosc = '<input type="number" min="0" class="input-sm col-5" onchange="koszykOblicz()" placeholder=1 value=1>';

	// sprawdzic czy localStorage != null wtedy dodajemy
	if (localStorage.getItem('nazwaTowaru') !== null && localStorage.getItem('cenaBruttoTowaru') !== null) {

		var row = '<tr><td>'  + localStorage.getItem('nazwaTowaru')
				+ '</td><td>' + localStorage.getItem('cenaBruttoTowaru') 
				+ '</td><td>' + ilosc 
				+ '</td></tr>'
	      , $row = $(row),
	      resort = true;
	    $('#myTableKoszyk')
	      .find('tbody').append($row)
	      .trigger('addRows', [$row, resort]);

	    koszykOblicz();
	}
}

function koszykOblicz(){

	var cena, cena_wiersz = 0;

	var cenaCalkowita = document.getElementById('inputCenaKoszyk');
	var opcjaDostawy = parseFloat(document.getElementById('selectOpcjeDostawy').value);	

	var table = document.getElementById('myTableKoszyk');
	var cells = table.getElementsByTagName('td');
	var rows  = table.getElementsByTagName('tr');
	
	// cena 1 elementu: pierwszy wiersz i druga kolumna
	//var cena_brutto = rows[1].cells[1].innerHTML; 
	//console.log("brutto: "+ cena_brutto);

	// ilość 1 elementu: pierwszy wiersz i druga kolumna
	//var ilosc = rows[1].cells[2].querySelector('input').value;
	//console.log("ilosc: "+ ilosc);

	for (var i=1; i<rows.length; i++) {
		cena_wiersz += rows[i].cells[1].innerHTML * rows[i].cells[2].querySelector('input').value;
	}

	cena = cena_wiersz + opcjaDostawy;
	cenaCalkowita.value = cena.toFixed(2);
}

function koszykKup(){
	
	localStorage.clear(); // info z https://kursjs.pl/kurs/storage/storage.php
	$.tablesorter.clearTableBody( $('#myTableKoszyk') ); // usuwa zawartość tabeli bez nagłówków kolumn
	$('#myModalKoszyk').modal('hide');
	$('#myToastr').toast('show');
}













