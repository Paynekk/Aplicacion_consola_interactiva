const Tarea = require('./tarea')
class Tareas {

    _listado = {};

    get listadoArr() {
        const listado = [];
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        })
        return listado;
    }

    constructor() {
        this._listado = {};
    }

    cargarTareas(tareas = '') {
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        });
    }

    crearTarea(desc = '') {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea
    }

    borrarTarea(id) {
        delete this._listado[id];
    }

    //lista las tareas por su status
    listarTareasByStatus(comp) {
        let listaComp = [];

        this.listadoArr.forEach(tarea => {
            if (comp) {
                if (tarea.completadoEn) {
                    listaComp.push(tarea);
                }
            } else {
                if (!tarea.completadoEn) {
                    listaComp.push(tarea);
                }
            }
        });
        return listaComp;
    }

    //lista las tareas
    listarTareas() {
        let listaComp = [];
        this.listadoArr.forEach(tarea => {
            listaComp.push(tarea);
        });
        return listaComp;
    }

    //actualiza las tareas 
    tareasCompletadas(ids = []) {
        let tareas;
        ids.forEach(id => {
            let date = new Date().toISOString();
            tareas = this._listado[id].completadoEn = date;

        });

        this.listadoArr.forEach(tarea => {
            if (!ids.includes(tarea.id)) {
                this._listado[tarea.id].completadoEn = null;
            }
        })


    }
}

module.exports = Tareas;