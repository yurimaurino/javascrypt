let num = [3, 2, 5, 7, 9]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(6)
if (pos == -1){
    console.log('O valor nao foi encontrado')
}else{
    console.log(`O valor esta na posicao ${pos}`)
}