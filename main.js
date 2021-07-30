function verificador(){
    let data = new Date();
    let ano = data.getFullYear();
    let fano = document.getElementById('txtano');
    let resp = document.getElementById('res');

    if (fano.value.length == 0 || fano.value >= ano ){
        alert("[ERRO:] Verifique os dados e tente novamente!");
    } else {
        
        let fsex = document.getElementsByName('radsex');
        let idade =  ano - fano.value;
        let genero = '';
        let img = document.createElement('img');
        img.setAttribute('id', 'foto');
        
        if (fsex[0].checked){
            genero = 'Homem';

            if(idade >= 0 && idade < 11){
                // criança
                img.src = './img/menino.png'
            } else if(idade < 21){
                // jovem
                img.src = './img/jovem-m.png'
            } else if ( idade < 60){
                // adulto
                img.src = './img/adulto-m.png'
            } else{
                //idoso
                img.src = './img/idoso.png'
            }

        }else if(fsex[1].checked){
            genero = 'Mulher';
            
            if(idade >= 0 && idade < 11){
                // criança
                img.src = './img/menina.png'
            } else if(idade  < 21){
                // Jovem
                img.src = './img/jovem-f.png'
            } else if(idade < 60){
                // Adulto
                img.src = './img/adulto-f.png'
            } else {
                // idoso
                img.src = './img/idosa.png'
            }
        }
        
        resp.innerHTML = `Detectado ${genero} com ${idade} anos!`;
        resp.appendChild(img);
    }

}