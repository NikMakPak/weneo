import React, {useState} from 'react'
import './Modal.css'
import _RoundBtn from "../UI/_RoundBtn/_RoundBtn";
import _RoundInput from "../UI/_RoundInput/_RoundInput";

const Modal = ({ data, func }) => {
    const [tabNum,setTabNum] = useState(0)
    const colors = [
        {"a": "F80000"},
        {"b": "F2BD00"},
        {"c": "7BDB00"},
        {"d": "00BD4C"},
        {"e": "00EEE0"},
        {"f": "6A00D4"}
    ]

    return (
        <div className={'modal'}>
            <div className={'modal__content'}>
                <button className={'modal__btn'} onClick={() => func('')}>
                    X
                </button>
                <div className="wrapper">
                    <nav className="bar">
                            <_RoundBtn onClick={()=>{
                                setTabNum(1)
                            }}>Текст</_RoundBtn>
                            <_RoundBtn onClick={()=>{
                                setTabNum(2)
                            }}>Внешний вид</_RoundBtn>
                            <_RoundBtn onClick={()=>{
                                setTabNum(3)
                            }}>Добавить внутрь</_RoundBtn>
                        <_RoundBtn onClick={()=>{
                            setTabNum(3)
                        }}>Заменить на иной блок</_RoundBtn>
                        <_RoundBtn onClick={()=>{
                            setTabNum(3)
                        }}>Нейросеть: img</_RoundBtn>
                        <_RoundBtn onClick={()=>{
                            setTabNum(3)
                        }}>Нейросеть: ключевые слова, темы</_RoundBtn>
                    </nav>
                    <div className="active">
                        {tabNum == 0 && <h3>Выберите в разделе..</h3>}
                        {tabNum == 1 && data.map((item, i)=>(
                            <input key={i} value={item[`${i}`]}/>
                            ))}
                        {tabNum == 2 && <img style={{borderRadius: 40}} src="/img/iroup8.png" alt=""/>}
                        {tabNum > 2 && <h3>Пока в разработке..</h3>}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;