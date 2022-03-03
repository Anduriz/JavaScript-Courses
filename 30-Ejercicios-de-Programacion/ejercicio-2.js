
const url = 'https://github.com/fanzeyi/pokemon.json/blob/master/pokedex.json'
const http = new XMLHttpRequest()

http.open("GET", url)
http.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var resultado = JSON.parse(this.responseText)
        console.log(resultado.name)
    }
}
http.send()
