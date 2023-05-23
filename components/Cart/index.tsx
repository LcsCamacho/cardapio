import styles from './style.module.scss'
import { GiShoppingCart } from "react-icons/gi";
import { GoSearch } from "react-icons/go";
import { useEffect, useState } from "react";
import CartModal from '../CartModal';
import { useSelector } from 'react-redux';
import { productsData, ProductsDataV2 } from '../../types/types';
import { formatBRL } from '../../hooks/useGetCurrency';

export default function Cart() {
    const reduxCart = useSelector((state: any) => state.items)
    const [modal, setModal] = useState(false)
    const [cart, setCart] = useState(reduxCart)
    const [valorTotal, setValorTotal] = useState(0)
    const formatToNumber = (value: string) => {
        return Number(String(value).split(/\D+/).join("").slice(0, 2))
    }

    useEffect(() => {
        setCart(reduxCart)
        setValorTotal(0)

    }, [reduxCart])

    useEffect(() => {
        if (cart.length === 0) return setValorTotal(0)
        console.log(cart)
        cart.items.forEach((element: productsData, i: number) => {
            const price = formatToNumber(element.price as string)
            setValorTotal(state => state + price)
        });
    }, [cart])

    return (
        <div className={styles.container}>
            <CartModal onRequestClose={() => setModal(false)}
                cartData={cart}
                modalOpenProps={modal} />

            <div className={styles.value} onClick={() => {
                setModal(!modal)
            }}>
                <GiShoppingCart size={20} />
                <span>{formatBRL(valorTotal)}</span>
            </div>

        </div>

    )
}

