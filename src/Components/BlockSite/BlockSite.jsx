import React, {useRef, useState} from 'react';
import classes from "./BlockSite.module.css";
import Modal from "../Modal/Modal";
const BlockSite = () => {
    const [data,setData] = useState([])
    const [navO,setnavO] = useState([
        {"0": "Instagram"},
        {"1": "Twitter"},
        {"2": "Telegram"},
        {"3": "Pinterest"}
    ])
    const [nav1,setnav1] = useState([
        {"0": "Красивый визуал в блоге"},
        {"1": "Читать"},
    ])
    return (
        <div className={classes.limit}>
            <header className={classes.header}>
                {data.length!=0 && <Modal func={setData} data={data}/>}
                <nav className={classes.nav} onClick={()=>setData(navO)}>
                    <ul>
                        {navO.map((item, i)=>(
                            <li key={i}>{item[`${i}`]}</li>
                        ))}
                    </ul>
                </nav>
                <h2 className={classes.title}>Monotera</h2>
            </header>


            <main>
                <nav className={classes.links}>
                    <ul>
                        <li>Блог</li>
                        <li>Архив</li>
                        <li>Магазин</li>
                        <li>Галлерея</li>
                        <li>О нас</li>
                        <li>Контакты</li>
                    </ul>
                </nav>
                <div className={classes.wrapper}>
                    <section className={classes.imgBlock} onClick={()=>setData(nav1)}>
                        <img src="/img/image1.png" alt="Красивый текст описание"/>
                        <div className={classes.cardContent}>
                            <h3>Красивый визуал в блоге</h3>
                            <a href="#">Читать</a>
                        </div>
                    </section>
                    <section className={classes.imgBlock} onClick={()=>setData(nav1)}>
                        <img src="/img/image2.png" alt="Красивый текст описание"/>
                        <div className={classes.cardContent}>
                            <h3>Красивый визуал в блоге</h3>
                            <a href="#">Читать</a>
                        </div>
                    </section>
                </div>
            </main>

        </div>
    );
};

export default BlockSite;