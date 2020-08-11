//Procurar o botão
document.querySelector('#add-time').addEventListener('click', cloneField)
//Quando clicar no botão
document.querySelector('#remove-time').addEventListener('click', removeField)


//Executar a ação
function cloneField(){
    // Duplicar os campos
    // node = refere-se ao HTML
    // true pra pegar todo o conteúdo dentro do conteúdo
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    const fields = newFieldContainer.querySelectorAll('input')
    
    var e = document.querySelector('#schedule-items').lastChild
    count = countChilds()

    if (count > 1){ //verifica se tem mais de um campo
        lastFields = e.querySelectorAll('input')
        if(lastFields[0].value == ""){
            //se houver um novo campo e estiver vazio, não deixa criar novo campo
        }else{ //se o campo estiver preenchido, permite que seja criado novo
            fields.forEach(function(field){
                //pegar o field do momento e o limpa
                field.value=""
            })
                //Colocar na página. Onde colocar?
            document.querySelector('#schedule-items').appendChild(newFieldContainer)
        }
    }else{ //se houver apenas 1, faz a verificação normal do 1o campo!
        fields.forEach(function(field){
            //pegar o field do momento e o limpa
            field.value=""
        })
            //Colocar na página. Onde colocar?
        document.querySelector('#schedule-items').appendChild(newFieldContainer)
        }
}

function removeField(){
    var e = document.querySelector('#schedule-items').lastChild
    count = countChilds();

    if (count > 1){
        e.parentNode.removeChild(e)
    }
} 


function countChilds(){
    var count = document.querySelectorAll('.schedule-item').length
    return count
}