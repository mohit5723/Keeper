import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes.js"

function createNote(context){
    return(
        <Note 
            key={context.key}
            title={context.title}
            content={context.content}
        />
    )
}


function App(){
    return (
        <div>
            <Header />

            {notes.map(createNote)}

            {/* <Note
                 title={notes[0].title}
                 content={notes[0].content}
            /> */}
            <Footer />
        </div>
    );
}

export default App;
