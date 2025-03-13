async function getPokeInfo(name){
    const poke = name.toString().toLowerCase();
    if (!name) return;

    // Fetch Pokémon general data
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" +poke);
    const pokemon = await response.json();

    let pokemonName = pokemon["name"];
    let pokemonType = pokemon["types"];
    let pokemonImg = pokemon["sprites"]["front_default"];
    res = await fetch(pokemon["species"]["url"]);
    let pokemonDescData = await res.json();
    // Find the first English description
    let pokemonDesc = pokemonDescData["flavor_text_entries"].find(entry => entry.language.name === "en");
    // Use the English description or fallback
    pokemonDesc = pokemonDesc ? pokemonDesc["flavor_text"] : "No English description available.";
    // Remove unwanted characters (form feed \f, newlines, extra spaces)
    pokemonDesc = pokemonDesc.replace(/[\f\n\r]/g, " ");
    let typeString = "";
    for (let i = 0; i < pokemonType.length; i++){
        if(i == 0 && pokemonType.length>1){
            typeString  += "s: ";
        }else if(i != 1){
            typeString += ": ";
        }
        typeString += pokemonType[i]["type"]["name"].toUpperCase();
        if(i == 0 && pokemonType.length>1) {
            typeString += ", ";
        }
    }
    $("#pokeresponse").html(pokemonName.toUpperCase() +"<br>" 
    +"Pokemon type" +typeString +"<br>"
    +"Description: " +pokemonDesc
    );
    document.getElementById("pokemon-img").src = pokemonImg;
}

async function supriseMe() {
    const response = await fetch('assets/pokelist.txt');
    const text = await response.text();
    const pokemonList = text.split('\n').map(pokemon => pokemon.trim()).filter(pokemon => pokemon && pokemon !== 'Name');
    const randomPokemon = pokemonList[Math.floor(Math.random() * pokemonList.length)];
    getPokeInfo(randomPokemon);
}