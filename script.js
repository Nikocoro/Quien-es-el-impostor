const baseDeJugadores = [
    // Actuales
  { nombre: "Lionel Messi", tipo: "actual" },
  { nombre: "Cristiano Ronaldo", tipo: "actual" },
  { nombre: "Kylian Mbappé", tipo: "actual" },
  { nombre: "Erling Haaland", tipo: "actual" },
  { nombre: "Vinícius Júnior", tipo: "actual" },
  { nombre: "Kevin De Bruyne", tipo: "actual" },
  { nombre: "Julián Álvarez", tipo: "actual" },
  { nombre: "Lautaro Martínez", tipo: "actual" },
  { nombre: "Neymar Jr.", tipo: "actual" },
  { nombre: "Luka Modrić", tipo: "actual" },
  { nombre: "Robert Lewandowski", tipo: "actual" },
  { nombre: "Karim Benzema", tipo: "actual" },
  { nombre: "Sadio Mané", tipo: "actual" },
  { nombre: "Mohamed Salah", tipo: "actual" },
  { nombre: "Harry Kane", tipo: "actual" },
  { nombre: "Pedri", tipo: "actual" },
  { nombre: "Gavi", tipo: "actual" },
  { nombre: "Jude Bellingham", tipo: "actual" },
  { nombre: "Jamal Musiala", tipo: "actual" },
  { nombre: "Phil Foden", tipo: "actual" },
  { nombre: "Bukayo Saka", tipo: "actual" },
  { nombre: "Rafael Leão", tipo: "actual" },
  { nombre: "Khvicha Kvaratskhelia", tipo: "actual" },
  { nombre: "Victor Osimhen", tipo: "actual" },
  { nombre: "Darwin Núñez", tipo: "actual" },
  { nombre: "Cody Gakpo", tipo: "actual" },
  { nombre: "Enzo Fernández", tipo: "actual" },
  { nombre: "Aurélien Tchouaméni", tipo: "actual" },
  { nombre: "Eduardo Camavinga", tipo: "actual" },
  { nombre: "Ousmane Dembélé", tipo: "actual" },
  { nombre: "Christopher Nkunku", tipo: "actual" },
  { nombre: "Randal Kolo Muani", tipo: "actual" },
  { nombre: "Marcus Rashford", tipo: "actual" },
  { nombre: "Jadon Sancho", tipo: "actual" },
  { nombre: "Mason Mount", tipo: "actual" },
  { nombre: "Declan Rice", tipo: "actual" },
  { nombre: "Jack Grealish", tipo: "actual" },
  { nombre: "Riyad Mahrez", tipo: "actual" },
  { nombre: "Bernardo Silva", tipo: "actual" },
  { nombre: "Bruno Fernandes", tipo: "actual" },
  { nombre: "João Cancelo", tipo: "actual" },
  { nombre: "Rúben Dias", tipo: "actual" },
  { nombre: "Virgil van Dijk", tipo: "actual" },
  { nombre: "Frenkie de Jong", tipo: "actual" },
  { nombre: "Matthijs de Ligt", tipo: "actual" },
  { nombre: "Cody Gakpo", tipo: "actual" },
  { nombre: "Memphis Depay", tipo: "actual" },
  { nombre: "Wout Weghorst", tipo: "actual" },
  { nombre: "Serge Gnabry", tipo: "actual" },
  { nombre: "Leroy Sané", tipo: "actual" },
  { nombre: "Joshua Kimmich", tipo: "actual" },
  { nombre: "Leon Goretzka", tipo: "actual" },
  { nombre: "Thomas Müller", tipo: "actual" },
  { nombre: "Marco Reus", tipo: "actual" },
  { nombre: "Timo Werner", tipo: "actual" },
  { nombre: "Kai Havertz", tipo: "actual" },
  { nombre: "Florian Wirtz", tipo: "actual" },
  { nombre: "Youssoufa Moukoko", tipo: "actual" },
  { nombre: "Niclas Füllkrug", tipo: "actual" },
  { nombre: "Antonio Rüdiger", tipo: "actual" },
  { nombre: "Dayot Upamecano", tipo: "actual" },
  { nombre: "Lucas Hernández", tipo: "actual" },
  { nombre: "Théo Hernández", tipo: "actual" },
  { nombre: "Kingsley Coman", tipo: "actual" },
  { nombre: "Olivier Giroud", tipo: "actual" },
  { nombre: "Antoine Griezmann", tipo: "actual" },
  { nombre: "Adrien Rabiot", tipo: "actual" },
  { nombre: "Youssouf Fofana", tipo: "actual" },
  { nombre: "William Saliba", tipo: "actual" },
  { nombre: "Ibrahima Konaté", tipo: "actual" },
  { nombre: "Mike Maignan", tipo: "actual" },
  { nombre: "Gianluigi Donnarumma", tipo: "actual" },
  { nombre: "Niccolò Barella", tipo: "actual" },
  { nombre: "Lorenzo Pellegrini", tipo: "actual" },
  { nombre: "Federico Chiesa", tipo: "actual" },
  { nombre: "Ciro Immobile", tipo: "actual" },
  { nombre: "Lorenzo Insigne", tipo: "actual" },
  { nombre: "Marco Verratti", tipo: "actual" },
  { nombre: "Alessandro Bastoni", tipo: "actual" },
  { nombre: "Sandro Tonali", tipo: "actual" },
  { nombre: "Dusan Vlahović", tipo: "actual" },
  { nombre: "Rafael Leão", tipo: "actual" },
  { nombre: "Theo Hernández", tipo: "actual" },
  { nombre: "Álvaro Morata", tipo: "actual" },
  { nombre: "Ferran Torres", tipo: "actual" },
  { nombre: "Ansu Fati", tipo: "actual" },
  { nombre: "Dani Olmo", tipo: "actual" },
  { nombre: "Mikel Oyarzabal", tipo: "actual" },
  { nombre: "Rodri", tipo: "actual" },
  { nombre: "Fabián Ruiz", tipo: "actual" },
  { nombre: "Marcos Llorente", tipo: "actual" },
  { nombre: "Pau Torres", tipo: "actual" },
  { nombre: "Aymeric Laporte", tipo: "actual" },
  { nombre: "Unai Simón", tipo: "actual" },
  { nombre: "Diogo Jota", tipo: "actual" },
  { nombre: "Bernardo Silva", tipo: "actual" },
  { nombre: "João Félix", tipo: "actual" },
  { nombre: "Vitinha", tipo: "actual" },
  { nombre: "Nuno Mendes", tipo: "actual" },
  { nombre: "Gonçalo Ramos", tipo: "actual" },
  { nombre: "Raphaël Guerreiro", tipo: "actual" },
  { nombre: "Pepe", tipo: "actual" },
  { nombre: "Diogo Costa", tipo: "actual" },
  { nombre: "Ángel Di María", tipo: "actual" },
  { nombre: "Paulo Dybala", tipo: "actual" },
  { nombre: "Rodrigo De Paul", tipo: "actual" },
  { nombre: "Leandro Paredes", tipo: "actual" },
  { nombre: "Nicolás Otamendi", tipo: "actual" },
  { nombre: "Cristian Romero", tipo: "actual" },
  { nombre: "Lisandro Martínez", tipo: "actual" },
  { nombre: "Emiliano Martínez", tipo: "actual" },
  { nombre: "Alexis Mac Allister", tipo: "actual" },
  { nombre: "Nahuel Molina", tipo: "actual" },
  { nombre: "Marcos Acuña", tipo: "actual" },
  { nombre: "Giovani Lo Celso", tipo: "actual" },
  { nombre: "Ángel Correa", tipo: "actual" },
  { nombre: "Joaquín Correa", tipo: "actual" },
  { nombre: "Nicolás González", tipo: "actual" },
  { nombre: "Alejandro Garnacho", tipo: "actual" },
  { nombre: "Valentín Carboni", tipo: "actual" },
  { nombre: "Facundo Buonanotte", tipo: "actual" },
  { nombre: "Casemiro", tipo: "actual" },
  { nombre: "Alisson", tipo: "actual" },
  { nombre: "Marquinhos", tipo: "actual" },
  { nombre: "Thiago Silva", tipo: "actual" },
  { nombre: "Vinícius Júnior", tipo: "actual" },
  { nombre: "Rodrygo", tipo: "actual" },
  { nombre: "Gabriel Jesus", tipo: "actual" },
  { nombre: "Richarlison", tipo: "actual" },
  { nombre: "Raphinha", tipo: "actual" },
  { nombre: "Antony", tipo: "actual" },
  { nombre: "Lucas Paquetá", tipo: "actual" },
  { nombre: "Bruno Guimarães", tipo: "actual" },
  { nombre: "Fabinho", tipo: "actual" },
  { nombre: "Renan Lodi", tipo: "actual" },
  { nombre: "Danilo", tipo: "actual" },
  { nombre: "Éder Militão", tipo: "actual" },
  { nombre: "Gabriel Magalhães", tipo: "actual" },
  { nombre: "Endrick", tipo: "actual" },
  { nombre: "Vitor Roque", tipo: "actual" },
  { nombre: "Estêvão", tipo: "actual" },
  { nombre: "Son Heung-min", tipo: "actual" },
  { nombre: "Lee Kang-in", tipo: "actual" },
  { nombre: "Kim Min-jae", tipo: "actual" },
  { nombre: "Takehiro Tomiyasu", tipo: "actual" },
  { nombre: "Takumi Minamino", tipo: "actual" },
  { nombre: "Achraf Hakimi", tipo: "actual" },
  { nombre: "Yassine Bounou", tipo: "actual" },
  { nombre: "Youssef En-Nesyri", tipo: "actual" },
  { nombre: "Hakim Ziyech", tipo: "actual" },
  { nombre: "Sofyan Amrabat", tipo: "actual" },
  { nombre: "Victor Osimhen", tipo: "actual" },
  { nombre: "Samuel Chukwueze", tipo: "actual" },
  { nombre: "Ademola Lookman", tipo: "actual" },
  { nombre: "Alex Iwobi", tipo: "actual" },
  { nombre: "Kelechi Iheanacho", tipo: "actual" },
  { nombre: "Calvin Bassey", tipo: "actual" },
  { nombre: "William Troost-Ekong", tipo: "actual" },
  { nombre: "Maduka Okoye", tipo: "actual" },
  { nombre: "Frank Onyeka", tipo: "actual" },
  { nombre: "Mohammed Salisu", tipo: "actual" },
  { nombre: "Thomas Partey", tipo: "actual" },
  { nombre: "Alphonso Davies", tipo: "actual" },
  { nombre: "Christian Pulisic", tipo: "actual" },
  { nombre: "Luka Modrić", tipo: "actual" },
  { nombre: "Ivan Rakitić", tipo: "actual" },
  { nombre: "Mario Mandžukić", tipo: "actual" },
  { nombre: "Robert Lewandowski", tipo: "actual" },
  { nombre: "Sergiño Dest", tipo: "actual" },
    
// LEYENDAS DEL FÚTBOL (200 jugadores)

  { nombre: "Diego Maradona", tipo: "leyenda" },
  { nombre: "Pelé", tipo: "leyenda" },
  { nombre: "Zinedine Zidane", tipo: "leyenda" },
  { nombre: "Ronaldo Nazário", tipo: "leyenda" },
  { nombre: "Johan Cruyff", tipo: "leyenda" },
  { nombre: "Ronaldinho", tipo: "leyenda" },
  { nombre: "Juan Román Riquelme", tipo: "leyenda" },
  { nombre: "Thierry Henry", tipo: "leyenda" },
  { nombre: "Andrés Iniesta", tipo: "leyenda" },
  { nombre: "Carles Puyol", tipo: "leyenda" },
  { nombre: "Franz Beckenbauer", tipo: "leyenda" },
  { nombre: "Alfredo Di Stéfano", tipo: "leyenda" },
  { nombre: "Ferenc Puskás", tipo: "leyenda" },
  { nombre: "Gerd Müller", tipo: "leyenda" },
  { nombre: "Michel Platini", tipo: "leyenda" },
  { nombre: "Roberto Baggio", tipo: "leyenda" },
  { nombre: "Franco Baresi", tipo: "leyenda" },
  { nombre: "Paolo Maldini", tipo: "leyenda" },
  { nombre: "Kaká", tipo: "leyenda" },
  { nombre: "Xavi Hernández", tipo: "leyenda" },
  { nombre: "Lothar Matthäus", tipo: "leyenda" },
  { nombre: "Ruud Gullit", tipo: "leyenda" },
  { nombre: "Marco van Basten", tipo: "leyenda" },
  { nombre: "Frank Rijkaard", tipo: "leyenda" },
  { nombre: "George Best", tipo: "leyenda" },
  { nombre: "Bobby Charlton", tipo: "leyenda" },
  { nombre: "Eusébio", tipo: "leyenda" },
  { nombre: "Garrincha", tipo: "leyenda" },
  { nombre: "Jairzinho", tipo: "leyenda" },
  { nombre: "Rivaldo", tipo: "leyenda" },
  { nombre: "Romário", tipo: "leyenda" },
  { nombre: "Zico", tipo: "leyenda" },
  { nombre: "Sócrates", tipo: "leyenda" },
  { nombre: "Falcão", tipo: "leyenda" },
  { nombre: "Tostão", tipo: "leyenda" },
  { nombre: "Carlos Alberto", tipo: "leyenda" },
  { nombre: "Cafu", tipo: "leyenda" },
  { nombre: "Roberto Carlos", tipo: "leyenda" },
  { nombre: "Lev Yashin", tipo: "leyenda" },
  { nombre: "Gianluigi Buffon", tipo: "leyenda" },
  { nombre: "Iker Casillas", tipo: "leyenda" },
  { nombre: "Manuel Neuer", tipo: "leyenda" },
  { nombre: "Oliver Kahn", tipo: "leyenda" },
  { nombre: "Peter Schmeichel", tipo: "leyenda" },
  { nombre: "Edwin van der Sar", tipo: "leyenda" },
  { nombre: "Petr Čech", tipo: "leyenda" },
  { nombre: "Francesco Totti", tipo: "leyenda" },
  { nombre: "Fabio Cannavaro", tipo: "leyenda" },
  { nombre: "Gennaro Gattuso", tipo: "leyenda" },
  { nombre: "Andrea Pirlo", tipo: "leyenda" },
  { nombre: "Clarence Seedorf", tipo: "leyenda" },
  { nombre: "Patrick Vieira", tipo: "leyenda" },
  { nombre: "Claude Makélélé", tipo: "leyenda" },
  { nombre: "Frank Lampard", tipo: "leyenda" },
  { nombre: "Steven Gerrard", tipo: "leyenda" },
  { nombre: "Paul Scholes", tipo: "leyenda" },
  { nombre: "Ryan Giggs", tipo: "leyenda" },
  { nombre: "David Beckham", tipo: "leyenda" },
  { nombre: "Eric Cantona", tipo: "leyenda" },
  { nombre: "Raúl González", tipo: "leyenda" },
  { nombre: "Fernando Hierro", tipo: "leyenda" },
  { nombre: "Luis Enrique", tipo: "leyenda" },
  { nombre: "Pep Guardiola", tipo: "leyenda" },
  { nombre: "Rivaldo", tipo: "leyenda" },
  { nombre: "Luis Figo", tipo: "leyenda" },
  { nombre: "Rui Costa", tipo: "leyenda" },
  { nombre: "Gabriel Batistuta", tipo: "leyenda" },
  { nombre: "Hernán Crespo", tipo: "leyenda" },
  { nombre: "Javier Zanetti", tipo: "leyenda" },
  { nombre: "Walter Samuel", tipo: "leyenda" },
  { nombre: "Juan Sebastián Verón", tipo: "leyenda" },
  { nombre: "Ariel Ortega", tipo: "leyenda" },
  { nombre: "Carlos Valderrama", tipo: "leyenda" },
  { nombre: "René Higuita", tipo: "leyenda" },
  { nombre: "Radamel Falcao", tipo: "leyenda" },
  { nombre: "James Rodríguez", tipo: "leyenda" },
  { nombre: "Cuauhtémoc Blanco", tipo: "leyenda" },
  { nombre: "Rafael Márquez", tipo: "leyenda" },
  { nombre: "Hugo Sánchez", tipo: "leyenda" },
  { nombre: "Hristo Stoichkov", tipo: "leyenda" },
  { nombre: "Petr Čech", tipo: "leyenda" },
  { nombre: "Vladimír Šmicer", tipo: "leyenda" },
  { nombre: "Jakub Błaszczykowski", tipo: "leyenda" },
  { nombre: "Łukasz Piszczek", tipo: "leyenda" },
  { nombre: "Artur Boruc", tipo: "leyenda" },
  { nombre: "Grzegorz Krychowiak", tipo: "leyenda" },
  { nombre: "Zlatan Ibrahimović", tipo: "leyenda" },
  { nombre: "Samuel Eto'o", tipo: "leyenda" }

];

