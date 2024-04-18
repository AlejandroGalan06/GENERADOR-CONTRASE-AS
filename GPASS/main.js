let caracteres = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
    'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
    'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',
    'z', 'x', 'c', 'v', 'b', 'n', 'm',
    'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
    'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
    'Z', 'X', 'C', 'V', 'B', 'N', 'M','!','¡', '*','º',
    '.',',','@','#','$','%','=','?','¿'
  ];
  function generar(){
    let contraseñaTotal='';
    console.log('Generando contraseña:');
    for(let i = 0; i < 12; i++){
        contraseñaTotal += caracteres[Math.floor(Math.random() * caracteres.length)];
    }
    document.getElementById('contraseñaGenerada').value = contraseñaTotal;

  }