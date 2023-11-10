// Como voce nomeia uma função = verbo ++ substantivo

// sintaxe de função = function resetaCor(){};


let corSite = 'azul';
function resetaCor(cor, tornalidade) {
    corSite = cor + tornalidade;
}

console.log(corSite);
resetaCor('vermlho ', 'escuro');
console.log(corSite);
