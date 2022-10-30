import React, {useRef, useState} from 'react';
import classes from "./BlockSite.module.css";
const BlockSite = () => {
    //todo: испарвить nav на ul
    return (
        <div className={classes.limit}>
            <header className={classes.header}>
                <nav className={classes.nav} >
                    <ul>
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>Telegram</li>
                        <li>Pinterest</li>
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
                    <section className={classes.imgBlock}>
                        <img src="/img/image1.png" alt="Красивый текст описание"/>
                        <div className={classes.cardContent}>
                            <h3>Красивый визуал в блоге</h3>
                            <a href="#">Читать</a>
                        </div>
                    </section>
                    <section className={classes.imgBlock}Ъ>
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