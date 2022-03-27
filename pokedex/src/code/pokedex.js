const fetchPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${document.getElementById("pokeName").value.toLowerCase()}`).then(res => {
        if (res.status != "200") {
            document.getElementById("pokeImg").src = "./src/assets/pikachuMam.jpg";
        }
        else {
            return res.json();
        }
    }).then(data => {
        document.getElementById("pokeImg").src = data.sprites.front_default;
        document.getElementById("namePokemon").innerHTML = data.forms[0].name.toUpperCase();
        document.getElementById("numberPokemon").innerHTML = ("#" + data.id + "-");
        for (let stat of data.stats) {//stat0
            if (stat.base_stat >= 250) {
                for (let i = 0; i < 6; i++) {
                    let blockNum = "blockPS" + toString(i);
                    document.getElementById(blockNum).style.background = 'rgba(238,195,66,255)';
                }
            } else {
                let index = 0;
                switch (stat.stat.name) {
                    case "hp":
                        for (let i = 0; i < stat.base_stat; i += 25) {
                            let blockNum = "blockPS" + String(index);
                            document.getElementById(blockNum).style.backgroundColor = 'DodgerBlue';
                            index++;
                        }
                        index = 0;
                        break;
                    case "attack":
                        for (let i = 0; i < stat.base_stat; i += 50) {
                            let blockNum = "blockATK" + String(index);
                            document.getElementById(blockNum).style.backgroundColor = 'DodgerBlue';
                            index++;
                        }
                        index = 0;
                        break;
                    case "defense":
                        for (let i = 0; i < stat.base_stat; i += 50) {
                            let blockNum = "blockDEF" + String(index);
                            document.getElementById(blockNum).style.backgroundColor = 'DodgerBlue';
                            index++;
                        }
                        index = 0;
                        break;
                    case "special-attack":
                        for (let i = 0; i < stat.base_stat; i += 50) {
                            let blockNum = "blockSPATK" + String(index);
                            document.getElementById(blockNum).style.backgroundColor = 'DodgerBlue';
                            index++;
                        }
                        index = 0;
                        break;
                    case "special-defense":
                        for (let i = 0; i < stat.base_stat; i += 50) {
                            let blockNum = "blockSPDEF" + String(index);
                            document.getElementById(blockNum).style.backgroundColor = 'DodgerBlue';
                            index++;
                        }
                        index = 0;
                        break;
                    case "speed":
                        for (let i = 0; i < stat.base_stat; i += 50) {
                            let blockNum = "blockSpeed" + String(index);
                            document.getElementById(blockNum).style.backgroundColor = 'DodgerBlue';
                            index++;
                        }
                        index = 0;
                        break;
                    default:
                    // code block
                }
            }
        }
        for (let ability of data.abilities) {

            const divName = document.createElement("div");    // <div></div>
            divName.textContent = ability.ability.name + " ";        // <div>NameAbility</div>
            const div = document.querySelector("#franqueza"); // <div id="franqueza"> </div>
            div.insertAdjacentElement("beforeend", divName);
            // Opción 3: <div id="franqueza"><span>NameAbility</span></div>
        }
        switch (data.types[0].type.name) {
            case "bug":
                document.getElementById("tipo").innerHTML = "Bug";
                document.getElementById("tipo").style.background = 'rgba(28,75,39,255)';
                document.getElementById("franqueza").style.background = 'rgba(28,75,39,255)';
                index = 0;
                break;
            case "dark":
                document.getElementById("tipo").innerHTML = "Dark";
                document.getElementById("tipo").style.background = 'rgba(4,7,7,255)';
                document.getElementById("franqueza").style.background = 'rgba(4,7,7,255)';
                break;
            case "dragon":
                document.getElementById("tipo").innerHTML = "Dragon";
                document.getElementById("tipo").style.background = 'rgba(68,138,149,255)';
                document.getElementById("franqueza").style.background = 'rgba(68,138,149,255)';
                break;
            case "electric":
                document.getElementById("tipo").innerHTML = "Electric";
                document.getElementById("tipo").style.background = 'rgba(226,227,43,255)';
                document.getElementById("franqueza").style.background = 'rgba(226,227,43,255)';
                break;
            case "fairy":
                document.getElementById("tipo").innerHTML = "Fairy";
                document.getElementById("tipo").style.background = 'rgba(150,26,69,255)';
                document.getElementById("franqueza").style.background = 'rgba(150,26,69,255)';
                break;
            case "fighting":
                document.getElementById("tipo").innerHTML = "Fighting";
                document.getElementById("tipo").style.background = 'rgba(153,64,37,255)';
                document.getElementById("franqueza").style.background = 'rgba(153,64,37,255)';
                break;
            case "fire":
                document.getElementById("tipo").innerHTML = "Fire";
                document.getElementById("tipo").style.background = 'rgba(171,31,36,255)';
                document.getElementById("franqueza").style.background = 'rgba(171,31,36,255)';
                break;
            case "flying":
                document.getElementById("tipo").innerHTML = "Flying";
                document.getElementById("tipo").style.background = 'rgba(74,103,125,255)';
                document.getElementById("franqueza").style.background = 'rgba(74,103,125,255)';
                break;
            case "ghost":
                document.getElementById("tipo").innerHTML = "Ghost";
                document.getElementById("tipo").style.background = 'rgba(51,51,107,255)';
                document.getElementById("franqueza").style.background = 'rgba(51,51,107,255)';
                break;
            case "grass":
                document.getElementById("tipo").innerHTML = "Grass";
                document.getElementById("tipo").style.background = 'rgba(20,123,61,255)';
                document.getElementById("franqueza").style.background = 'rgba(20,123,61,255)';
                break;
            case "ground":
                document.getElementById("tipo").innerHTML = "Ground";
                document.getElementById("tipo").style.background = 'rgba(168,112,45,255)';
                document.getElementById("franqueza").style.background = 'rgba(168,112,45,255)';
                break;
            case "ice":
                document.getElementById("tipo").innerHTML = "Ice";
                document.getElementById("tipo").style.background = 'rgba(134,210,245,255)';
                document.getElementById("franqueza").style.background = 'rgba(134,210,245,255)';
                break;
            case "normal":
                document.getElementById("tipo").innerHTML = "Normal";
                document.getElementById("tipo").style.background = 'rgba(117,82,92,255)';
                document.getElementById("franqueza").style.background = 'rgba(117,82,92,255)';
                break;
            case "poison":
                document.getElementById("tipo").innerHTML = "Poison";
                document.getElementById("tipo").style.background = 'rgba(94,45,137,255)';
                document.getElementById("franqueza").style.background = 'rgba(94,45,137,255)';
                break;
            case "psychic":
                document.getElementById("tipo").innerHTML = "Psychic";
                document.getElementById("tipo").style.background = 'rgba(165,42,108,255)';
                document.getElementById("franqueza").style.background = 'rgba(165,42,108,255)';
                break;
            case "rock":
                document.getElementById("tipo").innerHTML = "Rock";
                document.getElementById("tipo").style.background = 'rgba(72,25,11,255)';
                document.getElementById("franqueza").style.background = 'rgba(72,25,11,255)';
                break;
            case "steel":
                document.getElementById("tipo").innerHTML = "Steel";
                document.getElementById("tipo").style.background = 'rgba(96,117,110,255)';
                document.getElementById("franqueza").style.background = 'rgba(96,117,110,255)';
                break;
            case "water":
                document.getElementById("tipo").innerHTML = "Water";
                document.getElementById("tipo").style.background = 'rgba(21,82,225,255)';
                document.getElementById("franqueza").style.background = 'rgba(21,82,225,255)';
                break;
            default:
        }
        for (let move of data.moves) {

            const div = document.createElement("div");  // <div></div>
            div.textContent = move.move.name;           // <div>NameMove</div>

            const tabla = document.querySelector("#tablaMovimientos"); // <div id="tablaMovimientos"> </div>

            tabla.insertAdjacentElement("beforeend", div);
            // Opción 3: <div id="tablaMovimientos"> <div>NameMove</div> </div>
        }
    })
}