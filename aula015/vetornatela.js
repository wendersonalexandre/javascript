let valores =[8,5,6,3,2,1,9]

/*
console.log(valores)

 for(pos=0 ; pos < valores.length ; pos++){
    console.log(`a posição ${pos} tem o valor ${valores[pos]} `)
} */


    for (let pos in valores){
        console.log(`a posição ${pos} tem o valor ${valores[pos]} `)
    }