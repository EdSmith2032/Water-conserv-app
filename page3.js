onEvent("spanishButton", "click", function () {
    setText("text", "En lugar de comprar botellas de agua desechables, usa una botella rellenable. Las botellas de agua de un solo uso llenan los vertederos y retienen agua valiosa.");
});

onEvent("englishButton", "click", function () {
    setText("text", "Instead of buying disposable water bottles, use a refillable bottle. One use water bottles fill our landfills and trap valuable water.");
});

onEvent("plastic", "click", function () {
    document.getElementById("plastic").src = "plastic-bottle-no.png";
})

onEvent("glass", "click", function () {
    setImageURL("glass", "glass-bottle-B.png");
    setImageURL("blank", "glass-bottle.png");
})
