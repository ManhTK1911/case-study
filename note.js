let StickyNote = function () {
    this.id = 0;
    this.title = "";
    this.content = "";
    this.addTitle = function (title) {
        this.title = title;
    };
    this.addContent = function (content) {
        this.content = content;
    };
    this.getHtml = function () {
        let str = `
<table border="1px">
    <tr>
        <td>
            <textarea  class="title" id="inputTitle${this.id}" rows="2" cols="30" disabled>${this.title}</textarea>
        </td>     
            <td>
                <table>
                     <tr>
                        <button type="button" id="btn2" onclick="changeNote(${this.id})">+</button><br>
                     </tr>
                     <tr>
                        <button type="button" id="btn3" onclick="deleteNote(${this.id})">x</button>
                     </tr>
                </table>
            </td>
    </tr>
    <tr>
        <td>
            <textarea id="inputContent${this.id}" rows="8" cols="30" disabled>${this.content}</textarea>
        </td>
    </tr>
</table>`;
        return str;
    }
}
let Board = function (name) {
    this.notes = [];
    this.addNote = function (note) {
        note.id = this.notes.length;
        this.notes.push(note);
    };
    this.displayNote = function (board) {
        board.innerHTML = "";
        for (let i = 0; i < this.notes.length; i++) {
            board.innerHTML += this.notes[i].getHtml();
        }
    };
    this.deleteNote = function (index) {
        this.notes.splice(index, 1);
    }
};

let board = new Board();
let display = document.getElementById("board");

function changeNote(index) {
    document.getElementById('inputTitle' + index).disabled = false;
    document.getElementById('inputContent' + index).disabled = false;

}

function addNote() {
    let note = new StickyNote();
    let newTitle = document.getElementById('inputTitle').value;
    let newContent = document.getElementById('inputContent').value;
    note.addTitle(newTitle);
    note.addContent(newContent);
    board.addNote(note);
    board.displayNote(display);
}

function deleteNote(index) {
    board.deleteNote(index);
    board.displayNote(display);
}