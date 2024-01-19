let valores = [4, 2, 8, 3, 9, 0]
/*
for (let pos = 0; pos <valores.length; pos++){
    console.log(`A posiçāo ${pos} tem o valor ${valores[pos]}`) 
}
*/

for (let pos in valores){
    console.log(`A posicao ${pos} tem o valor ${valores[pos]}`)
}