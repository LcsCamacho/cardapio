import styles from './style.module.scss'
import { GiShoppingCart } from "react-icons/gi";
import { GoSearch } from "react-icons/go";
import { useState } from "react";
import CartModal from '../CartModal';
import { ComboProps } from '../../types/types';


export default function Cart() {
    const [modal, setModal] = useState(false)

    function modalControl() {
        if (modal === false) setModal(true)
        else setModal(false)
    }

    return (
        <div className={styles.container}>
            {modal === true ? <CartModal modalOpenProps={modal} /> : <></>}

            <div className={styles.value} onClick={modalControl}>
                <GiShoppingCart size={20} />
                <span>CARRINHO (R$ 0,00)</span>
            </div>
            <div className={styles.search}>
                <GoSearch size={20} />
            </div>
        </div>

    )
}

