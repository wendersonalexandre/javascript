var idade = 18
console.log(`Voce tem ${idade} anos`)
if (idade < 16 ){
    console.log('Voce nao vota')
 } else if (idade < 18 || idade > 65) {
    console.log('voto opcional')
 } else {
    console.log('voto obrigatorio')
 }