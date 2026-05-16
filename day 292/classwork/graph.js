class Graph {
    constructor(number){
        this.arr = Array.from({ length: number }, () => Array(n).fill(null));
    }

    addEdge(a, b, weight){
        this.arr[a][b] = weight;
        this.arr[b][a] = weight;
    }
    removeEdge(a, b){
        this.arr[a][b] = null;
        this.arr[b][a] = null;
    }
}