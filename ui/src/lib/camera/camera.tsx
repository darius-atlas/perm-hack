import cls from './camera.module.scss';
import {useEffect, useState} from "react";

/* eslint-disable-next-line */
export interface CameraProps {
}

export function Camera(props: CameraProps) {
    const [randomNumber, setRandomNumber] = useState(null);

    useEffect(() => {
        // Создаем WebSocket-соединение
        const ws = new WebSocket('ws://localhost:8765/');

        // Обработка сообщений от сервера
        ws.onmessage = (event) => {
            const newRandomNumber = event.data;
            setRandomNumber(newRandomNumber);
        };

        // Закрытие соединения при размонтировании компонента
        return () => {
            ws.close();
        };
    }, []);
    return (
        <div className={cls.container}>
            <div className={cls.select}>
                <div>
                    <p className={cls.date}>
                        2020-23-21
                    </p>
                    <p className={cls.time}>
                        14:32
                    </p>
                </div>
                <span className={cls.line}></span>
                <div>
                    <p className={cls.name}>
                        Cum
                    </p>
                    <p className={cls.number}>
                        №69
                    </p>
                    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 9.16699H3" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M21 5.5H3" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M21 12.833H3" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M21 16.5H3" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
            <div>
                {randomNumber}
            </div>
        </div>
    );
}

export default Camera;
