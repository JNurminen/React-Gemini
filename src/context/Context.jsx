import { createContext } from "react";
import run from "../config/gemini";
import { useState } from "react";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input,setInput] = useState(""); // input from user for prompt 
    const [recentPrompt, setRecentPrompt] = useState(""); // most recent prompt
    const [prevPrompts, setPrevPrompts] = useState([]); // all previous prompts
    const [showResult, setShowResult] = useState(false); // show result of prompt
    const [loading, setLoading] = useState(false); // loading state for prompt
    const [resultData, setResultData] = useState(""); // data from prompt

    const delayPara = (index, nextword) => {
        setTimeout(function() {
            setResultData(prev => prev + nextword);
        }, 75 * index);
    }

    const newChat = () => {
        setLoading(false);
        setShowResult(false);
    }
  
    const onSent = async (prompt) => {

        setResultData("");
        setLoading(true);
        setShowResult(true);
        let response;
        if (prompt !== undefined) {
            response = await run(prompt);
            setRecentPrompt(prompt);
        }
        else {
            setPrevPrompts(prev => [...prev, input]);
            setRecentPrompt(input);
            response = await run(input);
        }

        let responseArray = response.split("**");
        let newResponse = "";
        for (let i = 0; i < responseArray.length; i++) {
            if (i === 0 || i % 2 !== 1) {
                newResponse += responseArray[i];
            } 
            else {
                newResponse += "<b>" + responseArray[i] + "</b>";
            }
        }
        let newResponse2 = newResponse.split("*").join("</br>");         
        let newResponseArray = newResponse2.split(" ");
        for (let i = 0; i < newResponseArray.length; i++) 
        {
            const nextword = newResponseArray[i];
            delayPara(i, nextword + " ");
        }
        setLoading(false);
        setInput("");
    }

    const contexValue = {
            prevPrompts,
            setPrevPrompts,
            onSent,
            setRecentPrompt,
            recentPrompt,
            showResult,
            loading,
            resultData,
            input,
            setInput,
            newChat
    }

    return (
        <Context.Provider value={contexValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;