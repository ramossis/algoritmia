var nodos = null;
var aristas = null;

function fo() {
    nodos = document.getElementsByName("nodos")[0].value;
    aristas = document.getElementsByName("aristas")[0].value;

    console.log(nodos, aristas);
};
function algoritmoFloyd(mAdy1,mAdy2){
    var i=0,j=0;
    mAdy=[[mAdy1],[mAdy2]];
    for(i=0;i<mAdy1.length;i++){
        for(j=0;j<mAdy2.length;j++){
            console.log(mAdy[i][j]);
        }
    }
    /*
    console.log(vertices);
    var matrizAdyacencia=mAdy;
    var caminos =[vertices][vertices];
    var caminosAuxiliares=[vertices][vertices];
    */
};