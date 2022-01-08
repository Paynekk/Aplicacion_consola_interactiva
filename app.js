require('colors');

const inquirer = require('inquirer');
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { mostrarListado } = require('./helpers/imprimeListado');
const { inquirerMenu, pausa, leerImput, elegirTarea, confirmar, tareasCheck } = require('./helpers/inquirer')

const Tareas = require('./models/tareas')

const main = async () => {
    let opt = '';
    const tareas = new Tareas();
    const tareasDB = leerDB();

    if (tareasDB) {
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
                listaComp = tareas.listarTareas();
                mostrarListado(listaComp);

                break;
            case '3':
                listaComp = tareas.listarTareasByStatus(true);
                mostrarListado(listaComp);

                break;
            case '4':
                listaComp = tareas.listarTareasByStatus(false);
                mostrarListado(listaComp);

                break;
            case '5':
                ids = await tareasCheck(tareas.listadoArr);
                tareas.tareasCompletadas(ids);
                
                break;
            case '6':
                id = await elegirTarea(tareas.listadoArr);
                if (id != 0) {
                    ok = await confirmar();
                    if (ok) {
                        tarea(id);
                    }
                }

                break;
            default:
                break;

        }
        guardarDB(tareas.listadoArr);
        await pausa();

    } while (opt !== '0');
}

main();