function flipCoin() {
    let r = Math.random() < 0.5 ? "Heads" : "Tails";
    $("#coin-flip").html(r.toString());
}