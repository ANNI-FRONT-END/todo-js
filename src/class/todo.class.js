export class Todo {
    
    static fromJason ({id, tarea,completado, creado}){
        const temTodo = new Todo(tarea);

        temTodo.id         = id;
        temTodo.completado = completado;
        temTodo.creado     = creado;

        return temTodo;

    }

    constructor(tarea){

        this.tarea = tarea;
        this.id         = new Date().getTime(); //215464684 hora milisegundos
        this.completado = false;
        this.creado     = new Date ();
    }

    imprimirClase () {
        console.log(`${this.tarea} - ${this.id}`);
    }
 }