// --- ESTADO DE LA APLICACIÓN ---
let players = [];
let category = 'mixto';
let gameData = {
    secretPlayer: null,
    impostorName: null,
};
let revealIndex = 0;

// --- REFERENCIAS A ELEMENTOS DEL DOM ---
const setupScreen = document.getElementById('setup-screen');
const revealScreen = document.getElementById('reveal-screen');
const playingScreen = document.getElementById('playing-screen');
const finalScreen = document.getElementById('final-screen');

const playerNameInput = document.getElementById('player-name-input');
const addPlayerBtn = document.getElementById('add-player-btn');
const playerList = document.getElementById('player-list');
const categorySelector = document.getElementById('category-selector');
const startGameBtn = document.getElementById('start-game-btn');

const revealInstruction = document.getElementById('reveal-instruction');
const roleContainer = document.getElementById('role-container');
const rolePrompt = document.getElementById('role-prompt');
const roleDisplay = document.getElementById('role-display');
const roleText = document.getElementById('role-text');
const playerText = document.getElementById('player-text');
const nextPlayerBtn = document.getElementById('next-player-btn');

const endGameBtn = document.getElementById('end-game-btn');

const finalTitle = document.getElementById('final-title');
const finalImpostorText = document.getElementById('final-impostor-text');
const finalPlayerText = document.getElementById('final-player-text');
const playAgainBtn = document.getElementById('play-again-btn');

