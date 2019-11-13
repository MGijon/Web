<?php
/*
  EJERCICIO 1: Escribe el código necesario para generar la cadena final usando
  el arreglo dado.

  $arreglo = [
  	‘keyStr1’ => ‘lado’,
  	0 => ‘ledo’,

  	‘keyStr2’ => ‘lido’,
  	1 => ‘lodo’,
  	2 => ‘ludo’
  ];

  Lado, ledo, lido, lodo, ludo,
  decirlo al revés lo dudo.
  Ludo, lodo, lido, ledo, lado,
  ¡Qué trabajo me ha costado!
*/
$arreglo = [
  ‘keyStr1’ => ‘lado’,
  0 => ‘ledo’,
  ‘keyStr2’ => ‘lido’,
  1 => ‘lodo’,
  2 => ‘ludo’
];

echo $arreglo['keyStr1'] .', ' .$arreglo[0] .', ' .$arreglo['keyStr2'] .', ' .$arreglo[1] .', ' .$arreglo[2] .', ' . '<br>';
echo 'decirlo al revés lo dudo.<br>';
echo $arreglo[2] .', ' .$arreglo[1] .', ' .$arreglo['keyStr2'] .', ' .$arreglo[0] .', ' .$arreglo['keyStr1'] .', ' . '<br>';
echo 'Qué trabajo me ha costado!';

/*
  EJERCICIO 2: Crea un arreglo que contenga como clave los nombres de 5 países
  y como valor otro arreglo con 3 ciudades que pertenezcan a ese país, después
  utiliza un ciclo foreach, para imprimir el nombre del país seguido de las
  ciudades que definiste:

  Ejemplo,

  México: Monterrey Querétaro Guadalajara
  Colombia: Bogota Cartagena Medellin
*/

$arregloEx2 = [
  'Mexico' => [
    'Monterrey',
    'Querétaro',
    'Guadalajara'
  ],
  'Colombia' => [
    'Bogota',
    'Cartagena',
    'Guadalajara'
  ],
  'España' => [
    'Madrid',
    'Zaragoza',
    'Barcelona'
  ]
  // creo 3, es una prueba de concepto, si funciona con 3 funciona con más
];

foreach ($arregloEx2 as $key => $value) {
  echo $pais .':';
  foreach($values as $value){
    echo ' ' .$ciudad;
  }
  echo '<br>';
};
echo '<br>';

/*
  EJERCICIO 3: Escribe el código necesario para encontrar los 3 números más
  grandes y los 3 números más bajos de la siguiente lista:

  $valores = [23, 54, 32, 67, 34, 78, 98, 56, 21, 34, 57, 92, 12, 5, 61];
*/

$valores = [23, 54, 32, 67, 34, 78, 98, 56, 21, 34, 57, 92, 12, 5, 61];

sort($valores);
for ($idx = 1; $idx <3; $idx++){
  echo $valores[$idx] .' ';
};
echo '<br>';
rsort($valores);
for ($idx = 1; $idx <3; $idx++){
  echo $valores[$idx] .' ';
};

?>
