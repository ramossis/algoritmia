var multi:number[][] = [[1,2,3],[23,24,25]]  
var de:number=multi.length;
for (var index = 0; index < de; index++) {
    for (var index1 = 0; index1 <multi[index].length; index1++) {
            console.log(multi[index][index1]);
        
    }
    
}

function algoritmoFloy(){
    var mAdy:number[][] = [[1, 2, 3], [23, 24, 25]];
    let vertices:number =mAdy.length;
    let matrizAdyaciencia:number[][];
    let caminos:String[][]=[[vertices.toString()],[vertices.toString()]];
    let caminosAuxiliares:String[][]=[[vertices.toString()],[vertices.toString()]];
    let caminoRecorrido="",cadena="",caminitos="",df:String;
    let i,j,k:number;
    let temporal1,temporal2,temporal3,temporal4,minimo:Number;
    for (i=0;i<mAdy.length;i++) {
        for (j=0;j<mAdy[i].length;j++) {
            caminos[i][j]="";
            caminosAuxiliares[i][j]="";
        }
        
    }

}