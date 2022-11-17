//////////////////////////////////////////////////////////////////////////////
function isEqual(a, b)
{
    if (a instanceof Array && b instanceof Array)
    {
        if (a.length !== b.length) {
            return false;
        }
 
        for (var i = 0; i < a.length; i++)
        {
            if (!isEqual(a[i], b[i])) {
                return false;
            }
        }
 
        return true;
    }
 
    return a === b;
}
function exist(arr,val) {
    for (let i = 0; i < arr.length; i++) {
        if (isEqual(arr[i],val)) {
            return true
        }
    }
    return false
}



////////////////////////////////////////////////////////////////////////////////

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  
  Array.prototype.equals = function (getArray) {
    if (this.length != getArray.length) return false;
  
    for (var i = 0; i < getArray.length; i++) {
      if (this[i] instanceof Array && getArray[i] instanceof Array) {
        if (!this[i].equals(getArray[i])) return false;
      } else if (this[i] != getArray[i]) {
        return false;
      }
    }
    return true;
  };
let cube = [0,1,2,3,4,5,6,7,8]
let resolv=[1,2,3,4,5,0,7,8,6]

function getPosition(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] == 0) {
                return [i,j]
            }
            
        }
     }
}
function mixture() {
    let position = [0,0]
    let movements = document.getElementById('iterations').value 
    let array = [[0,1,2],[3,4,5],[6,7,8]]
    
    let visit = []
    let arrTemp = []
    arrTemp[0] = array[0].slice()
    arrTemp[1] = array[1].slice()
    arrTemp[2] = array[2].slice()
    visit.push(arrTemp)
    let pendingPos = []
    let L,R,T,B
    console.log("*****************************************************************************")
    for (let i = 0; i < movements; i++) {
            
            L = R = T = B = false
            arrTemp = []
            arrTemp[0] = array[0].slice()
            arrTemp[1] = array[1].slice()
            arrTemp[2] = array[2].slice()
            console.log("----------------------------------------------------")
            console.log("Iteration: "+(1+i))
            console.log("aiNIT: "+array)
            let agree = false

           if (position[0]-1 >= 0 ){
                arrTemp = []
                arrTemp[0] = array[0].slice()
                arrTemp[1] = array[1].slice()
                arrTemp[2] = array[2].slice()
                console.log("ATTop: "+arrTemp)
                arrTemp[position[0]][position[1]] =  arrTemp[[position[0]-1]][position[1]]
                arrTemp[[position[0]-1]][position[1]] = 0
                if(!exist(visit,arrTemp)) {
                
                agree = true
                console.log("Top ok: "+arrTemp)
                visit.push(arrTemp)
                pendingPos.push(arrTemp)
                T = true

           }}  
           if (position[0]+1 < array.length) {
                arrTemp = []
                arrTemp[0] = array[0].slice()
                arrTemp[1] = array[1].slice()
                arrTemp[2] = array[2].slice()
                
                console.log("ATButton: "+arrTemp)
                arrTemp[position[0]][position[1]] =  arrTemp[[position[0]+1]][position[1]]
                arrTemp[[position[0]+1]][position[1]] = 0
                if(!exist(visit,arrTemp)){
                agree = true
                console.log("Button ok: "+arrTemp)
                visit.push(arrTemp)
                pendingPos.push(arrTemp)

                }
            }
            if (position[1]-1 >= 0 ) {
                arrTemp = []
                arrTemp[0] = array[0].slice()
                arrTemp[1] = array[1].slice()
                arrTemp[2] = array[2].slice()
                arrTemp[position[0]][position[1]] =  arrTemp[[position[0]]][position[1]-1]
                arrTemp[[position[0]]][position[1]-1] = 0
                if(!exist(visit,arrTemp)){
                    console.log("Left ok: "+arrTemp)
                agree = true
                visit.push(arrTemp)
                pendingPos.push(arrTemp)
                L = true
                }}
            if (position[1]+1 <array.length ) {
                arrTemp = []
                arrTemp[0] = array[0].slice()
                arrTemp[1] = array[1].slice()
                arrTemp[2] = array[2].slice()
                arrTemp[position[0]][position[1]] =  arrTemp[[position[0]]][position[1]+1]
                arrTemp[[position[0]]][position[1]+1] = 0
                if (!exist(visit,arrTemp)) {
                    agree = true
                    console.log("Right ok: "+arrTemp)
                    visit.push(arrTemp)
                    pendingPos.push(arrTemp)
                    R = true
                }
                    
                    }
           if (pendingPos.length >0) {
            
            console.log("Evaluando")
            array[0] = pendingPos[0][0].slice()
            array[1] = pendingPos[0][1].slice()
            array[2] = pendingPos[0][2].slice()
            console.log("array: "+array)
            position = getPosition(array)
            console.log("pos: "+position)
            pendingPos.shift()
            
        }
    }
    console.log("Mescla: "+array)
    let ar = []
    if (iterations == 0) {
        array = [[0,1,2],[3,4,5],[6,7,8]]
    }
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            ar.push(array[i][j])            
        }
    }
    return ar
}
resolv = mixture()