// --- LÓGICA DE CONFIGURACIÓN ---

// Función para actualizar la lista de jugadores en la UI
function updatePlayerList() {
    playerList.innerHTML = '';
    players.forEach((player, index) => {
        const li = document.createElement('li');
        li.className = 'flex justify-between items-center bg-gray-700 p-2 rounded-md';
        
        const nameSpan = document.createElement('span');
        nameSpan.textContent = player;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '✖';
        deleteBtn.className = 'delete-player-btn text-red-500 hover:text-red-400 font-bold';
        deleteBtn.dataset.index = index;
        
        li.appendChild(nameSpan);
        li.appendChild(deleteBtn);
        playerList.appendChild(li);
    });
    // Habilitar o deshabilitar el botón de inicio
    startGameBtn.disabled = players.length < 4 || players.length > 10;
}

// NUEVO: Event listener para eliminar jugadores usando delegación de eventos
playerList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-player-btn')) {
        const index = parseInt(e.target.dataset.index, 10);
        players.splice(index, 1); // Elimina el jugador del array
        updatePlayerList(); // Vuelve a renderizar la lista
    }
});

// Event listener para añadir jugador
addPlayerBtn.addEventListener('click', () => {
    const name = playerNameInput.value.trim();
    if (name && players.length < 10) {
        players.push(name);
        playerNameInput.value = '';
        updatePlayerList();
    }
});

