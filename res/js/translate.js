function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
var translator = $('body').translate({lang: "en", t: dict.translations}); //English by default

/*sleep(5000).then(()=>{
    translator.lang("pt"); //Change to Portuguese
});*/