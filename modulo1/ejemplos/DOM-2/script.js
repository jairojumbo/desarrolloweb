// Acceso al DOM usando ID
const title = document.getElementById('main-title');
title.textContent = 'Hola Mundo, JavaScript!';

// Acceso al DOM usando clase
const paragraphs = document.getElementsByClassName('text');
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = 'blue';
}

// Manejo de eventos
const button = document.getElementById('change-text');
button.addEventListener('click', function() {
    title.textContent = 'Titulo Cambiado!';
});

// Mostrar la lista de nombres
const showNamesButton = document.getElementById('show-names');
const nameList = document.getElementById('name-list');
const names = ['Juan', 'Maria', 'Carlos', 'Ana', 'Luis', 'Jairo', 'Andres'];

showNamesButton.addEventListener('click', function() {
    // Limpiar la lista antes de agregar los nuevos nombres
    nameList.innerHTML = '';
    
    // Crear una lista de elementos <li> con los nombres
    names.forEach(function(name) {
        const listItem = document.createElement('li');
        listItem.textContent = name;
        nameList.appendChild(listItem);
    });
});
