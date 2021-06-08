let pets = [
    {
        nome: 'Yoshi',
        nomeDono: 'Victor',
        idade: 7, 
        tipo: 'Cachorro',
        raca: 'Akita Inu',
        peso: 40,
        genero: 'Macho',
        cor: 'Ruivo',
        vacinado: true 
    },

    {
        nome: 'Nina',
        nomeDono: 'Cris',
        idade: 7, 
        tipo: 'Cachorro',
        raca: 'Poodle',
        peso: 20,
        genero: 'Femea',
        cor: 'Preto',
        vacinado: true 
    },

    {
        nome: 'Rufus',
        nomeDono: 'Tom',
        idade: 7, 
        tipo: 'Cachorro',
        raca: 'Labrador',
        peso: 30,
        genero: 'Macho',
        cor: 'Marrom',
        vacinado: true 
    },
]

function cadastrarPet(arrayPets, objetoPet) {
    return arrayPets.push(objetoPet)
}

let novoPet = {
        nome: 'Sam',
        nomeDono: 'Leo',
        idade: 4, 
        tipo: 'Cachorro',
        raca: 'PitBull',
        peso: 30,
        genero: 'Macho',
        cor: 'Branco',
        vacinado: false 
}

cadastrarPet(pets, novoPet)

let listarPets = () => {
    pets.forEach(element =>{
        console.log(element.nome)
    });
}

listarPets();

function validarDados(objetoPet) {
    if(typeof objetoPet == "object"){    
        if(validaDados(objetoPet)){  
            arrayPets.push(objetoPet);
            console.log(pets)    
    } else {  
        console.log('O objeto não tem todas as propriedades necessárias informadas')
        }  
    } else {
        console.log('Insira um objeto válido')  
        } 
    }

    return (
        objetoPet.nome &&
        objetoPet.nomeDono &&
        objetoPet.idade &&
        objetoPet.raca &&
        objetoPet.peso &&
        objetoPet.genero &&
        objetoPet.cor &&
        objetoPet.vacinado
    );
}
