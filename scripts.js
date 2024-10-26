const lista = document.querySelector("#lista")
const buttonMostrar = document.querySelector(".mostrarTudo")
const buttonMapear = document.querySelector(".mapear")
const buttonReduce = document.querySelector(".somar")
const buttonFilter = document.querySelector(".filtrar")

function formatarValor(valor) {

    const novoValor = valor.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
    })

    return novoValor
}




function mostrar(array) {

    let meusItens = ""

    array.forEach(produtos => {

        meusItens += `
    <li>
        <img src=${produtos.src}>
        <p>${produtos.name}</p>
        <p>${formatarValor(produtos.price)}</p>
    </li>
    `
    })

    lista.innerHTML = meusItens

}

function mapear() {


    const novosPrecos = menuOptions.map((produtos) => { // colocar ( 

        return { // ou colocar um novo ()

            ...produtos, // spread operator = copiar todoas as infos do array
            price: produtos.price * 0.9,
            name: produtos.name + " - 10% OFF"

        }




    }) // fechar ) aqui , assim nao precisa colocar return

    mostrar(novosPrecos)
    // novosPrecos.forEach( produtos => { // poderia ser feito dessa maneira

    //     meusItens += `
    //     <li>
    //         <img src=${produtos.src}>
    //         <p>${produtos.name}</p>
    //         <p>${produtos.price}</p>
    //     </li>
    //     `
    // })

    // lista.innerHTML = meusItens

}

function somar() {

    const somaProdutos = menuOptions.reduce((acc, curr) => acc + curr.price, 0) // current value

    lista.innerHTML = `
    <li>
        <p>A soma de todos os items do menu é de:<br><br>${formatarValor(somaProdutos)}</p>
    </li>
    `

}

function filtrar() {

    const vegan = menuOptions.filter(produtos => produtos.vegan)

    mostrar(vegan)
}


buttonMostrar.addEventListener("click", () => mostrar(menuOptions)) // passar uma função anônima na frente caso ela receba algum dado,para a função não ser executada assim que abrir o navegador
buttonMapear.addEventListener("click", mapear)
buttonReduce.addEventListener("click", somar)
buttonFilter.addEventListener("click", filtrar)









