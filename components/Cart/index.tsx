import styles from './style.module.scss'
import { GiShoppingCart } from "react-icons/gi";
import { GoSearch } from "react-icons/go";


export default function Cart() {

    return (
        <div className={styles.container}>
            <div className={styles.value}>
                <GiShoppingCart size={20} />
                <span>CARRINHO (R$ 0,00)</span>
            </div>
            <div className={styles.search}>
                <GoSearch size={20} />
            </div>
        </div>

    )
}

