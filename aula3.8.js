const cachorro = { 
    nome: "alfredo",
    raca: "viralata",
     latir: function () {
        console.log ("au au");
    },
    mostrardados: function () {
        console.log ("O cachorro se chama " + cachorro.nome + " e é da raca " + cachorro.raca);
    }
};
cachorro.latir ();
cachorro.mostrardados ();