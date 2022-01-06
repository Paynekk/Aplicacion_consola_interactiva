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

const pausa = async () => {
    const question = [
        {
            type: 'input',
            name: 'opcion',
            message: `Presione ${'ENTER'.green} para continuar`,
        }
    ]
   const re = await inquirer.prompt(question);
   return re;  
}

const inquirerMenu = async () => {
    console.log('\n= ====================== ='.green);
    console.log('  Seleccione una opcion'.white);
    console.log('= ====================== =\n'.green)

    const { opcion } = await inquirer.prompt(preguntas);

    return opcion;
}

const leerImput = async (message) => {
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
    const {desc} = await inquirer.prompt(question);
    return desc;

}


module.exports = {
    inquirerMenu,
    pausa,
    leerImput
}