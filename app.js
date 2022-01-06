require('colors');

const inquirer = require('inquirer');
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerImput } = require('./helpers/inquirer')

const Tareas = require('./models/tareas')

const main = async () => {
    let opt = '';
    const tareas = new Tareas();
    const tareasDB = leerDB();

    if(tareasDB){
        tareas.cargarTareas(tareasDB);
    }

    do {
        opt = await inquirerMenu();
        switch (opt) {
            case '1':
                const desc = await leerImput('Descripcion:');
                tareas.crearTarea(desc);
                console.log(desc);
                break;
            case '2':
                console.log(tareas.listadoArr);
                break;
            default:
                break;
        }
        guardarDB(tareas.listadoArr);
        await pausa();
    } while (opt !== '0');
}

main();