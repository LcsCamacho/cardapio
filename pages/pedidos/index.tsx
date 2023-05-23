import styles from './styles.module.scss'
import { GoSearch } from "react-icons/go";
import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import { ProductsDataV2, productsData } from '../../types/types';
// description
// : 
// "Combo Composto por 2 Hambúrguer Saladão, Batata Frita e Refrigerante de 1,5L.O Lanche Contém Pão de Hambúrguer,Hambúrguer, Queijo Mozarela, Alface Picado,Tomate Picado e Maionese."
// i
// : 
// 0
// img
// : 
// "combo2.jpg"
// price
// : 
// "R$59,00"
// title
// : 
// "Combão 2"
export default function Pedidos() {
    const {pedidos} = useSelector((state:any) => state)
    console.log({pedidos})
    return (
        <>
            <Header />
            <div className={styles.container}>
                <table>
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Nome</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pedidos.pedidos.map((item: productsData, i: number) => {
                            console.log(item)
                            return (
                                <tr key={i}>
                                    <td>{String(item.data)}</td>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div> 
        </> 
    )
}

