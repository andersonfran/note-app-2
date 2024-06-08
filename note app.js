function addNote() {
    var noteInput = document.getElementById('noteapp').value;
    if (noteapp.trim() === '') {
        alert('Please enter a note.');
        return;
    }
    var noteapp = document.getElementById('noteapp');
    var li = document.createElement('li');
    li.textContent = noteapp;
    noteapp.appendChild(li);
    document.getElementById('noteapp').value = '';
}






