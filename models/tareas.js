//
//_listado:
//         {'uuid'} : {id: 12, des:23123 , completado:233}
const Tarea = require('./tarea')
class Tareas{

    _listado = {};

    get listadoArr(){
        const listado = [];
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        } )
        return listado;
    }

    constructor(){
        this._listado = {};
    }

    cargarTareas(tareas = ''){
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        });
    }

    crearTarea(desc = ''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea
    }
}


module.exports = Tareas;