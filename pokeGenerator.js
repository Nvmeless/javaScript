class PokeGenerator {


    constructor() {
        console.log("Hello")
        this.display()
    }

    getRandPokeId = () => {
        return Math.floor(Math.random() * 152);
    }

    getPokemon = () => {
        return new Pokemon(this.getRandPokeId(), this.getRandPokeId())
    }


    display = () => {
        document.getElementById("myImg").src = this.getPokemon().link;
        console.log(this.getApi())
    }

    getApi = async () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        let response = await fetch("https://pokeapi.co/api/v2", requestOptions)
            .then(response => response.text())
            .then(result => {
                // console.log({ ability })
                let { ability } = JSON.parse(result);
                console.log(ability)
                return result;
            })
            .catch(error => console.log('error', error));

        return response;
    }
}

class Pokemon {
    idFather = null
    idMother = null
    constructor(idFather, idMother) {
        this.idFather = idFather;
        this.idMother = idMother;
        this.generatePokeLink();
    }


    generatePokeLink = () => {
        this.link = "https://images.alexonsager.net/pokemon/fused/" + this.idFather + "/" + this.idFather + "." + this.idMother + ".png"
    }
}

export default PokeGenerator;