import matplotlib.pyplot as plt
import random
import time
random.seed(int(time.time()))

probka = [
# [x1,x2,d]
  [1, 2, 1],
  [2, 3, 1],
  [2, 1, 0],
  [3, 1, 0],
  [1, 2, 1],
  [2, 3, 1],
  [2, 1, 0],
  [3, 1, 0]
] 

# parametry początkowe
w0 = 1 # wejście b - tzw. obciążenie, sygnał, który cały czas jest równy 1 
w1 = random.randint(-1,1) # przedział od -1 do 1
w2 = random.randint(-1,1)
ilosc_epok = 50 # 300
wspolczynnik_uczenia = 0.2 # 0.005 = 0.2
nieprawidłowo_skl = 0
wyswietl_wykres_dla_epoki = 0
size = len(probka)

def mieszanie_pozycji_probek(probka):
  random.shuffle(probka) 
  #print("_!!!_Nowa próbka",probka)


def pokaz_wykres(a,b):

  #wykres dla próbek
  for punkt in probka:
    if punkt[2] == 1:
      color = 'ro'
    if punkt[2] == 0:
      color = 'bo'
    plt.plot(punkt[0],punkt[1], color)
  
  # wykres dla znalezionych punktów prostej separującej
  plt.plot(a,b, color='green')   
  plt.title("Wykres próbek oraz prostej separującej\n0 - blue, 1- red")
  plt.gca().spines['left'].set_position(('data',0)) # zaznaczenie na wykresie osi środkowych (0,0)
  plt.gca().spines['bottom'].set_position(('data',0))

  #plt.show()
   
def prosta_separujaca(w0,w1,w2):

   print("\t\n------ Bieżące wagi:",round(w0,2),round(w1,2),round(w2,2),"------") 
   #funkcja round zaokrągla liczbę do ,2 miejsc po przecinku
   punkt_x2_dla_x1_0 = -(w1/w2)*0 - (w0/w2)
   punkt_x2_dla_x1_1 = -(w1/w2)*1 - (w0/w2)
   print("wsp. punktów: ( 0 ;",round(punkt_x2_dla_x1_0,2),") | ( 1 ;",round(punkt_x2_dla_x1_1,2),")")

   punkt_osx = [0, 1]
   punkt_oxy = [punkt_x2_dla_x1_0,punkt_x2_dla_x1_1]

   #print("WYKRES:",wyswietl_wykres_dla_epoki : pierwszej i ostatniej)
   if wyswietl_wykres_dla_epoki == 0:
      pokaz_wykres(punkt_osx,punkt_oxy)
   if wyswietl_wykres_dla_epoki == ilosc_epok - 1:
      pokaz_wykres(punkt_osx,punkt_oxy)


def regula_DELTY_wagi(x1,x2,blad):

   global w0
   global w1
   global w2
   w0 = w0 + (wspolczynnik_uczenia * blad * 1) # * w0 czyli b = 1
   w1 = w1 + (wspolczynnik_uczenia * blad * x1)
   w2 = w2 + (wspolczynnik_uczenia * blad * x2)
   #print("\tNowe wagi:",round(w0,2),round(w1,2),round(w2,2))

   prosta_separujaca(w0,w1,w2)


def regula_DELTY(x1,x2,d,w0,w1,w2):

   global nieprawidłowo_skl
   y = w0 + (w1*x1) + (w2*x2) # obliczamy wyjscie y dla nauronu (danej probki)
   blad = d - y # obliczamy błąd

   if blad != 0 :
       print("Próbka nieprawidłowo sklasyfikowana: ",x1, x2,d," |",
             round(w0,2),round(w1,2),round(w2,2)," y = ", round(y,2)," blad = ", blad)
       nieprawidłowo_skl += 1
       mieszanie_pozycji_probek(probka)
       regula_DELTY_wagi(x1,x2,blad)
 

#--------------------------------------
# nanosimy punkty na wykres
# dla wag poczatkowych wyznaczamy prostą separującą i nanosimy ją na wykres
prosta_separujaca(w0,w1,w2)

# zaczynamy uczenie
for j in range(ilosc_epok):
   for i in range(size):
      wyswietl_wykres_dla_epoki = j
      #print("epoka:",j,"Uczymy: ",probka[i][0],probka[i][1],probka[i][2],"|",round(w0,2),round(w1,2),round(w2,2))
      regula_DELTY(probka[i][0],probka[i][1],probka[i][2],w0,w1,w2)
      # przekazujemy do funkcji regulaDELTY(x1,x1,d,w0,w1,w2)
   
   print("epoka nr:",j, "- nieprawidłowo_skl. próbki:",nieprawidłowo_skl)
   
   if nieprawidłowo_skl == 0:
      print("Znaleziono pierwszą poprawnie skalsyfikowaną epokę nr",j)
      break 

   nieprawidłowo_skl = 0

plt.show()
