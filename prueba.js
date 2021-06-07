var multi = [[1, 2, 3], [23, 24, 25]];
var de = multi.length;
for (var index = 0; index < de; index++) {
    for (var index1 = 0; index1 < multi[index].length; index1++) {
        console.log(multi[index][index1]);
    }
}
function algoritmoFloy() {
    var mAdy = [[1, 2, 3], [23, 24, 25]];
    var vertices = mAdy.length;
    var matrizAdyaciencia;
    var caminos = [[vertices.toString()], [vertices.toString()]];
    var caminosAuxiliares = [[vertices.toString()], [vertices.toString()]];
    var caminoRecorrido = "", cadena = "", caminitos = "", df;
    var i, j, k;
    var temporal1, temporal2, temporal3, temporal4, minimo;
    for (i = 0; i < vertices; i++) {
        for (j = 0; j < mAdy[i].length; j++) {
            console.log(caminos[i][j]);
            console.log(caminosAuxiliares[i][j]);
            caminos[i][j] = "";
            caminosAuxiliares[i][j] = "";
        }
    }
}
