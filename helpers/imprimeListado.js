require('colors');
// Muestra un datos por consola
const mostrarListado = (tareas) => {
    console.log('\n');
    index = 1;
    tareas.forEach(tarea => {
        tarea.completadoEn
            ? console.log(`${index}.${tarea.desc} :: ${'Completada'.green}`)
            : console.log(`${index}.${tarea.desc} :: ${'Pendiente'.red}`)
            index++;
    });
    console.log('\n');
};

module.exports = {
    mostrarListado
};