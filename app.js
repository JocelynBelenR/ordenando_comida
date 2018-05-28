window.onload = function orden_comida () { //INICIO - FUNCION
    const menu = ("ceviche","tacos_al_pastor","empanada_chilena","hamburguesa"); //VAR MENU
     for (let i = 0; i = menu.length; i++) { //FOR CREA EL BUCLE - LET I DESDE 0 ; I < LONGITUG MENU ; I SUMA 1
      console.log(menu[i]); //MUESTRA MENSAJE EN LA CONSULA
    } // CIERRE FOR   
} // CIERRE FUNCION

/*INSTRUCCIONES
Imagina que estás pidiendo comida en un restaurante. 
Tu plato favorito es ceviche, así que lo elegirías si está en el menú. 
Si no hay ceviche, elegirías tacos al pastor. 
Si eso no está, te irías por empanada chilena. 
En el caso raro que ninguna de esas opciones esté disponible, te irías por una hamburguesa. 
Escribe una función, que de acuerdo a la disponibilidad de los platos en el menú, decidas qué ordenar.*/