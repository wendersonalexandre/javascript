let num = [5,3,6,7]
num.push(8)
console.log(num)
console.log(`nosso valor é o ${num}`)
console.log(`O vetor tem ${num.length} posiçoes`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(8)
if(pos == -1){
        console.log('O valor não foi encontrado!')
}
else{
    console.log(`O valor esta na posição ${pos}`)
}


