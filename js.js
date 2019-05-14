
var coluna = 15;
var i = 1;


while(i <= coluna){
    let qtd = i -1;
    let metade =  coluna - i;
    let estrela = '*'.repeat(i);
    let outraEstrela = '*'.repeat(qtd)
    let espaco =  ' '.repeat(metade);
    console.log(espaco + estrela + outraEstrela);
    //console.log(arvore.push(linha))
    i++;
}
