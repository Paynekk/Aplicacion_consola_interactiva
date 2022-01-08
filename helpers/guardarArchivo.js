const fs = require('fs');
const archivo = './db/data.txt';

// Se guardan los datos en archivo
const guardarDB = (data) => {

    fs.writeFileSync(archivo, JSON.stringify(data));
}

//Se lee el archivo de datos
const leerDB = () => {
    if (!fs.existsSync(archivo)) {
        return null;
    }
    const info = fs.readFileSync(archivo, { encoding: 'utf-8' })
    return JSON.parse(info);
}


module.exports = {
    guardarDB,
    leerDB
}