import React, { useState, createContext } from "react";
import { v4 as uuidv4 } from 'uuid';

export const ArticleContext = React.createContext();

export const ArticleProvider = (props) => {
    const [article, setArticle] = useState(
        [
            {
                id: uuidv4(),
                title: "Auto margins",
                discription: "Flexbox can do some pretty awesome things when you mix flex alignments with auto margins. Shown below are three examples of controlling flex items via auto margins: default (no auto margin), pushing two items to the right Flexbox can do some pretty awesome things when you mix flex alignments with auto margins. Shown below are three examples of controlling flex items via auto margins: default (no auto margin), pushing two items to the right Flexbox can do some pretty awesome things when you mix flex alignments with auto margins. Shown below are three examples of controlling flex items via auto margins: default (no auto margin), pushing two items to the right",
                authorName: "Anjan",
                date: "21/02/2021"
            },
            {
                id: uuidv4(),
                title: "Auto margins",
                discription: "Flexbox can do some pretty awesome things when you mix flex alignments with auto margins. Shown below are three examples of controlling flex items via auto margins: default (no auto margin), pushing two items to the right",
                authorName: "Anjan",
                date: "21/02/2021"
            },
            {
                id: uuidv4(),
                title: "Auto margins",
                discription: "Flexbox can do some pretty awesome things when you mix flex alignments with auto margins. Shown below are three examples of controlling flex items via auto margins: default (no auto margin), pushing two items to the right",
                authorName: "Anjan",
                date: "21/02/2021"
            }
        ]
    );

    return (
        <ArticleContext.Provider value={[article, setArticle]}>
            {props.children}
        </ArticleContext.Provider>
    )
}