// Permitir añadir con la tecla Enter
playerNameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addPlayerBtn.click();
    }
});

// CORREGIDO: Event listener para el selector de categoría
categorySelector.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        category = e.target.dataset.category;
        // Actualizar estilo de botones manejando clases de Tailwind
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.remove('bg-blue-600', 'text-white');
            btn.classList.add('bg-gray-700');
        });
        e.target.classList.remove('bg-gray-700');
        e.target.classList.add('bg-blue-600', 'text-white');
    }
});

// --- LÓGICA DEL JUEGO ---

// Event listener para comenzar el juego
startGameBtn.addEventListener('click', () => {
    let filteredPlayers = baseDeJugadores;
    if (category !== 'mixto') {
        filteredPlayers = baseDeJugadores.filter(p => p.tipo === category);
    }
    
    gameData.secretPlayer = filteredPlayers[Math.floor(Math.random() * filteredPlayers.length)];
    gameData.impostorName = players[Math.floor(Math.random() * players.length)];
    
    revealIndex = 0;
    setupRevealScreen();
    
    setupScreen.classList.add('hidden');
    revealScreen.classList.remove('hidden');
});

// Prepara la pantalla de revelación para el jugador actual
function setupRevealScreen() {
    revealInstruction.textContent = `Pásale el teléfono a ${players[revealIndex]}`;
    rolePrompt.classList.remove('hidden');
    roleDisplay.classList.add('hidden');
    nextPlayerBtn.classList.add('hidden');
    roleContainer.style.cursor = 'pointer';
}

