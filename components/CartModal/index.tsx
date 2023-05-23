import style from './style.module.scss'
import Modal from 'react-modal'
import Image from 'next/image';
import { Key, useEffect, useState } from "react";
import { productsData, ProductsDataV2  } from '../../types/types';
import { useDispatch } from 'react-redux';
import { removeItemReducer } from '../../features/redux/cart-slice';
import { formatBRL } from '../../hooks/useGetCurrency';
import { addItemReducer } from '../../features/redux/pedidos-slice';
interface ModalProps {
    modalOpenProps: boolean;
    onRequestClose: () => void;
    cartData: ProductsDataV2
}
const dataFormatadaComHora = ` ${new Date().toLocaleDateString()} ${new Date().getHours()}:${new Date().getMinutes()}`

export default function CartModal({ modalOpenProps, onRequestClose, cartData }: ModalProps) {
    const dispatch = useDispatch();
    const [modal, setModal] = useState(false)
    const [cart, setCart] = useState(cartData)
    const [valorTotal, setValorTotal] = useState(0)
    const formatToNumber = (value: string) => {
        return Number(String(value).split(/\D+/).join("").slice(0, 2))
    }

    useEffect(() => {
        setModal(modalOpenProps)
    }, [modalOpenProps])

    useEffect(() => {
        setCart(cartData)
    }, [cartData])

    useEffect(() => {
        setValorTotal(0)
        if(cart.items.length === 0) return setValorTotal(0)
        console.log(cart)
        cart.items.forEach((element: productsData, i: number) => {
            const price = formatToNumber(element.price as string)
            setValorTotal(state => state + price)
        });
    }, [cart])

    const removeItem = (index: number) => {
        dispatch(removeItemReducer(index))
        setCart(cartData)
    }

    return modal ? (
        <Modal
            isOpen={modal}
            onRequestClose={onRequestClose}
            contentLabel="Modal"
            overlayClassName={style.modalOverlay}
            className={style.modal}
            ariaHideApp={false}
        >
            <div className={style.modalContent}>
                <header>
                    <span>SEU PEDIDO</span>
                    <span onClick={onRequestClose} className={style.close}>X</span>
                </header>
                <main>
                    {cart.items.length === 0 ? <span>Seu pedido está vazio :(</span> :
                        <table>
                            <thead>
                                <tr>
                                    <th>Imagem</th>
                                    <th>Nome</th>
                                    <th>Valor</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.items.map((item: productsData, index: number) => (
                                    <tr key={index}>
                                        <td>
                                            <Image src={"/images/" + item.img}
                                                alt={item.title}
                                                height={50}
                                                width={50}
                                                priority
                                            />
                                        </td>
                                        <td>{item.title}</td>
                                        <td>{item.price}</td>
                                        <td className={style.close}
                                            onClick={() => {
                                                removeItem(index)
                                            }}>
                                            <p>X</p>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    }
                    <button type='button'
                        onClick={() => dispatch(addItemReducer(cart.items.map((item: productsData, index) => {
                            dispatch(removeItemReducer(index))
                            return {
                                title: item.title,
                                price: item.price,
                                img: item.img,
                                description: item.description,
                                i: item.i,
                                data: dataFormatadaComHora
                            }
                        })))}
                        className={style.finalizar}>
                        Finalizar {formatBRL(valorTotal)}
                    </button>
                </main>
            </div>
        </Modal >) : null

}