class Solution{
    constructor(Cuad){
        this.cube = Cuad
        this.status = []
        this.breaker = 0
    }
    getIndex0(tempCube){
        let i = 0;
        while (i < tempCube.length) {
            if (tempCube[i]==0) {
                return i
            }
            i++;
        }

    }
    sol(){
        let array = []
        array.push([resolv[0],resolv[1],resolv[2]])
        array.push([resolv[3],resolv[4],resolv[5]])
        array.push([resolv[6],resolv[7],resolv[8]])
        let position = getPosition(array)

        let algoritm = document.getElementById('algoritm').value 
        let maxIterations = document.getElementById('maxIterations').value  
        let visit = []
        let tb = ""
        let arrTemp = []
        arrTemp[0] = array[0].slice()
        arrTemp[1] = array[1].slice()
        arrTemp[2] = array[2].slice()
        visit.push(arrTemp)
        let pendingPos = []
        let L,R,T,B
        let i=0
        pendingPos.push(arrTemp)
        console.log("*****************************************************************************")
        while (true) {
                i++
                L = R = T = B = false
                arrTemp = []
                arrTemp[0] = array[0].slice()
                arrTemp[1] = array[1].slice()
                arrTemp[2] = array[2].slice()
                console.log("----------------------------------------------------")
                console.log("Iteration: "+i)
                console.log("aiNIT: "+array)
                let agree = false
    
               if (position[0]-1 >= 0 ){
                    arrTemp = []
                    arrTemp[0] = array[0].slice()
                    arrTemp[1] = array[1].slice()
                    arrTemp[2] = array[2].slice()
                    console.log("ATTop: "+arrTemp)
                    arrTemp[position[0]][position[1]] =  arrTemp[[position[0]-1]][position[1]]
                    arrTemp[[position[0]-1]][position[1]] = 0
                    if(!exist(visit,arrTemp)) {
                    
                    agree = true
                    console.log("Top ok: "+arrTemp)
                    visit.push(arrTemp)
                    pendingPos.push(arrTemp)
                    T = true
    
               }}  
               if (position[0]+1 < array.length) {
                    arrTemp = []
                    arrTemp[0] = array[0].slice()
                    arrTemp[1] = array[1].slice()
                    arrTemp[2] = array[2].slice()
                    
                    console.log("ATButton: "+arrTemp)
                    arrTemp[position[0]][position[1]] =  arrTemp[[position[0]+1]][position[1]]
                    arrTemp[[position[0]+1]][position[1]] = 0
                    if(!exist(visit,arrTemp)){
                    agree = true
                    console.log("Button ok: "+arrTemp)
                    visit.push(arrTemp)
                    pendingPos.push(arrTemp)
    
                    }
                }
                if (position[1]-1 >= 0 ) {
                    arrTemp = []
                    arrTemp[0] = array[0].slice()
                    arrTemp[1] = array[1].slice()
                    arrTemp[2] = array[2].slice()
                    arrTemp[position[0]][position[1]] =  arrTemp[[position[0]]][position[1]-1]
                    arrTemp[[position[0]]][position[1]-1] = 0
                    if(!exist(visit,arrTemp)){
                        console.log("Left ok: "+arrTemp)
                    agree = true
                    visit.push(arrTemp)
                    pendingPos.push(arrTemp)
                    L = true
                    }}
                if (position[1]+1 <array.length ) {
                    arrTemp = []
                    arrTemp[0] = array[0].slice()
                    arrTemp[1] = array[1].slice()
                    arrTemp[2] = array[2].slice()
                    arrTemp[position[0]][position[1]] =  arrTemp[[position[0]]][position[1]+1]
                    arrTemp[[position[0]]][position[1]+1] = 0
                    if (!exist(visit,arrTemp)) {
                        agree = true
                        console.log("Right ok: "+arrTemp)
                        visit.push(arrTemp)
                        pendingPos.push(arrTemp)
                        R = true
                    }
                        
                        }
                    
               if (pendingPos.length >0) {
                
                console.log("Evaluando")
                let pos = 0
                if (algoritm == "profundidad") {
                    pos = pendingPos.length - 1
                    console.log(pos+" : "+pendingPos[pos])
                }
                array[0] = pendingPos[pos][0].slice()
                array[1] = pendingPos[pos][1].slice()
                array[2] = pendingPos[pos][2].slice()

                console.log("array: "+array)
                position = getPosition(array)
                console.log("pos: "+position)
                if (algoritm == "profundidad")
                    pendingPos.pop()
                else
                    pendingPos.shift()

                tb += "<table class='iteration'>"
                tb += "<tr><th>"+array[0][0]+"</th><th>"+array[0][1]+"</th><th>"+array[0][2]+"</th></tr>"
                tb += "<tr><th>"+array[1][0]+"</th><th>"+array[1][1]+"</th><th>"+array[1][2]+"</th></tr>"
                tb += "<tr><th>"+array[2][0]+"</th><th>"+array[2][1]+"</th><th>"+array[2][2]+"</th></tr>"
                tb += "</table>"
                if (this.isOk(array)) {
                    tb += "<table class='solution'>"
                    tb += "<tr><th>"+array[0][0]+"</th><th>"+array[0][1]+"</th><th>"+array[0][2]+"</th></tr>"
                    tb += "<tr><th>"+array[1][0]+"</th><th>"+array[1][1]+"</th><th>"+array[1][2]+"</th></tr>"
                    tb += "<tr><th>"+array[2][0]+"</th><th>"+array[2][1]+"</th><th>"+array[2][2]+"</th></tr>"
                    tb += "</table>"
                    break
                }
                
            }
            if (i==maxIterations) {
                break
            }
        }
        document.getElementById('search').innerHTML  = tb
        document.getElementById('iter').innerHTML  = "<br><be>Nodos comprobados: "+i
        document.getElementById('size').innerHTML  = "Nodos en memoria: "+pendingPos.length
        
     
    }
    isOk(max){
        if (!max[0].equals([0,1,2])) {
            return false
        }   
        if (!max[1].equals([3,4,5])) {
            return false
        } 
        if (!max[2].equals([6,7,8])) {
            return false
        }   
        return true
    }
    init(){
        let index = this.getIndex0(this.cube)
        let subcube = []
        subcube.push([resolv,index])
        let i=0;
        this.status.push(subcube[0][0])
        let tb = ""
        while (subcube.length>0) {
            index = subcube[0][1]
            tb += "<table class='iteration'>"
            tb += "<tr><th>"+subcube[0][0][0]+"</th><th>"+subcube[0][0][1]+"</th><th>"+subcube[0][0][2]+"</th></tr>"
            tb += "<tr><th>"+subcube[0][0][3]+"</th><th>"+subcube[0][0][4]+"</th><th>"+subcube[0][0][5]+"</th></tr>"
            tb += "<tr><th>"+subcube[0][0][6]+"</th><th>"+subcube[0][0][7]+"</th><th>"+subcube[0][0][8]+"</th></tr>"
            tb += "</table>"

            
            if (subcube[0][0].equals(cube)) {
                tb += "<table class='solution'>"
                tb += "<tr><th>"+subcube[0][0][0]+"</th><th>"+subcube[0][0][1]+"</th><th>"+subcube[0][0][2]+"</th></tr>"
                tb += "<tr><th>"+subcube[0][0][3]+"</th><th>"+subcube[0][0][4]+"</th><th>"+subcube[0][0][5]+"</th></tr>"
                tb += "<tr><th>"+subcube[0][0][6]+"</th><th>"+subcube[0][0][7]+"</th><th>"+subcube[0][0][8]+"</th></tr>"
                tb += "</table>"
                break;
            }
            
            let cubeLeft = subcube
            let cubeDown = subcube
            let cubeRight = subcube
            let cubeHup = subcube
            switch (index) {
                case 0:
    
                    cubeHup = this.reorder(subcube[0][0],0,1)
                    if (!this.comprobe(cubeHup)) 
                        subcube.push([cubeHup,1])
            
                    cubeDown = this.reorder(subcube[0][0],0,3)
                    if (!this.comprobe(cubeDown)) 
                        subcube.push([cubeDown,3])
                    break;
                case 1:
                    cubeHup = this.reorder(subcube[0][0],1,2)
                    if (!this.comprobe(cubeHup)) 
                        subcube.push([cubeHup,2])

                    cubeDown = this.reorder(subcube[0][0],1,0)
                    if (!this.comprobe(cubeDown)) 
                        subcube.push([cubeDown,0])
        
                    cubeLeft = this.reorder(subcube[0][0],1,4)
                    if (!this.comprobe(cubeLeft)) 
                        subcube.push([cubeLeft,4])
                    break;
                case 2:
                    cubeHup = this.reorder(subcube[0][0],2,5)
                    if (!this.comprobe(cubeHup)) 
                        subcube.push([cubeHup,5])
            
                    cubeDown = this.reorder(subcube[0][0],2,1)
                    if (!this.comprobe(cubeDown)) 
                        subcube.push([cubeDown,1])
                    break;
                case 3:
                    cubeHup = this.reorder(subcube[0][0],3,0)
                    if (!this.comprobe(cubeHup)) 
                        subcube.push([cubeHup,0])
            
                    cubeDown = this.reorder(subcube[0][0],3,4)
                    if (!this.comprobe(cubeDown)) 
                        subcube.push([cubeDown,4])
        
                    cubeLeft = this.reorder(subcube[0][0],3,6)
                    if (!this.comprobe(cubeLeft)) 
                        subcube.push([cubeLeft,6])
                    break;
                case 4:
                    cubeHup = this.reorder(subcube[0][0],4,1)
                    if (!this.comprobe(cubeHup)) 
                        subcube.push([cubeHup,1])
        
                    cubeRight = this.reorder(subcube[0][0],4,3)
                    if (!this.comprobe(cubeRight)) 
                        subcube.push([cubeRight,3])
        
                    cubeDown = this.reorder(subcube[0][0],4,7)
                    if (!this.comprobe(cubeDown)) 
                        subcube.push([cubeDown,7])
    
                    cubeLeft = this.reorder(subcube[0][0],4,5)
                    if (!this.comprobe(cubeLeft)) 
                    subcube.push([cubeLeft,5])
                    break;          
                case 5:
                    
                    cubeDown = this.reorder(subcube[0][0],5,8)
                    if (!this.comprobe(cubeDown)) 
                        subcube.push([cubeDown,8])
        
                    cubeHup = this.reorder(subcube[0][0],5,2)
                    if (!this.comprobe(cubeHup)) 
                        subcube.push([cubeHup,2])
        
                    cubeLeft = this.reorder(subcube[0][0],5,4)
                    if (!this.comprobe(cubeLeft)) 
                        subcube.push([cubeLeft,4])
                    break;   
                case 6:
                    cubeHup = this.reorder(subcube[0][0],6,3)
                    if (!this.comprobe(cubeHup)) 
                        subcube.push([cubeHup,3])
            
                    cubeLeft = this.reorder(subcube[0][0],6,7)
                    if (!this.comprobe(cubeLeft)) 
                        subcube.push([cubeLeft,7])
                    break;   
                case 7:
                    cubeHup = this.reorder(subcube[0][0],7,4)
                    if (!this.comprobe(cubeHup)) 
                        subcube.push([cubeHup,4])
                
                    cubeLeft = this.reorder(subcube[0][0],7,6)
                    if (!this.comprobe(cubeLeft)) 
                        subcube.push([cubeLeft,6])
            
                    cubeRight = this.reorder(subcube[0][0],7,8)
                    if (!this.comprobe(cubeRight)) 
                        subcube.push([cubeRight,8])
                    break;   
                case 8:
                    cubeHup = this.reorder(subcube[0][0],8,5)
                    if (!this.comprobe(cubeHup)) 
                        subcube.push([cubeHup,5])
                
                    cubeLeft = this.reorder(subcube[0][0],8,7)
                    if (!this.comprobe(cubeLeft)) 
                        subcube.push([cubeLeft,7])
                    break;   
            }
            
            subcube.shift()
            i++
            if (i==363000) {
                alert("Sin solucion")
                break
            }
        }
        document.getElementById('search').innerHTML  = tb
        
    }
    analice(subcube,indice){
        this.breaker++
        if (this.breaker==20) {
            this.breaker = 0
            return subcube
            
        }
        if (this.comprobe(subcube)) {
            return
        }
        this.status.push(subcube)
        if (subcube.equals(cube)) {
            throw console.error();
        }
        
        
        let cubeLeft = subcube
        let cubeDown = subcube
        let cubeRight = subcube
        let cubeHup = subcube
        switch (indice) {
            case 0:

                cubeHup = this.reorder(subcube,0,1)
                this.analice(cubeHup,1)
        
                cubeDown = this.reorder(subcube,0,3)
                this.analice(cubeDown,3)
                break;
            case 1:
                cubeHup = this.reorder(subcube,1,2)
                this.analice(cubeHup,2)
        
                cubeDown = this.reorder(subcube,1,0)
                this.analice(cubeDown,0)
    
                cubeLeft = this.reorder(subcube,1,4)
                this.analice(cubeLeft,4)
                break;
            case 2:
                cubeHup = this.reorder(subcube,2,5)
                this.analice(cubeHup,5)
        
                cubeDown = this.reorder(subcube,2,1)
                this.analice(cubeDown,1)
                break;
            case 3:
                cubeHup = this.reorder(subcube,3,0)
                this.analice(cubeHup,0)
        
                cubeDown = this.reorder(subcube,3,4)
                this.analice(cubeDown,4)
    
                cubeLeft = this.reorder(subcube,3,6)
                this.analice(cubeLeft,6)
                break;
            case 4:
                cubeHup = this.reorder(subcube,4,1)
                this.analice(cubeHup,1)
    
                cubeRight = this.reorder(subcube,4,3)
                this.analice(cubeRight,3)
    
                cubeDown = this.reorder(subcube,4,7)
                this.analice(cubeDown,7)

                cubeLeft = this.reorder(subcube,4,5)
                this.analice(cubeLeft,5)
                break;          
            case 5:
                cubeDown = this.reorder(subcube,5,8)
                this.analice(cubeDown,8)
    
                cubeHup = this.reorder(subcube,5,2)
                this.analice(cubeHup,2)
    
                cubeLeft = this.reorder(subcube,5,4)
                this.analice(cubeLeft,4)
                break;   
            case 6:
                cubeHup = this.reorder(subcube,6,3)
                this.analice(cubeHup,3)
        
                cubeLeft = this.reorder(subcube,6,7)
                this.analice(cubeLeft,7)
                break;   
            case 7:
                cubeHup = this.reorder(subcube,7,4)
                this.analice(cubeHup,4)
            
                cubeLeft = this.reorder(subcube,7,6)
                this.analice(cubeLeft,6)
        
                cubeRight = this.reorder(subcube,7,8)
                this.analice(cubeRight,8)
                break;   
            case 8:
                cubeHup = this.reorder(subcube,8,5)
                this.analice(cubeHup,5)
            
                cubeLeft = this.reorder(subcube,8,7)
                this.analice(cubeLeft,7)
                break;   
        }

    }
    reorder (cube,init,end){
        var cubeTemp = []
        let i = 0;
        while (i < cube.length) {
            cubeTemp.push(cube[i])
            i++;
        }
        cubeTemp[init] = cubeTemp[end]
        cubeTemp[end] = 0
        return cubeTemp
    }

    comprobe(subcube){
        let i = 0;
        while (i<this.status.length) {
            
            if (subcube .equals(this.status[i])) {
                return true
            }
            i++
        }
        this.status.push(subcube)
        return false;
    }
}

function run() {
    resolv = mixture()
    document.getElementById('initial').innerHTML = '<table id="initial">'+
    '<tr><th>'+resolv[0]+'</th><th>'+resolv[1]+'</th><th>'+resolv[2]+'</th></tr>'+
    '<tr><th>'+resolv[3]+'</th><th>'+resolv[4]+'</th><th>'+resolv[5]+'</th></tr>'+
    '<tr><th>'+resolv[6]+'</th><th>'+resolv[7]+'</th><th>'+resolv[8]+'</th></tr>'+
    '</table>'
    let A = new Solution(resolv)
    A.sol()
}