// Event listener para mostrar el rol
roleContainer.addEventListener('click', () => {
    if (rolePrompt.classList.contains('hidden')) return; 

    const currentPlayer = players[revealIndex];
    
    if (currentPlayer === gameData.impostorName) {
        roleText.textContent = '¡Eres el IMPOSTOR!';
        playerText.textContent = 'Tu misión: que no te descubran.';
        roleText.classList.add('text-red-400');
        roleText.classList.remove('text-green-400');
    } else {
        roleText.textContent = 'Eres un TRIPULANTE';
        playerText.textContent = `El futbolista es: ${gameData.secretPlayer.nombre}`;
        roleText.classList.add('text-green-400');
        roleText.classList.remove('text-red-400');
    }
    
    rolePrompt.classList.add('hidden');
    roleDisplay.classList.remove('hidden');
    nextPlayerBtn.classList.remove('hidden');
    roleContainer.style.cursor = 'default';
});

// Event listener para pasar al siguiente jugador
nextPlayerBtn.addEventListener('click', () => {
    revealIndex++;
    if (revealIndex < players.length) {
        setupRevealScreen();
    } else {
        revealScreen.classList.add('hidden');
        playingScreen.classList.remove('hidden');
    }
});

// --- LÓGICA DE FINALIZACIÓN ---

