import styles from './style.module.scss'
import Modal from 'react-modal'
import useAppData from '../../context/hook/useAppData';
import { useState } from "react";
import { prodProps } from '../../types/types';

interface ModalProps{
    modalOpenProps:boolean;
}

export default function CartModal(props:ModalProps) {
    var { modalOpenProps } = props
    const [modal, setModal] = useState(modalOpenProps)
    const ctx = useAppData()
    var { prods }: prodProps = ctx
    console.log(prods)

    function closeModal() {
         setModal(false)
    }
    return (
        <>
            <Modal
                isOpen={modal}
                onRequestClose={closeModal}
                contentLabel="Modal"
                overlayClassName={styles.modalOverlay}
                className={styles.modal}
                ariaHideApp={false}
            >
                <div className={styles.modalContent}>
                    <header>
                        <span>SEU PEDIDO</span>
                        <span onClick={closeModal} className={styles.close}>X</span>
                    </header>
                    <main>
                        <span>Seu pedido está vazio :(</span>
                    </main>
                </div>
            </Modal>
        </>
    )
}