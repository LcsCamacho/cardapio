import styles from './style.module.scss'
import Image from 'next/image';
import { useState } from 'react';
import { GetStaticProps } from 'next'

interface CardapioProps {
    description: string;
    img: string;
    price: string;
    title: string;
}

interface DataProps {
    cardapioData: {
        cardapio: CardapioProps[];
    }
}

export default function Cards({ cardapioData }: DataProps) {
    return (
        <div className={styles.cardapioCards}>
            {cardapioData.cardapio.map((el: CardapioProps, i: number) => (
                <div key={i} className={styles.card}>
                    <div className={styles.cardText}>
                        <div className={styles.title}>
                            <span>{el.title}</span>
                        </div>
                        <div className={styles.description}>
                            <p>{el.description}</p>
                        </div>
                        <div className={styles.valor}>
                            <span>{el.price}</span>
                        </div>
                    </div>
                    <div className={styles.cardImg}>
                        <Image src={`/../public/images/${el.img}`}
                            className={styles.lancheImg}
                            height={200}
                            width={180}
                            quality={100}
                            alt={el.title}
                            priority
                            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcS
                                JAAAADUlEQVR42mNUkFeoBwABpgDgVDZbCgAAAABJRU5ErkJggg==' />
                    </div>
                </div>
            ))}
        </div>
    )
}
