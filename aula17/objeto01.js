let amigo = {nome: 'jose', sexo:'M' , peso: 85.4 , engordar(p){
    console.log('engordou')
    this.peso += p
 }}
 amigo.engordar(4)
 console.log(`${amigo.nome} pesa ${amigo.peso}kg`)