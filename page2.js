onEvent("spanishButton", "click", function () {
    setText("text", "Otra forma de ahorrar agua es ducharse más corto. ¡Prueba a programar un temporizador de 5 minutos!");
});

onEvent("englishButton", "click", function () {
    setText("text", "Another way to conserve water is to take shorter showers. Try setting a timer to 5 minutes!");

});


onEvent("showerDuck", "click", function () {
    setImageURL("showerDuck", "shower-duck-open.png")
})

onEvent("timer", "click", function () {
    setImageURL("timer", "timer0.jpg")
})