<?php
/*
  EJERCICIO 1: Calcula el resultado de 32+3 y 3(2+3). Escribe el procedimiento
  que empleaste en la sección de discusiones.
*/
$a = 32;
$b = 3;
$a += $b;
echo '<p>' .$a .'</p>';

/*
  EJERCICIO 2: Tomando en cuenta que tenemos una variable llamada $valor,
  escribe en la sección de discusiones ¿Cómo sería un condicional para las
  siguientes opciones?

  - $valor es mayor que 5 pero menor que 10.
  - $valor es mayor o igual a 0 pero menor o igual a 20.
  - $valor es igual a “10” asegurando que el tipo de dato sea cadena.
  - $valor es mayor a 0 pero menor a 5 o es mayor a 10 pero menor a 15.
*/
$valor = 5;
if ($valor > 5 && $valor < 10){
  echo 'valor entre 5 y 10';
}
if ($valor >= 0 && $valor <= 20){
  echo 'valor entre 0 y 20';
}
if ($valor === '10'){
  echo 'el valor es exactamente 10 y es una cadena';
}
if ( ($valor > 0 && $valor <5) || ($valor > 10 && $valor <15) ){
  echo 'el valor está entre 0 y 5 o entre 10 y 15, no lo sabemos';
}

?>
