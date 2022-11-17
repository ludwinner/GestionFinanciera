## Objetivos de La prueba
Consiste en renderizar la información de ambos array en las tablas tal cual se muestra en las imágenes.

1. El array corresponde a la primera tabla `Estadístico Pre-Solicitud` y tiene 3 agrupamientos jerárquicos. 
El primer agrupamiento es por Zona (campo `NombreZona`) el segundo es por tipo de equipo (campo `EsMiniEmprendedor` si está en 0 corresponde a `Equipos Propios` y si está en 1 corresponde a `Micro Emprendedores`) y el tercero y último es el agrupamiento por supervisor (campo `NomSucursal`). 

## Nombre en tabla   Nombre del campo en array
Vendedor	    -->  NomVendedor
Fecha Alta	    -->  FechaAltaVendedor
Fecha Baja	    -->  FechaBajaVendedor
Ingresadas	    -->  Ingresadas
Ventas MP	    -->  VentasMP
Cruce Scoring	-->  Crucescoring
Objetivo	    -->  Objetivo
Producción	    -->  Produccion
2	            -->  C2
4	            -->  C4 
5	            -->  C5
6	            -->  C6
7	            -->  C7
SUBTOTAL	
3	            -->  C3
8	            -->  C8
9	            -->  C9
SUBTOTAL	
Anulada 3 + 7	-->  AnuladaTresYSiete
Anulada Rechazada -->	AnuladaRechazada
-1	            -->  MesAnt
-2	            -->  MesAnt2
-3	            -->  MesAnt3
PROM	
GB	

La primer columna SUBTOTAL refiere al resultado de la suma entre los siguientes campos: C2 + C4 + C5 + C6 + C7, la segunda refiere al resultado de la suma entre los campos: C3 + C8 + C9, la columna PROM refiere al promedio entre los campos: MesAnt, MesAnt2 y MesAnt3 y, por último, la columna GB refiere al resultado de la suma entre los campos Producción y Cruce Scoring.

Las mismas a su vez tienen un agrupamiento superior: desde vendedor a producción no lleva título, desde C2 hasta Anulada Rechazada es `Clasificaciones Pendientes` y de -1 a PROM es `Meses Anteriores`

Debajo de cada agrupamiento por supervisor debe haber una fila que calcule su total (imagen 7). Lo mismo debe ocurrir con el agrupamiento por tipo equipo (imagen 7 y 8) y también, por debajo, con el agrupamiento por zona. Por último, por debajo de toda la tabla, debe haber una fila con el total entre las 2 zonas (Buenos Aires y Mar del Plata) (imagen 9).

2. El segundo array corresponde a la información de los detalles de Ingresadas y deberíamos poder acceder a la tabla haciendo click en cualquiera de los subtotales (párrafo anterior)(imagen 4) de la columna de Ingresadas. 

- Los campos a renderizar son:

## Nombre en tabla   Nombre del campo en array
Fecha Alta	     --> Fecha
Solicitud	     --> Solicitud
Cliente	         --> Cliente
Vendedor	     --> NomVendedor
Modelo	         --> Vehiculo
Tipo Plan	     --> codigotipoplan
Importe Total Cuota	--> ImporteCuota
Saldo	         --> Saldo
Fecha Estimada Cancelacion --> FechaCancelacion
Tiene DNI	     --> Dni
Tiene Servicio	 --> Servicio
Tiene Anexos	 --> Anexos
Estado Pre Scoring 	--> EstadoPreScoring
Estado Scoring	 --> EstadoScoring
[vacío]	         --> Clasificacion
Clasificacion	 --> Clasificacion
Tipo Precio	     --> TipoPrecio
Valor del Vehiculo	--> Precio
Debito Automático	--> DebitoAutomatico
Debito Automático Scoring --> DebitoAutomaticoScoring
Fecha Ingreso a Terminal --> FechaIngresoTerminal
Supervisor	        --> NomSupervisor
Mini Emprendedor    --> EsMicro
Oficial Plan Canje  --> NombreOficialPC
	
- En el caso de la columna `Tipo Plan` se renderiza un texto según el valor del campo

## Valor	Lo que debe renderizar
    1   --> 100%
    2	--> 70/30
    3	--> 60/40
    4	--> 75/25
    5	--> 80/20
    6	--> 90/10

- En el caso de las columnas Estado Pre Scoring y Estado Scoring se renderiza lo siguiente según en el valor del campo: 

## Valor	Lo que debe renderizar
    0	--> Pendiente
    2	--> Ok

- Los valores de la columna Clasificación aparecen 2 veces en la tabla, la primera solo lleva el valor real del campo en el array y no tiene título y, la segunda, lleva título y se renderiza lo siguiente según en el valor del campo:    

## Valor	Lo que debe renderizar
    1   --> Produccion
    2   --> Lista para enviar a terminal
    3   --> Seña
    4   --> Pendiente scoring terminal
    5	--> Pendiente scoring terminal con faltante documentación
    6	--> Aprobadas scoring terminal con faltante documentación
    7 	--> Pendiente de Pre Scoring
    8	--> Pre Scoring rechazado
    9	--> Scoring terminal rechazado
    10	--> Seña + Pend. Pre Scoring
    11	--> Rechazadas

Por último, una columna para el botón `Ver Operación` el cual debe estar solo de muestra.
Los detalles también deberían aparecer agrupados por supervisor y debería poder ingresar a los mismos clickeando en cualquier campo subtotal de ingresadas que haya en la primer tabla.

__IMPORTANTE__:Las columnas de ambas tablas están escritas en el mismo orden en el que aparecen en las imágenes. No se deben obviar formatos (como fechas e importes) tal cual aparecen en las imágenes y todos los campos que están presentados en checkbox deben estar igual (se entiende que si el valor es 1 el check debe aparecer marcado mientras que si es 0 debe estar desmarcado (no debería poder marcarse ni desmarcarse por acción del usuario))
