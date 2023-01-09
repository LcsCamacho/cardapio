import styles from './style.module.scss'
import Image from 'next/image';
import useAppData from '../../context/hook/useAppData';
import { CardapioProps, ComboProps, prodProps } from '../../types/types';
import { useState } from 'react';
import Modal from 'react-modal';


export default function Cards({ cardapioData }: ComboProps) {
    const { cardapio } = cardapioData
    const [modal, setModal] = useState(false)
    const ctx = useAppData()
    var { prods }: prodProps = ctx
    const [produtos, setProdutos] = useState(prods)

    async function colletInfo(i: number, title: string, price: string, description: string, img: string) {
        const prod = {
            i: i,
            title: title,
            price: price,
            description: description,
            img: img,
        }
        setProdutos([...produtos, prod])
        prods = produtos
        console.log(prods)
    }

    return (
        <div className={styles.cardapioCards}>
            {modal ? <Modal
                isOpen={modal}
                onRequestClose={() => setModal(false)}
                contentLabel="Modal"
                overlayClassName={styles.modalOverlay}
                className={styles.modal}
                ariaHideApp={false}>
                <div className={styles.modalContent}>
                    <header>
                        <span>SEU PEDIDO</span>
                        <span onClick={() => setModal(false)} className={styles.close}>X</span>
                    </header>
                    <main>
                        <span>Observações</span>
                        <input className={styles.obs} placeholder='Digite suas observações' type="text" />
                        <input className={styles.finalizar} onClick={()=> setModal(false)} type="button" value={prods}/>
                    </main>
                </div>
            </Modal>
                :
                <></>}
            {cardapio.map((el: CardapioProps, i: number) => (
                <div key={i} className={styles.card}
                    onClick={() => { 
                        colletInfo(i, el.title, el.price, el.description, el.img)
                        setModal(true)
                     }}>
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
                        <Image src={`/images/${el.img}`}
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