// MODIFICADO: El botón de fin de juego ahora revela directamente los resultados
endGameBtn.addEventListener('click', () => {
    playingScreen.classList.add('hidden');
    showFinalScreen();
});

// MODIFICADO: Muestra la pantalla final sin preguntar quién ganó
function showFinalScreen() {
    finalImpostorText.textContent = `El impostor era: ${gameData.impostorName}`;
    finalPlayerText.textContent = `El futbolista secreto era: ${gameData.secretPlayer.nombre}`;
    finalScreen.classList.remove('hidden');
}

// **NUEVA FUNCIÓN**: Reinicia el juego para una nueva ronda sin borrar jugadores.
function reiniciarParaNuevaRonda() {
    // 1. Resetear los datos de la partida anterior
    gameData.secretPlayer = null;
    gameData.impostorName = null;
    revealIndex = 0;

    // 2. Ocultar la pantalla final y mostrar la de configuración
    finalScreen.classList.add('hidden');
    setupScreen.classList.remove('hidden');
    
    // 3. Asegurarse de que la lista de jugadores y el botón de inicio estén correctos
    updatePlayerList();
}


// **MODIFICADO**: El botón de jugar de nuevo ahora llama a la nueva función.
playAgainBtn.addEventListener('click', () => {
    reiniciarParaNuevaRonda();
});

// Inicializar
updatePlayerList();
