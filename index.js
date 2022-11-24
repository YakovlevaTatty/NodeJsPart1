const yargs = require('yargs');
const {addNote,getNotes,printNotes,deleteNotes} = require('./notes.controller')

yargs.command({
    command: "add",
    describe: "add new note to list",
    builder:{
        title:{
            type: "string",
            describe:"Note title",
            demandOption: true
        }
    },
    handler({title}) {
        addNote(title)
    }
})

yargs.command({
    command: "list",
    describe: "print all notes",
    async handler() {
        const note = await getNotes();
        printNotes();
    }
})

yargs.command({
    command: "delete",
    describe: " delete note ",
    async handler({id}){
        console.log(id)
        deleteNotes(id)
    }
})

yargs.parse()