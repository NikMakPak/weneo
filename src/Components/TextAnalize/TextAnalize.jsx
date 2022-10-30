import React, {useEffect, useState} from 'react';
import _RoundInput from "../UI/_RoundInput/_RoundInput";
import _TextArea from "../UI/_TextArea/_TextArea";
import classes from "./TextAnalize.module.css"
const TextAnalize = () => {
    const [data,setData] = useState('')

    const sendQuery = (queryText) =>{
        fetch(`/nlp?text_analize=${queryText}`).then(
            res=>res.json()
        ).then(
            data=>{
                let hashtags =[]
                let i=0
                for (const [key, value] of Object.entries(data['answer'])) {
                    if(key!=false && i<15) {
                        hashtags.push(key);
                        i+=1
                    }
                }
                setData(hashtags)
            }
        )
    }
    const handleKeyPress = (e) =>{
        if(e.key === 'Enter'){
            sendQuery(e.target.value)
        }
    }


    return (
        <div className={classes.block}>
            <form action="src/Components/TextAnalize/TextAnalize">
                <_TextArea
                    onBlur={(e)=>{sendQuery(e.target.value)}}
                    onKeyPress={(e)=>{handleKeyPress(e)}}
                    type={"text"}
                    placeholder={"Начните писать ваш текст..."}
                    cols="30"
                    rows="5"/>
            </form>
            <h3 className={classes.txt}>Распознанные ключевые слова, хэштеги, топики текста:</h3>

            <div className={classes.list}>
            {(data.length != 0) ?
                data.map((item, i)=>(
                <_RoundInput key={i} value={item} type={"text"}/>
                )) : <h4 className={classes.subtxt}>Ожидаем вашего ввода текста в поле...</h4>
            }
            </div>

        </div>
    );
};

export default TextAnalize;