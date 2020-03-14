const time = {}

time.calcTIME = (req,res) => {
  let dato1 = req.body.dato1.split(':');
  let dato2 = req.body.dato2.split('');

  for (let i = 0; i < dato1.length; i++) {
    if (isNaN(dato1[i])) {
      throw new Error('el campo 1 debe tener solo caracteres numericos');
    }  
  }

  if (isNaN(dato2[1])) {
    throw new Error('campo 2 mal formateado');
  } 

  if(req.body.dato2 == '' || req.body.dato1 == ''){
    throw new Error('los campos estan vacion');
  }
  else if(dato1.length != 3){
    throw new Error('el campo 1 esta tiene un mal formato');
  }
  else if (dato2[0] == '+' || dato2[0] == '-') {
    switch (dato2[0]) {
      case '+' :
        dato1[0] = dato1[0]*1 + dato2[1]*1;
        break;
      case '-' :
        dato1[0] = dato1[0]*1 - dato2[1]*1;
        break;

      default:
        break;
    }
  }
  else{
    throw new Error('el campo 2 esta tiene un mal formato');
  }

  response = {
    "response": { time: dato1[0] + ':' + dato1[1] + ':' + dato1[2], "timezone": "utc" }
  };


    return res.json(response);

}

module.exports = time;
