
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


//se por acaso quiser dentro de u array é só usar essa parte:

// while(i <= coluna){
//     let arvore = [];
//     let qtd = i -1;
//     let metade =  coluna - i;
//     let estrela = '*'.repeat(i);
//     let outraEstrela = '*'.repeat(qtd);
//     let outroEspaco = ''.repeat(qtd);
//     let espaco =  ' '.repeat(metade);
//     let tudo = espaco + estrela + outraEstrela + espaco;
//     arvore.push(tudo)
//     console.log(arvore)
//     i++
//      //console.log(i++)
// }
