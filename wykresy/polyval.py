import matplotlib.pyplot as plt
from numpy import *

x = [ 0, 1, 2, 5 ]
y = [ 3, -2, 0, 1 ]

pl = polyfit(x,y,1)

plt.plot(x,y,'o')
plt.plot(x,polyval(pl,x),'r-')
plt.show()
