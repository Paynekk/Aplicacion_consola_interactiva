require('colors');
const inquirer = require('inquirer')

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Selecciona una tarea',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Crear tareas`
            },
            {
                value: '2',
                name: `${'2.'.green} Listar tareas`
            },
            {
                value: '3',
                name: `${'3.'.green} Listar tareas completads`
            },
            {
                value: '4',
                name: `${'4.'.green} Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${'5.'.green} Completar tareas`
            },
            {
                value: '6',
                name: `${'6.'.green} Borrar tarea`
            },
            {
                value: '0',
                name: `${'0.'.green} Salir`
            },
        ]
    }
];

//pausa la consola #inquirer
const pausa = async () => {
    const question = [
        {
            type: 'input',
            name: 'opcion',
            message: `Presione ${'ENTER'.green} para continuar`,
        }
    ]
    const {opcion} = await inquirer.prompt(question);
    return opcion;
}

//confirmacion por consola #inquirer
const confirmar = async (message) => {
    const question = [
        {
            type: 'confirm',
            name: 'opcion',
            message,
        }
    ]
    const { opcion } = await inquirer.prompt(question);
    return opcion
}

//Muestra el menu de preguntas #inquirer
const inquirerMenu = async () => {
    console.log('\n= ====================== ='.green);
    console.log('  Seleccione una opcion'.white);
    console.log('= ====================== =\n'.green)

    const { opcion } = await inquirer.prompt(preguntas);

    return opcion;
}

//funcion para elegir una tarea #inquirer
const elegirTarea = async (tareas = []) => {
    let index = 0;
    choices = tareas.map(tarea => {
        index++;
        return {
            value: tarea.id,
            name: `${index}`.green + ` ${tarea.desc}`,
        }
    });

    choices.unshift({
        value: 0,
        name: 'Cancelar'
    });

    const listaTareas = [
        {
            type: 'list',
            name: 'id',
            message: 'Selecciona una tarea',
            choices
        }
    ]
    const { id } = await inquirer.prompt(listaTareas);

    return id;
}

// tareas en modo checklist por consola #inquirer
const tareasCheck = async (tareas = []) => {
    let index = 0;
    choices = tareas.map(tarea => {
        index++;
        return {
            value: tarea.id,
            name: `${index}`.green + ` ${tarea.desc}`,
            checked: tarea.completadoEn ? true : false,
        }
    });

    choices.unshift({
        value: 0,
        name: 'Cancelar'
    });

    const listaTareas = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Seleccionar',
            choices
        }
    ]
    const { ids } = await inquirer.prompt(listaTareas);

    return ids;
}

// lee el Input por consola #inquirer
const leerInput = async (message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if (value.length === 0) {
                    return "Porfavor ingresa un valor";
                }
                return true;
            }
        }
    ]
    const { desc } = await inquirer.prompt(question);
    return desc;
}


module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    elegirTarea,
    confirmar,
    tareasCheck
}