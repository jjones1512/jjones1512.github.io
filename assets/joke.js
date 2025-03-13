async function jokeAPIfetch(){
    const jokeAPI_res = await
    fetch("https://v2.jokeapi.dev/joke/Any");
    const result = await jokeAPI_res.json();
    let ret = "";
    if(result.type === "twopart"){
        ret += result.setup +"<br>";
        ret += result.delivery;
    } 
    else{
        ret += result.joke;
    }
    $('#disclaimer').html("DISCLAIMER: All jokes come from jokeapi.dev, and do not reflect the position or views of the creator of this page.");
    $("#joke").html("A joke every 60 seconds <br>" + ret);
}