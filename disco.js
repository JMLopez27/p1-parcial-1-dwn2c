class Disco {

    constructor(nombreDisco, autor, codigo){
    this.nombreDisco = nombreDisco;
    this.autor = autor;
    this.codigo = codigo;
    this.pistas = [];
    }

    agregarPistas(nuevasPistas){
        this.pistas.push(nuevasPistas);
    }

    mostrar(){
        const section = document.createElement("section");
        const h2 = document.createElement("h2");
        h2.innerText = `Disco: ${this.nombreDisco}`;

        const h3 = document.createElement("h3");
        h3.innerText = `Banda/Autor: ${this.autor}`;

        const h3codigo = document.createElement("h3");
        h3codigo.innerText = `Código: ${this.codigo}`;

        const h3pistas = document.createElement("h3");
        h3pistas.innerText = "Pistas: ";

        section.append(h2, h3, h3codigo, h3pistas);
        
        for(let pistas of this.pistas){
            section.append(pistas.mostrar());
        }

        return section;
    }
}