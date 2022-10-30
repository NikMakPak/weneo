import React, {useState} from 'react'
import './Modal.css'
import _RoundBtn from "../UI/_RoundBtn/_RoundBtn";
import _RoundInput from "../UI/_RoundInput/_RoundInput";

const Modal = ({ ref, func }) => {
    const [tabNum,setTabNum] = useState(0)
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
                    </nav>
                    <div className="active">
                        {tabNum == 1 && console.log(ref)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal