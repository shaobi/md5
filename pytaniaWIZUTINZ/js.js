var wylosowaneJuzPytania =  new Array();

function losujPytanie() {

// Pytania i odpowiedzi //

var tab = [ 
 ["1. Co to jest algorytm - cechy i właściwości",
`- skończony, uporządkowany, jasny zbiór czynności, potrzebnych do wykonania zadania
Cechy:
- poprawność: poprawne wyniki
- skończoność: określona liczba kroków 
- jednoznaczność: te same wyniki dla takich samych danych wejściowych 
- sprawność czasowa: szybkość działania i pamięciowa 
- prostota wykonania: operacje powinny być jak najprostsze 
Właściwości:
- złożoność obliczeniowa: ilość potrzebnej pamięci
- złożoność czasowa: liczba potrzebnych operacji  
- efektywność
- zgodność ze specyfikacją
`]

,["2. Porównać́ pojęcia program, algorytm, procedura, funkcja, agent programowy.",
`Program - zaimplementowany algorytm pewnym językiem programowania zrozumiałym dla maszyny, która go wykonuje
Algorytm - skończony, uporządkowany, jasny zbiór czynności, potrzebnych do wykonania zadania
Procedura - część programu, wykonuje operacje, nie zwraca wartości
Funkcja - część programu, wykonuje operacje, zwraca wartości
Agent programowy:
- program pełniący rolę agenta
- oparty na wiedzy
- analizuje otoczenie i oddziałowuje na nie
- zdolny do komunikacji i podejmowania samodzielnych decyzji
`]

,["3. Rodzaje zabezpieczeń́ systemów komputerowych",
`- fizyczne: zamki, blokady, PPOŻ, zabezpieczenia antykradzieżowe, przed otwarciem pokrywy, drzwi, KD do pomieszczeń
- techniczne: szyfrowanie informacji, software, oprogramowanie antywirusowe
- organizacyjne: regulaminy i polityki bezpieczeństwa dla osób korzystających z systemów
- personalne: szkolenia, procedury zatrudnienia i zwalniania, poziom dostępu do informacji
`]

,["4. Urządzenia wejścia i wyjścia",
`- umożliwiają wprowadzanie/wyprowadzanie danych/informacji z/do komputera
- komunikacja komputera ze światem zewnętrznym
We: mysz, klawiatura, mikrofon, skaner
Wy: monitor, drukarka, głośniki
`]

,["5. Scharakteryzować́ architekturę̨ klient – serwer oraz klient-broker-serwer.",
`* Klient-serwer
- z reguły klientów jest wielu, a serwer jest jeden
klient wysyła zapytanie do serwera
serwer przetwarza zapytanie i zwraca wyniki klient wyświetla wyniki

* Klient-broker-serwer
- broker jest pośrednikiem w wymianie danych
otrzymuje zlecenie od klienta, następnie wyszukuje serwer
przekazuje mu zapytanie, po czym odbiera wynik i przekazuje go klientowi
`]

,["6. Wymienić i omówić metody wdrażania systemów informatycznych.",
`- całościowa: porzucenie starego systemu i wdrożnie nowego (wysokie ryzyko, niskie koszty)
- równoległa: jednoczesne przetwarzanie w obydwu systemach (niskie ryzyko, wysokie koszty)
- częściowa: stopniowe wdrażanie modułu po module i elementów systemu
`]

,["7. Scharakteryzować podstawowe modele baz danych.",
`-hierarchiczny: dane zorganizowane w postaci drzewa, rekord zawiera podrekordy
- sieciowy: dane zorganizowane w postaci grafu, związki między rekordami reprezentowane przez wskaźniki
- relacyjny: dane przechowywane w tabelach, PK i FK, wiersz reprezentuje jeden rekord informacji
- obiektowy: dane przyjmują postać obiektów, rekordy i relacje przechowywane są bezpośrednio, bez podziału na wiersze i kolumny
`]

,["8. Czym wyróżnia się rozproszonych system informatycznych od innych.",
`- informacje przetwarzane są na wielu komputerach w różnych lokalizacjach geograficznych.
- przeźroczystość dla użytkownika
`]

,["9. Porównaj metody analizy obiektowej i strukturalnej w projektowaniu systemów informatycznych",
`Obiektowo:
- dane i funkcje łączy się w klasy obiektów i analizuje je łącznie
- dobre w analizowaniu dużych systemów
- składowe takiej analizy (obiekty i klasy) łatwo przenieść koncepcyjnie na obiekty świata rzeczywistego

Strukturalnie:
- dane i funkcje analizuje się oddzielnie
- oddzielne modelowanie danych i procesów
- w wyniku analizy tworzone są hierarchiczne struktury, których elementami są: procesy, dane i związki zachodzące między nimi
`]

,["10. Scharakteryzować standardowy język zapytań do baz danych.",
`SQL Structured Query Language - Strukturalny Język Zapytań do obsługi BD
- deklaratywny charakter
- wysoki poziom abstrakcji
- brak rekurencji

- DML Data Manipulation Language - język manipulacji danymi
INSERT, UPDATE, DELETE

- DDL Data Definition Language - język definicji danych
CREATE, DROP ALTER
`]

,["11. Na czym polega polimorfizm metod w programowaniu obiektowym i po co się go stosuje",
`- używanie tych samych nazw funkcji dla różnych obiektów
- pozwala traktować różne dane w ten sam sposób, np. mamy wiele klas dziedziczących z jednej klasy abstrakcyjnej, dla różnych figur geometrycznych, dla każdej z tych figur możemy policzyć jej pole. W każdej z tych klas definiujemy metodę ObliczPole() i w zależności od typu obiektu, w momencie wywołania tej metody, zostanie wybrana ta właściwa
`]

,["12. Wymienić i scharakteryzować metody testowania oprogramowania.",
`- jednostkowe: najmniejsze elementy programu, np. funkcje, obiekty
- integracyjne: interfejsy wewnętrzne, komunikacja pomiędzy komponentami  
- systemowe: wymagania systemowe zgodne ze specyfikacją
- akceptacyjne: czy spełnia wymagania klienta, gotowość wypuszczenia na rynek
- WHITE BOX: implementacja znana
- BLACK BOX: implementacja nie znana
`]

,["13. Wymienić metody ochrony danych w systemach baz danych.",
` uwierzytelnianie, KD, audyt, szyfrowanie danych
replikacja danych, kopie zapasowe, mechanizm transakcji
ochrona w warstwie aplikacji, walidacja
`]

,["14. Rola sterowników w dostępie do baz danych.",
`- pośredniczy pomiędzy aplikacją a SBD
- tłumaczenie zapytań zadanych przez userów na język zrozumiały dla SBD
`]

,["15. Zarządzanie procesami w systemach operacyjnych.",
`- system operacyjny dostarcza mechanizmy umożliwiające komunikację między procesami oraz synchronizację.
- procesami zarządza PLANISTA (scheduler), który jest odpowiedzialny za rozpoczynanie, wznawianie i kończenie procesów oraz przełączanie kontekstów pomiędzy nimi.
- planowanie procesów polega na wskazaniu procesu, któremu ma być w danej chwili przydzielony procesor. W każdej chwili proces jest w jakimś stanie: nowy, aktywny, czekający, gotowy, zakończony.
- procesy trafiają do kolejki procesów w zależności od stanów i priorytetów
`]

,["16. Co to jest system komputerowy, informacyjny, informatyczny.",
`- system komputerowy: sprzęt i oprogramowanie współdziałające ze sobą
- informacyjny: system, w którym przetwarzane są dane w informacje.
informacje wejściowe w wyjściowe, gromadzenie ich i przesyłanie
- informatyczny: część systemu informacyjnego, wykorzystuje system komputerowy
`]

,["17. Powody tworzenia systemów rozproszonych.",
`- umożliwiają podział zasobów na różne miejsca, lokalizacje
- wzrost: niezawodność, bezawaryjność, moc obliczeniowa, łatwa wymiana danych
- łączenie specjalistycznego sprzętu rozproszonego geograficznie
- otwartość: możliwość rozbudowy
- współbieżność: przetwarzanie wielu zadań jednocześnie
- przeźroczystość dla użytkownika: postrzeganie systemu jako całość, a nie połączone składowe z różnych lokalizacji
`]

,["18. Środowiska programistyczne stosowane do obliczeń inżynierskich.",
`MatLab, MathCad, Mathematica, Octave, Statistica, Scilab
`]

,["19. Rodzaje systemów operacyjnych (klasyfikacja i charakterystyka).",
`Podział ze względu na:
1. Sposób przetwarzania
- interakcyjne: bezpośrednia interakcja z użytkownikiem
- wsadowe: pośrednie, zadanie jest realizowane w czasie wybranym przez system 

2. Liczba wykonywanych programów
- jednozadaniowe: zadania wykonywane jedno po drugim, niedopuszczalne jest rozpoczęcie nowego zadania przed niezakończeniem poprzedniego
- wielozadaniowe: współbieżność zadań / procesów

3. Liczba użytkowników
- system dla jednego użytkownika: brak autoryzacji, ograniczone mechanizmy ochrony
- wielodostępne: system gwarantuje ochronę przed nieupoważnioną ingerencją

4. Jednostki obliczeniowe
- jednoprocesorowe
- wieloprocesorowe
- rozproszone
- klastrowe: wiele indywidualnych systemów sprzężonych razem

5. Inne
- czasu rzeczywistego
- kieszonkowe: urządzenia mobilne
`]

,["20. Podać klasyfikację języków programowania.",
`Podział ze względu na:
1. Paradygmat
- deklaratywne: SQL, Prolog
- imperatywne: maszynowe, C
- obiektowe: C++
- interpretowane: PHP, JS
- funkcyjne
- proceduralne

2. Generacja
1GL: poziom maszynowy, liczby binarne, język procesów
2GL: poziom niski asemblerowy, języki symboliczne
3GL: poziom wysoki, proceduralne, imperatywne
4GL: poziom bardzo wysoki, języki zadaniowe
5GL: języki sztucznej inteligencji, Prolog
`]

,["21. Paradygmaty programowania obiektowego.",
`- abstrakcja: obiekt jest abstrakcyjnym wykonawcą, który może wykonywać pracę, posiada swój zmienialny stan i podejmuje decyzje
- hermetyzacja: enkapsulacja, oddzielenie "co" od "jak", obiekt nie może zmienić stanu innych obiektów w nieokreślony sposób
- polimorfizm: wielopostaciowość, używanie tych samych nazw funkcji dla różnych obiektów, pozwala traktować różne dane w ten sam sposób, np. mamy wiele klas dziedziczących z jednej klasy abstrakcyjnej, dla różnych figur geometrycznych,
- dziedziczenie: kompozycja, tworzenie hierarchii klas, obiektów
`]

,["22. Zadania systemu zarządzania bazami danych (DBMS).",
`- realizowanie zapytań do BD
- kontrola dostępu i autoryzacja
- zabezpieczenia przed awariami
- obsługa transakcji
- modyfikowanie, tworzenie, usuwanie
- kontrola redundancji danych
`]

,["23. Topologie sieci komputerowych.",
`1. Logiczna : jak urządzenia widzą się w sieci
2. Fizyczna: fizyczne połączenia urządzeń
- magistrali: szyny, linii, połączone jednym wspólnym medium
- pierścienia: urządzenia połączone tylko z dwoma sąsiadami
- gwiazdy i rozszerzonej gwiazdy: jeden punkt centralny
- siatki: każdy z każdym
- hierarchiczna: kombinacja gwiazdy i magistrali
`]

,["24. Podstawowe składniki sprzętowe w sieciach komputerowych.",
`urządzenia transmisji tzw. kable
terminal i serwer
karta sieciowa
modem
ruter
switch
hub
`]

,["25. Zastosowania mikroprocesorów.",
`- stosowane do sterowania urządzeniami i wykonywania obliczeń
- elektronika przemysłowa
- telekomunikacja: modemy, switche
- roboty
- samochody
- medycyna
- automatyka budynków
- aparatura pomiarowa
- RTV, AGD
`]

,["26. Metody kompresji danych.",
`- Bezstratna: z postaci skompresowanej można odzyskać postać pierwotną, np. ZIP, RAR
- Stratna: nie można odzyskać postaci pierwotnej jednak główne właściwości zostają zachowane, np. muzyka i obraz JPG
`]

,["27. Sprzętowe środki przyspieszania obliczeń.",
`- wykorzystanie wielu rdzeni procesora / wielu procesorów
- obliczenia na karcie graficznej
- systemy rozproszone i klastrowe
- CACHE wykorzystanie pamięci szybkiego dostępu
- procesory specjalizowane i rozproszone
`]

,["28. Klasyfikacja usług internetowych.",
`- typu klient-serwer: WWW, e-mail, POP3, SMTP
- strumieniowanie: audio i video
- konwersacyjne: VOIP, tele i wideokonferencje, gry sieciowe
- związane z utrzymaniem sieci: DNS: SSH (terminale)
`]

,["29. Budowa procesora (CPU).",
`- fizyczna: płytka krzemowa + tranzystory (umożliwiają przepływ prądu)
- logiczna: 
ALU jednostka arytmetyczno-logiczna
Rejestry ogólnego przeznaczenia i specializowane do przechowywanie wyników obliczeń
Magistrale: wewnętrzne szyny łączące np. danych, adresowa, sterująca
`]

,["30. Technologie tworzenia stron internetowych.",
`języki: HTML CSS JS PHP Plash JQuery Java
CMS: Wordpress Joomla! BS
`]

,["31. Czym różnią się portal i wortal internetowy.",
`Portal: wielotematyczny serwis informacyjny np. Onet, WP
Wortal: jednotematyczny, specjalizowany z jednej dziedziny
`]

,["32. Przetwarzanie rozproszone – charakterystyka.",
`- informacje przetwarzane równocześnie przez wiele komputerów oddalonych geograficznie
- szczególny przypadek przetwarzania równoległego
- informacje przekazywane między sobą sporadycznie
- duża wydajność, skalowalność i niezawodność
`]

,["33. Przetwarzanie równoległe – charakterystyka.",
`- informacje przetwarzane równolegle przez jeden lub więcej komputerów
- wykonywanie kilku czynności przez różne procesory w tym samym czasie`]

,["34. Grafika rastrowa a grafika wektorowa.",
`Rastrowa
- obraz jako zbiór / macierz pikseli
- dwuwymiarowa tablica

Wektorowa
- obraz jako zbiór figur geometrycznych
- układ współrzędnych i wierzchołki
`]

,["35. Porównanie modeli odniesienia: ISO/OSI oraz TCP/IP.",
`Podobieństwa: 
- budowa warstwowa
- mają wspólne: w. aplikacji, sieciową i transportową

ISO/OSI - model odniesienia
1. aplikacji
2. prezentacji
3. sesji
4. transportowa
5. sieciowa
6. łącza danych
7. fizyczna

TCP/IP - model protokołów
1. aplikacji
2. transportowa
3. internetowa
4. dostępu do sieci
`]

,["36. Zadania warstwy transportowej.",
`- zapewnienie szybkiego, efektywnego i niezawodnego przesyłania danych
- ustanawianie, wznawianie, kończenie połączenia
- retransmisja danych i zagubionych pakietów
- protokoły TCP i UDP
- buforowanie i sterowanie przepływem
- warstwa 4 modelu ISO/OSI
`]

,["37. Charakterystyka warstwy fizycznej.",
`- opisuje fizyczne połączenia w sieci
- transmituje i odbiera strumienie bitów
- nie obsługuje sprawdzania poprawności danych
- warstwa 7 modelu ISO/OSI
`]

,["38. Charakterystyka warstwy łącza danych.",
`- zapewnia warstwom górnym dostęp do medium transmisyjnego
- nadzoruje jakość przekazywanych informacji
- eliminuje zakłócenia powstające podczas transmisji
- warstwa 6 modelu ISO/OSI
`]

,["39. Do czego służy protokół TCP, a do czego IP?",
`TCP Transport Control Protocol
- protokół kontroli transmisji
- dostarczenie wszystkich pakietów w całości, z zachowaniem kolejności i bez duplikatów

IP Internet Protocol
- protokół internetowy
- ustala adresy i trasy
- określa sposób przesyłania danych
`]

,["40. Rodzaje światłowodów - wady, zalety.",
`- jednomodowy: bardzo drogi, duże odległości, trudny w obsłudze, mała średnica
- wielomodowy: drogi, średnie odległości, duża średnica
- szklany: duże odległości i prędkości
- plastikowy: tani, małe odległości i prędkości
- krzemiankowy: nieznacznie lepszy od plastikowego
`]

,["41. Scharakteryzować sieciowe systemy plików.",
`- umożliwiają dostęp do danych komputerom zdalnym
- dane znajdują się na serwerach
Cechy:
- przeźroczystość dostępu: dostęp taki sam jak do plików lokalnych
- przeźroczystość lokalizacji: nawa pliku jej nie określa
- przeźroczystość współbieżności: system plików jest taki sam dla wszystkich klientów
`]

,["42. Wymień i opisz warstwy modelu OSI.",
`ISO/OSI - model odniesienia
1. aplikacji
2. prezentacji
3. sesji
4. transportowa
5. sieciowa
6. łącza danych
7. fizyczna

1. aplikacji - stanowi interfejs pomiędzy oprogramowaniem a pozostałymi warstwami
2. prezentacji - definiuje sposób i format wymiany danych
3. sesji - zarządza przebiegiem komunikacji, otwiera i zamyka sesję, synchronizacja danych
4. transportowa - zapewnienie szybkiego, efektywnego i niezawodnego przesyłania danych
- ustanawianie, wznawianie, kończenie połączenia
- retransmisja danych i zagubionych pakietów
- protokoły TCP i UDP
- buforowanie i sterowanie przepływem
5. sieciowa - określenie trasy transmisji
6. łącza danych - zapewnia warstwom górnym dostęp do medium transmisyjnego
- nadzoruje jakość przekazywanych informacji
- eliminuje zakłócenia powstające podczas transmisji
7. fizyczna - opisuje fizyczne połączenia w sieci
- transmituje i odbiera strumienie bitów
- nie obsługuje sprawdzania poprawności danych
`]

,["43. Podstawowe cechy standardów sieci bezprzewodowych WiFi.",
`- wykorzystanie komunikacji radiowej do połączeń pomiędzy urządzeniami
- zasięg od kilkunastu metrów do kilku km
- transmisja dwukanałowa o paśmie 2,4 do 5 GHz - przepustowości do 300 Mbps
`]

,["44. Przedstawić budowę światłowodu.",
`- rdzeń: włókno szklane
- płaszcz 
- powłoka lakierowana i wzmacniająca chroniąca płaszcz
- pokrycie, osłona zewnętrzna
`]

,["45. Cechy charakterystyczne cyfrowych sieci ISDN.",
`Integrated Services Digital Network
Cyfrowa Sieć z Integracją Usług
- szybkie i cyfrowe, dwukanałowe zestawianie dwóch połączeń na jednej linii
- gwarantowana przepływność bez względu na odległość
- szeroki zakres usług wideofonii
`]

,["46. Rodzaje i zastosowania macierzy dyskowych.",
`RAID - Redundant Array of Independent Disks
- nadmiarowa Macierz Niezależnych Dysków
- 0 1 01 10 2 3 4 5 6
- zwiększenie: pojemności, wydajności, niezawodności, bezpieczeństwa
- odporność na awarie
`]

,["47. Zasada działania systemów klastrowych.",
`Klaster to grupa połączonych ze sobą jednostek komputerowych w celu udostępnienia zintegrowanego środowiska pracy.
Widziane w sieci LAN jako jeden system przetwarzający dane.
Zazwyczaj jest jeden komputer rozdzielający zadania pozostałym.
Gdy jeden z nich ulegnie awarii , pozostały przejmują jego zadania.
Klastry i ich działanie:
- wydajnościowe: każdy komputer wykonuje obliczenia z dużego zadania obliczeniowego
- niezawodnościowe: dublowanie zadań przez komputery
- równoważenia obciążenia: każdy komputer wykonuje własne zadanie z puli zadań klastra
`]

,["48. Zasada działania systemów ekspertowych.",
`- oparte o bazę wiedzy, a nie o algorytm
- specializowane w wąskim zakresie
- wspomagają podejmowanie decyzji, interpretację danych, prognozę, diagnozę
`]

,["49. Omów zasadę działania monitora (CRT lub LCD).",
`LCD
- zbudowany z macierzy ciekłych kryształów o kolorowych filtrach, do których podłączone są elektrody
- przykładając napięcie zmienia się polaryzacja kryształów, a przez to ich przepuszczanie światła
- z tyłu ekranu montowane jest podświetlenie podkreślające efekt jakości świecenia kryształów

W skrócie: Wykorzystanie zmiany polaryzacji światła na skutek zmian orientacji ciekłego kryształu pod wpływem pola elektrycznego.
`]

,["50. Wymienić i scharakteryzować rodzaje pamięci półprzewodnikowych",
`1. Ulotna RAM Random Access Memory
swobodny dostęp, możliwość odczytu i zapisu, zawartość tracona po zaniku zasilania
- SRAM statyczna: szybka i droga, półprzewodniki
- DRAM dynamiczna: wolna i tania: macierze kondensatorów

2. Nieulotna ROM Read Only Memory
swobodny dostęp, tylko odczyt, zawartość utrzymywana po zaniku zasilania
- ROM tylko odczyt
- PROM Programmable ROM, jednokrotnie programowana przez użytkownika
- EPROM Electricaly PROM, wielokrotnie
- EEPORM Eresable EPROM, kasowanie i programowanie elektryczne
- Flash-ROM pamięć stała, niski koszt produkcji i łatwość programowania
`]

,["51. Przedstaw tablice prawdy AND, OR, XOR, zilustruj oznaczenie bramki, wymień ́przykładowe zastosowanie",
`AND
 x1 x2 y
 0  0  0
 0  1  0
 1  0  0
 1  1  1
- wyjście bramki logiczniej AND jest w stanie wysokim, gdy obydwa wejścia są w stanie wysokim
- podstawowe elementy układów cyfrowych
- np. włączenie alarmu, gdy oba światła są zapalone

OR
 x1 x2 y
 0  0  0
 0  1  1
 1  0  1
 1  1  1

XOR
 x1 x2 y
 0  0  0
 0  1  1
 1  0  1
 1  1  0
 `]

,["52. Wątki a procesy - na podstawie wybranego systemu. Wymienić wady, zalety.",
`LINUX
Proces to program wykonujący się w pamięci operacyjnej.
Wątek to jednostka podwykonawcza procesu.
Wątki tego samego procesu mogą wykonywać różne zadania w tym samym czasie.

Wątki
+ bardziej wydajne i szybciej tworzone
+ wykonują zadania niezależnie
- współdzielą część danych
- wymagają jawnej synchronizacji

Procesy posiadają własne przestrzenie adresowe.
`]

,["53. Budowa typowego układu FPGA.",
`Field Programmable Gate Array
Bezpośrednio Programowalna Macierz Bramek
- zbudowana z programowalnych bloków logicznych CLB Configurable Logic Blocks
- oraz z macierzy połączeń
- bloki CLB to komórki logiczne na które składają się LUT Look Up Table
- na obrzeżach matrycy znajdują się bloki wejścia (kilka) i wyjścia (max 2)
- można programować zarówno bloki logiczne jak i połączenia pomiędzy nimi
`]

,["54. Podstawowe tryby adresowania systemów mikroprocesorowych",
`(: instrukcja zawiera ...)
- natychmiastowe: dane
- bezpośrednie: finalny adres argumentu rozkazu w pamięci operacyjnej i nie podlega przekształceniu
- pośrednie: adres komórki w którym zawarty jest finalny ...
- rejestrowe: numer rejestru
- indeksowe: adres argumentu, który obliczany jest jako suma zawartości rejestru i wartości
`]

,["55. Hierarchia pamięci w systemie komputerowym, stronicowanie oraz koncepcja pamięci wirtualnej",
`- coraz większa pojemność, coraz mniejsza szybkość:
1. rejestry wewnętrzne procesora
2. pamięć podręczna CACHE
3. pamięć operacyjna RAM
4. pamięć wirtualna
5. dyski twarde HDD
6. pamięć zewnętrzna

- stałe i ulotne
- dostęp swobodny, sekwencyjny, cykliczny
- statyczna i dynamiczna

Stronicowanie
- metoda implementacji pamięci wirtualnej
- pamięć dzielona na bloki (strony) o stałej, równej długości
- polega na odwoływaniu się do katalogu stron, który wskazuje na tablicę stron, a ta na fizyczne adresy w pamięci

Pamięć wirtualna
- logiczna przestrzeń adresowa może być większa niż fizyczna
- jeżeli brakuje miejsca w pamięci operacyjnej, to do pamięci podręcznej przerzucane są strony nieużywane
`]

,["56. Omówić strukturę̨ i funkcjonowanie systemu transmisyjnego.",
`Źródło wiadomości -> A/C -> Koder źródła -> Koder kanału -> Modulator -> ukł. wysokiej częstotliwości
Medium transmisyjne / fale w eterze
Odbiorca wiadomości -> C/A -> Dekoder źródła -> Dekoder kanału -> Demodulator -> ukł. wysokiej częstotliwości

źródło wiadomości - generuje wiadomość
koder źródła - kompresuje dane
koder kanału - dodaje dane korekcyjne
modulator - umieszcza sygnał w odpowiednim paśmie częstotliwości
ukł. wysokiej częstotliwości - wzmacnia sygnał
demodulator - odzyskuje sygnał sprzed modulacji
dekoder kanału - sprawdza poprawność danych
dekoder źródła - dekompresuje sygnał
`]

,["57. Różnice między pamięcią statyczną i dynamiczną.",
`SRAM Statyczna
- dane są dostępne, dopóki jest zasilanie
- szybka i droga
- mała pojemność i duży pobór mocy
- brak zegara taktującego
- brak konieczności odświeżania
- 6 tranzystorów

DRAM Dynamiczna
- nie potrzebuje stałego zasilania
- wolna i tania
- duża pojemność i mały pobór mocy
- zegar taktujący
- konieczność odświeżania
- 1 tranzystor
`]

,["58. Problem synchronizacji przy transmisji danych i transmisja asynchroniczna",
`Transmisja synchroniczna
- wymaga by nadajnik i odbiornik miały to samo taktowanie
- każdy pakiet danych poprzedzony danymi synchronizacyjnymi = spowolnienie transmisji

Transmisja asynchroniczna
- nie wymaga synchronizacji
- początek i koniec transmisji ustalany na podstawie znaczników
`]

,["59. Uprawnienia plików na przykładzie systemu operacyjnego Unix/Linux.",
`Nadawanie uprawnień poprzez polecenie chmod dla:
- użytkownicy: właściciel, grupa, reszta
- uprawnienia: r w x odczyt, zapis, wykonywanie
- dla katalogów: r w x przeszukiwanie zawartości, jej zmiana, wejście do katalogu
`]

,["60. Scharakteryzować sieciowe systemy plików.",
`- umożliwiają dostęp do danych komputerom zdalnym
- dane znajdują się na serwerach
Cechy:
- przeźroczystość dostępu: dostęp taki sam jak do plików lokalnych
- przeźroczystość lokalizacji: nawa pliku jej nie określa
- przeźroczystość współbieżności: system plików jest taki sam dla wszystkich klientów
`]

,["61. Co to jest cykl życia oprogramowania i z jakich faz się składa?",
`- proces tworzenia i funkcjonowania oprogramowania
- cykl działań projektowo - programowych od zapotrzebowania po wycofanie

Fazy:
1. określenie wymagań i specyfikacji
2. projektowanie
3. kodowanie i implementacja
4. weryfikacja i testowanie
5. przekazanie i konserwacja
`]

,["62. Wymienić rodzaje diagramów w UML",
`- klas i obiektów: przedstawia struktury aplikacji
- przypadków użycia: funkcjonalności
- sekwencji: interakcja pomiędzy obiektami
- aktywności: sekwencja kroków modelowanego fragmentu systemu
- komponentów: organizacja i zależności pomiędzy komponentami
`]

,["63. Co oznaczają skróty ERD oraz DFD? Do czego się ich używa?",
`ERD Enity Relationship Diagram
- diagram związków encji
- graficzne przedstawienie związków pomiędzy encjami
- używany w projektowaniu systemów

DFD Data Flow Diagram
- diagram przepływu danych
- graficzne przedstawienie kierunku przepływu danych pomiędzy funkcjami i obiektami
`]

,["64. Przeciążanie funkcji i operatorów w języku C++.",
`Przeciążanie funkcji - tworzenie wielu funkcji o tej samej nazwie, ale o innych parametrach we i wy (argumentach)

Przeciążanie operatorów - nadawanie im nowych funkcji + - / * % & =
`]

,["65. Scharakteryzować instrukcje iteracyjne w przykładowym języku programowania",
`Język C: for, while, do while
- for: wykona się określoną ilość razy zdefiniowaną przez użytkownika
- while: dopóki pętla zwraca true
- do while: co najmniej raz, a warunek sprawdzany jest pod koniec pętli
`]

,["66. Omówić na czym polega przeciążanie funkcji i operatorów w języku C++.",
`Przeciążanie funkcji - tworzenie wielu funkcji o tej samej nazwie, ale o innych parametrach we i wy (argumentach)

Przeciążanie operatorów - nadawanie im nowych funkcji + - / * % & =
`]

,["67. Scharakteryzować mechanizmy dostępu do składowych klasy tworzonych statycznie i dynamicznie",
`Język C++
- do statycznych:  nazwa_klasy :: nazwa_składowej
- do dynamicznych: nazwa_klasy -> nazwa_składowej
`]

,["68. Omów pojęcia agregacji i zawierania w diagramach UML.",
`Agregacja
- wyrażenie relacji typu "zawiera" między obiektami, przy czym obiekt podrzędny może istnieć niezależnie
- w UML oznaczana pustym rombem i linią <>--
- np. profesorowie i wydziały: profesor należy do wydziału, ale może też wykładać (istnieć) niezależnie
`]

,["69. Budowa i zasady działania wybranego urządzenia (drukarka laserowa, dysk twardy, pamięć USB, streamer, ect.)",
`Monitor / ekran LCD
- zbudowany z macierzy ciekłych kryształów o kolorowych filtrach, do których podłączone są elektrody
- przykładając napięcie zmienia się polaryzacja kryształów, a przez to ich przepuszczanie światła
- z tyłu ekranu montowane jest podświetlenie podkreślające efekt jakości świecenia kryształów

W skrócie: Wykorzystanie zmiany polaryzacji światła na skutek zmian orientacji ciekłego kryształu pod wpływem pola elektrycznego.
`]

,["70. Metody komunikacji człowiek-komputer.",
`- język poleceń lub komunikacja w języku naturalnym
- formularze, menu i interfejsy multimedialne
- manipulacja obiektami graficznymi
`]

,["71. Wymienić metody ekstrakcji wiedzy z danych.",
`- klasyfikacja i grupowanie
- streszczanie i poszukiwanie współzależności za pomocą technik statystycznych, matematycznych
- rozpoznawanie prawidłowości występujących w danych
- analiza jakościowa, ilościowa
`]

,["72. Co to są drzewa decyzyjne i do czego służą?",
`- reprezentacja wiedzy w postaci drzewiastej struktury
- wizualnie: drzewo, wierzchołki to aktualny stan, a krawędzie pewne decyzje
- np.         doświadczenie
               <5 /   \\ >5
     nie zatrudniać    tak zatrudnić
     `]

,["73. Rekurencja i jej implementacja w językach wysokiego poziomu",
`- sytuacja, w której funkcja wywołuje samą siebie w celu rozwiązania pewnego problemu
- musi posiadać warunek zatrzymania (stopu) inaczej może wpaść w niekończącą się pętle wywołań
- przykład obliczanie silni:

int silnia(int) {
   if (x == 1) return 1;
   return x * silnia(x - 1);
}
`]

,["74. Co to są algorytmy zachłanne – podać przykład takiego algorytmu.",
`- to algorytm wykonujący działanie, które jest w danej chwili najkorzystniejsze bez uwzględnienia tego co może dziać się w przyszłości
- np. problem kasjera i wydawania reszty przy użyciu jak najmniejszej liczby monet
`]

,["75. Na czym polega haszowanie i gdzie ma ono zastosowanie?",
`- metoda szybkiego wyszukiwania w tablicach za pomocą funkcji haszującej
- dla danego zestawu danych tworzy liczbę zwaną haszem, używaną jako indeks w tablicy
- zastosowania: hasła, sumy kontrolne, podpis cyfrowy (skrót z wiadomości), kryptografia i struktury danych

Problemy:
- kolizji: obliczeniowo trudne znalezienie dwóch argumentów o tym samym skrócie
- pseudolosowości: zmiana jednego bitu danych powinna zmienić też skrót
`]

,["76. Co to są problemy obliczeniowo trudne – podać przykład takiego problemu.",
`- jest to problem, dla którego nie istnieje efektywny i szybki algorytm rozwiązania
- np. problem komiwojażera: n-miast + odległości / czas / cena podróży, które ma odwiedzić
cel: znalezienie najtańszej, najkrótszej, najszybszej trasy
rozwiązanie: np. za pomocą grafu
`]

,["77. Maszynowa reprezentacja danych",
`Liczby reprezentowane przez skończoną liczbę bitów tzw. ciąg bitów, reprezentują liczby całkowite:
- bez znaku i ze znakiem
- stało i zmiennoprzecinkowe
- znaki (ASCII lub kodowanie UTF-8, Unicode)
- inne kody: Graya, BCD
`]

,["78. Assembler, interpreter, kompilator – porównać i wyjaśnić pojęcia.",
`Assembler
- język programowania niskiego poziomu 
- tłumaczony bezpośrednio do kodu maszynowego

Interpreter
- program interpretujący, analizujący kod źródłowy i wykonywujący go fragment po fragmencie

Kompilator
- program tłumaczący kod z jednego języka do innego
`]

,["79. Zarządzanie pamięcią w Unix/Linux.",
`W systemie Unix/Linux występują następujące mechanizmy zarządzania pamięcią:
- duża przestrzeń adresowa: wykorzystuje pamięć wirtualną systemu operacyjnego, 
- sprawia wrażenie posiadania znacznie większej ilości pamięci
- kolejkowanie procesów
- stronicowanie: katalog stron -> tablica stron -> fizyczne adresy w pamięci
- dzielona pamięć wirtualna pomiędzy procesami
- alokacja pamięci fizycznej: każdy może posiadać jej kawałek
- mapowanie: zawartość pliku może bezpośrednio włączona w przestrzeń adresową
- wiązanie instrukcji i danych z adresami w pamięci w fazie:
 * kompilacji (statycznie)
 * ładowania (dynamicznie)
 * wykonania (dynamicznie)
 `]

,["80. Zasady korzystanie z kluczy i pakietów kryptograficznych PGP (Pretty Good Privacy)",
`Program GPG generuje parę kluczy asymetrycznych
- publiczny: szyfrowanie i autoryzacja
- prywatny: deszyfrowanie i podpisywanie

Poszczególne podmioty podpisują sobie nawzajem klucze, tworząc sieć indywidualnych kluczy publicznych połączonych ze sobą (Web of Trust)

Zastosowania programu GPG
- podpisywanie, szyfrowanie i deszyfrowanie
- co: wiadomości oraz całe partycje dyskowe
`]

,["81. Metody reprezentacji wiedzy i wnioskowanie.",
`Wnioskowanie
- ustalenie konkluzji na podstawie przesłanek i reguł

Metody reprezentacji wiedzy
- techniki organizowania baz wiedzy
- metody bazujące na bezpośrednim zastosowaniu logiki
- wykorzystujące zapis twierdzeń i reguł (if, then, else)
- używające modeli obliczeniowych
- rachunek zdań i predykatów
`]

,["82. Zasady przetwarzanie transakcji w DBMS.",
`- przetwarzaniem transakcji w DBMS zajmuję się MZT Moduł Zarządzania Transakcjami
- poprawność wykonywania transakcji opiera się o własności określone jako ACID:
A Atomowość : t. odbywa się w całości albo wcale
C Spójność : t. nie naruszają integralności danych
I Izolacja : t. odbywają się bez wiedzy o innych
D Trwałość : wyniki zatwierdzonych t. nie mogą zostać utracone
`]

,["83. Narzędzia i środowiska wytwarzania oprogramowania.",
`środowiska
- to systemy narzędziowe, zbiory narzędzi
- Visual Studio, Qt Creator, Eclipse, XCode

Narzędzia
kompilatory, debuggery, edytory
programy do tworzenia dwiagramów dokumentów i diagramów UML
`]

,["84. Wzorce projektowe i programowe.",
`- wzorce to uznane i sprawdzone sposoby rozwiązania wielokrotnie powtarzającego się problemu
- opisują modelowe roziązanie problemu możliwe do wielokrotnego wykorzystania
- nie jest to gotowa implementacja, lecz jej opis

Rodzaje:
- kreacyjne : tworzenie nowych obiektów i klas
- strukturalne : struktury powiązań pomiędzy obiektami
- behawioralne : opisuje zachowania i interacje
`]

,["85. Metody podnoszenia niezawodności systemów wbudowanych.",
`- najważniejsze to testowanie
- podział zadań na mniejsze podsystemy i ograniczenie złożoności tych zadań
- redudndancja systemów (nadmiarowość)
- stosowanie urządzeń typu watchdog wykrywających błędne działanie systemu i próbujący je naprawić bez udziału człowieka
`]

,["86. Ryzyko i odpowiedzialność związana z systemami informatycznymi",
`- ryzyko to miara zagrożenia wynikającego z prawdopodobieństwa wystąpienia pewnych niekorzystnych zdarzeń
- suma iloczynu prawdopodobieństwa i wag niekorzystnych sytuacji
- za ocenę ryzyka i identyfikacją zagrożeń dla projektów odpowiedzialny jest menager projektu

Ryzyko może być związane z tym, że system informatyczny:
- nie spełni wymogów biznesowych
- nie zapewni odpowiedniej integralności, bezpieczeństwa i dostępności danych
- nie zostanie odpowiedni wdrożony
- nie będzie działać zgodnie z założeniami

Odpowiedzialność można ponieść za (moralną i finansową):
- błędy w oprogramowaniu
- utratę danych i wyciek informacji
- straty finansowe
`]

,["87. Klasyfikacja systemów oprogramowania użytkowego.",
`- biuro : edytory
- grafika
- internet : przeglądarki
- multimedia : odtwarzacze
- narzędzia
`]

,["88. Systemy wspomagające wytwarzanie oprogramowania – klasyfikacja, przykłady, funkcje.",
`- to narzędzia typu CASE Computer Aided Software Engineering
- umożliwiają automatyzację projektowania oraz tworzenia dokumentacji i struktury kodu

Klasyfikacja:
- UPPER CASE: wspomagają pierwsze fazy budowy systemu, analizę i modelowanie logiki biznesowej 
- LOWER CASE: wsp. rzeczywistą budowę oprogramowania, generowanie kodu, testowanie, modelowanie baz danych

Przykłady:
Visual Paradigm, Oracle Designer, Enterprise Architect

Funkcje:
- modelowanie logiki biznesowej
- konstrukcja i projektowanie
- walidacja i weryfikacja
- metryka postępu projektu
- zarządzanie projektem
 `]

,["89. Wymienić i scharakteryzować podstawowe techniki w grafice komputerowej.",
`- przekształcanie obrazów: przekształcanie obrazu w inny obraz
- analiza i roznawanie obrazów: wydobywanie danych z obrazu
- synteza obrazów: tworzenie obrazu na podst. opisu
- przekształcenia: geometryczne, punktowe, widmowe
- postprocesing: efekty nakładane na obraz
- cieniowanie, teksturowanie, oświetlanie
- normalizacja: sprowadzenie wartości obrazu do określonego przedziału
- filtracja: detekcja krawędzi
- wektoryzacja
`]

,["90. Wymienić i scharakteryzować metody przetwarzania obrazów.",
`- operacje na histogramie: rozciąganie, wyrównywanie, zmiana jasności i kontrastu
- operacje geometryczne: przesunięcia, skalowanie, obrót, zmiana położenia pikseli
- operacje arytmetyczno-logiczne: + - * / ^ obrazów
- normalizacja: sprowadzenie wartości obrazu do określonego przedziału
- filtracja: metoda wydobywania z obrazu szeregu informacji w celu dalszej obróbki
- transformacja: kompresja, uwidocznienie cech niewidocznych
- wektoryzacja
`]

,["91. Zasady i metody tworzenia indeksów w bazach danych?",
`Indeks 
- pomocnicza struktura przyspieszająca dostęp do baz danych
- szybkie wyszukiwanie obiektów

Warto indeksować pola po których często następuje wyszukiwanie.

Nie warto indeksować:
- rzadkie odwołania do pola
- pola z kilkoma wartościami unikalnymi
- pola z danymi typu imgage, blob
`]

,["92. Rodzaje i sposób działania przerzutników.",
`Przerzutnik to najprostszy układ sekwencyjny zbudowany z bramek logicznych. Zapamiętuje wartość dzięki sprzężeniom zwrotnym (pętlom).

Asynchroniczne
- zmana na we powoduje bezpośrednio zmiany na wy

- rs : we set i reset nie mogą być zapalone jednocześnie
set zapala a reset zeruje wy
jeżeli oba są na 0 to stan wy jest pamiętany 

- rs zanegowane : tak samo jak rs, tylko we są zanegowane

Synchroniczne
- we zmienia się pod wpływem impulsu zegarowego

- D we przechodzi na wy
- T 1 na we zmienia stan wy na przeciwny
- RS jak rs
- JK jak rs ale mogą być też 1 na we
`]

,["93. Różnica pomiędzy automatem Mealy'ego a automatem Moore'a.",
`Mealy'ego
wy zależne od stanu wewnętrznego i sygnałów wejściowych 

Moore'a
wy zależne wyłącznie od stanu wewnętrznego
`]

,["94. Różnica pomiędzy układami typu PLA a układami PAL.",
`PLA Programmable Logic Array
- programowalna matryca AND i OR
- we i wy jednokierunkowe

PAL Programmable Array Logic
- programowalna matryca AND, matryca OR stała
- we i wy dwukierunkowe
- szybsza i mniejszy pobór prądu
`]

,["95. Wymienić i omówić znanych światowych wynalazców w dziedzinie informatyki i telekomunikacji",
`Farraday - wprowadził pojęcia lini pola elektrycznego i magnetycznego

Thomas Edison - 300 patentów, żarówka, akumulator, udoskonalił telefon Bella

Tesla - podstawy konstrukcji radia, elektrownia wodna, bateria słoneczna, świetlówka

Hetz - odkrył fale elektromagnetyczna

Popow - zajmował się elektromagnetyzmem, skonstruował detektor burz i radio

Morse - alfabet złożony z kresek i kropek
`]

,["96. Omówić sposoby prezentacji informacji oraz pojęcia informacji analogowej i cyfrowej, sygnału analogowego oraz cyfrowego.",
`Informacje mogą być prezentowane w formie akustycznej, optycznej oraz materialnej.

Informacja cyfrowa
- inf. zapisana w postaci cyfrowej, reprezentowana przez ciąg cyfr/danych

Informacja analogowa
- inf. przedst. w postaci sygnału ciągłego

Sygnał analogowy
- jest ciągłu w czasie
- przyjmuje wartości ze zbioru nieskończenie wielu wartości
- fala o określonej częstotliwości, amplitudzie i fazie
- musi być wzmacniany przy przesyle na odległość

Sygnał cyfrowy
- przyjmuje wartości ze skończonego zbioru wartości (ciąg cyfr)
- transmisja sygnału jest bardziej niezawodna na długim dystansie niż analogowa
`]

,["97. Zdefiniować pojęcie widma sygnału oraz omówić numeryczne metody jego obliczania.",
`Widmo sygnału to przedstawienie sygnału w dziedzinie częstotliwości lub pulsacji.
Istnieją dwie podstawowe metody obliczania widma: DFT i FFT.
Discret / Fast Fourier Transporm

FFT
- obliczanie widma na podst. spróbkowanego sygnału algorytmem motylkowym
- problem dzielony jest na równe podproblemy, tak długo aż będzie on problemem prostym do rozwiązania
- wartości zwracane to liczby zespolone

DFT
- obliczana bezpośrednio ze wzoru
`]

,["98. Omówić skalę decybelewą.",
`- opisuje relacje pomiędzy dwoma wielkościami
- jest logarytmiczna: 2dB jest 10 razy większe niż 1dB
- pozwala określić jaki jest stosunek wartości jednego sygnału do drugiego
- wzór: 10 * log10 * (P1/P2)
`]

,["99. Co to jest szerokości pasma oraz przepływności kanału transmisyjnego.",
`Szerokość pasma
- różnica pomiędzy dolną a górną częstotliwością pasma

Przepływność
- zdolnośc kanału do przenoszenia informacji binarnej
- tj. ilość bitów danych na 1 sek. przez konkretne medium transmisyjne
`]

,["100.Omówić zagadnienie modulacji, ze szczególnym uwzględnieniem modulacji cyfrowych",
`Modulacja
- konwersja jednego sygnału na inny poprzez zmianę jego parametrów (amplitudy, częstotliwości, fazy)

Modulacja cyfrowa
- tzw. kluczowanie, to zmiana sygnału analogowego na cyfrowy
- do modulacji cyfrowych należą:
ASK - modulowanie amplitudy fali nośnej kwadratowym sygnałem modulującym
ASK(t) = m(t) * sin(2*pi*f*t)
PSK - to samo dla fazy
FSK - to samo dla częstotliwości
QAM - faza i amplituda
`]

,["104. Wymienić znane media transmisyjne.",
`bezprzewodowe
- fale radiowe i z zakresu podczerwieni

przewodowe
- kable: syntetyczne i niesyntetyczne
koncentryczne i światłowodowe
`]

,["101.Omówić problem uwierzytelniania na przykładach: uwierzytelniania SYK, uwierzytelniania SYH, uwierzytelniania SYA oraz pojęcia hasła, karty magnetycznej, karta elektronicznej, karty identyfikacyjnej SIM oraz omówić techniki biometryczne.",
`SYK stk you know: uwieżytelnianie na podst. tego co użytkownik zna np. PIN

SYH sth you have: user ma np. karta magnetyczna

SYA sth you are: kim user jest np. dane biometryczne

Hasło - ciąg znaczników

Karta elektroniczna - plastikowa karta, nośnik: układ scalony

Karta magnetyczna - plastikowa karta, nośnik: pasek magnetyczny

SIM - wielofunkcyjne karty identyfikacyjne
- wbudowana pamięć i mikroprocesor
- może być programowalna zdanie przez operatora systemu

Techniki biometryczne
- opierają się na fakcie że osoba posiada unikalne charakterystyczne cechy
- odcisk palca
- głos i ruch warg
- rozpoznawanie twarzy
`]

,["102.Formaty danych liczbowych.",
`l. całkowite: bez i ze znakiem, int short long, kod U2

l. zmiennoprzecinkowe: float (pojedyncza precyzja), double (podwójna)

l. Stałoprzecinkowe: określenie ile bitów na część całkowitą, a ile na ułamkową

Ze względu na podstawę systemu liczbowego:
dwójkowy bin, ósemkowy oct, dziesiętny dec, szesnastkowy hex
`]

,["103.Omówić zasady wykonania operacji arytmetycznych w kodzie U2.",
`+ i -
liczby traktujemy jak zwykłe liczby binarne, wynik w kodzie U2

*
2-krotne rozszerzenie liczby i mnożenie bitowe z ignoracją nadmiarowych bitów

/
zmiana liczb na dodatnie i dzielimy je jak liczby naturalne, po podzieleniu przywracamy znak
`]

,["104.Omówić zasady wykonania operacji na liczbach zmiennopozycyjnych.",
`Według standardów IEEE, + - * / wykonywane jest dokładnie, a następnie zaokrąglane do najbliższej cyfry

+ - doprowadzenie do równości wykładników, następnie zaokrąglić i znormalizować

* mnożenie mantys i dodawanie wykładników

/ dzielenie mantys i odejmowanie wykładników

znak | wykładnik | mantysa
 znak * x * 2^e
`]

,["105.Różnice między pamięcią statyczną i dynamiczną.",
`SRAM Statyczna
- dane są dostępne, dopóki jest zasilanie
- szybka i droga
- mała pojemność i duży pobór mocy
- brak zegara taktującego
- brak konieczności odświeżania
- 6 tranzystorów

DRAM Dynamiczna
- nie potrzebuje stałego zasilania
- wolna i tania
- duża pojemność i mały pobór mocy
- zegar taktujący
- konieczność odświeżania
- 1 tranzystor
`]

,["106.Wymienić standardowe postacie wyrażeń boolowskich.",
`- tablica i wektor prawdy
- mapa Karnaugha
- schematy bramkowe
- drzewa i diagramy decyzyjne
- formy normalne:
DNF: suma iloczynów logicznych FDNF
CNF: iloczyn sum logicznych FCNF
`]

,["107.Omówić kombinacyjne i sekwencyjne układy logiczne.",
`ukł. kombinacyjne
- wy zależą tylko od we

ukł. sekwencyjne
- wy zależą od we oraz od stanu poprzedniego (ukł. z pamięcią)
`]

,["108.Scharakteryzować poszczególne etapy procesu konwersji analogowo-cyfrowej.",
`filtrowanie
- np. szumów

próbkowanie
- pobieranie wartości co pewien okres czasu

kwantyzacja
- zaokrąglanie wartości = utrata dokładności

kodowanie
- zmiana sygnału w kod zrozumiały dla urządzenia
`] 

,["109.Omówić ogólną charakterystykę filtrów w cyfrowych.",
`Filtr cyfrowy
- algorytm który przetwarza ciąg próbek wejściowych na ciąg próbek wyjściowych, zgodnie z funkcją przejścia
- przeprowadza operacje na spróbkowanym sygnale prowadzące do redukcji lub uwydatnienia pewnych elementów tego sygnału
- filtrowanie może przebiegać w dziedzinie czasu lub częstotliwości`]

,["110.Opisać proces akwizycji i kodowania danych multimedialnych w kontekście zastosowania ich w systemach transmisji strumieniowej",
`Aktywizacja
- w informatyce i analizie sygnałów pierwszy etap przetwarzania danych polegający na ich przygotowaniu do ich dalszej obróbki czy interpretacji
- obejmuje: przechwytywanie, próbkowanie, kwantowanie danych w dowolnej postaci

Dane multimedialne
- mają zazwyczaj duży rozmiar
- w aplikacji multimedialnej dane te zazwyczaj są kompresowane, transmitowane i prezentowane użytkownikowi
- akwizycja i kodowanie/kompresja są potrzebne do elektywnej transmisji strumieniowej`]

,["111.Wymienić i omówić podstawowe parametry stosowane przy definiowaniu jakości usług",
`Przepustowość
- ilość informacji jaką moża przesłać w jednostce czasu

Opóźnienie
- odstęp czasu pomiędzy wysłaniem a odebraniem pakietu

Zmiana kolejności pakietów
- np. pomiędzy wysyłanymi a odebranymi

Utrata pakietów`]

,["112.Wymienić i omówić podstawowe metody szeregowania pakietów.",
`Kolejki FIFO
- dane dopisywane na koniec kolejki
- w przypadku przeciążenia nowe pakiety mogą zostać odrzucone

Kolejki priorytetowe
- opróżniane są w kolejności od nawyższego priorytetu

Kolejki cykliczne i ważone WFQ
- zapewniają sprawiedliwy podział łącza

Kolejki Round-Robin
- każdy user ma swoją kolejkę i obsługiwani są z jednakową wagą

GPS
- pakiety umieszczane w osobnych kolejkach
`]

,["113.Różnica między standardami JPEG i JPEG2000, rodzaje transformacji obrazu wykorzystywane w kodowaniu obrazów.",
`JPEG2000
- jest bardziej złożony obliczeniowo niż JPEG
- oferuje kompresję stratną, bezstratną i możliwość stopniowego pobierania obrazu zwiększając jego jakość
- potrzebuje dłuższego czasu na przeliczenie danych obrazu
- nowszy standard i lepsza jakość obrazu

Rodzaje transformacji obrazu:
- DCT Dyskretna Transformata Cosinusowa : kompromis pomiędzy stopniem kompresji a złożonością obliczeniową
- DWT Dyskretna Transformata Falkowa : bardzo wysoki stopień kompresji
- DFT Dyskretna Transformata Fouriera
- i inne
`]

,["114.Scharakteryzować kod Graya jako przykład elementu wchodzącego w skład metod cyfrowej modulacji sygnału.",
`- sąsiednie słowa różnią się wartością o 1 bit
- binarny kod stosowany w korekcji błędów np. w modulacji cyfrowej QAM (modulowania faza i amplituda sygnału) lub w kodzie detekcyjnym CRC do wykrywania uszkodzonych ramek/pakietów
- stosowany w sumach kontrolnych, a także w:
* transmisjach w internecie
* urządzeniach komunikujących się radiowo
* macierzach dyskowych RAID do korekcji błędów
`]

,["115.Różnica między kodami detekcyjnymi i korekcyjnymi - przykłady zastosowań.",
`Kody detekcyjne i korekcyjne umożliwiają wykrycie błędów, lecz kody korekcyjne dodatkowo korygują te błędy (wskazują które bity zostały przekłamane).

Zastosowania:
- k. det. jako sumy kontrolne do transmisji internetowej i komunikacji radiowej
- k. det. jako CRC wykrycie uszkodzenia ramek/pakietów w standarcie USB
- k. korekcyjne w macierzach dyskowych RAID do korekcji błędów
`] 

];

	
	// ---- //
	$(".collapse").removeClass("show");

	if (wylosowaneJuzPytania.length == tab.length){ // 116
		alert("Wszystkie 116 pytań zrobione :)");
		wylosowaneJuzPytania.length = 0;
	}
	
	var nrPytania = Math.floor(Math.random() * tab.length);

	while (wylosowaneJuzPytania.includes(nrPytania)) {
		nrPytania = Math.floor(Math.random() * tab.length);
	}

	wylosowaneJuzPytania.push(nrPytania);
	document.getElementById("TrescPytania").innerHTML		= tab[nrPytania][0];
	document.getElementById("TrescOdpowiedzi").innerHTML 	= tab[nrPytania][1].replace(new RegExp('\n','g'), '<br />');
	//console.log(tab);
	//console.log(wylosowaneJuzPytania);

	document.getElementById("Stopka").innerHTML = wylosowaneJuzPytania.length + " / " + tab.length;
}
