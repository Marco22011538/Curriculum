class GrafoNoDirigido{
 constructor() {
    this.nodos = new Map()
 }

agregarNodo(nodo) {
    this.nodos.set(nodo, new Set())
}

agregarArista(nodo1, nodo2) {
    if (!this.nodos.has(nodo1) || !this.nodos.has(nodo)) {
        throw new Error("Los nodos no existen en el grafo.")
    }

    this.nodos.get(nodo1).add(nodo2)
    this.nodos.get(nodo2).add(nodo1)
}

tieneArista(nodo1, nodo2) {
    if (!this.nodos.has(nodo)) {
        
    }
}
}