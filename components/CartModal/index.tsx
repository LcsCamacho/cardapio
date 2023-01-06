import styles from './styles.module.scss'
import Modal from 'react-modal'
export default function name(props) {
    var { modalOpenProps } = props

    function closeModal() {
        modalOpenProps = false
    }
    return (
        <Modal
            isOpen={modalOpenProps}
            onRequestClose={closeModal}
            contentLabel="Modal"
            overlayClasName={styles.modalOverlay}
            className={styles.modal}
        >
            <div className={styles.modalContent}>
                <header>
                    <span>SEU PEDIDO</span>
                    <span className={styles.close}>X</span>
                </header>
                <main>
                    <span>Seu pedido está vazio :(</span>
                </main>
            </div>

        </Modal>
    )
}