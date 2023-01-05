import styles from './style.module.scss'
import { useState } from 'react';
import Image from 'next/image';



export default function Modal() {
    const [modaltiposAtend, setModalTiposAtend] = useState(false)
    const [modalHorariosAtend, setmodalHorariosAtend] = useState(false)
    const [modalFormasPag, setmodalFormasPag] = useState(false)
    const [modalHelp, setmodalHelp] = useState(false)
    const relacaoHorarios = [
        {
            'abre': '18:00',
            'fecha': '00:00',
            'dia': 'Segunda'
        },
        {
            'abre': '18:00',
            'fecha': '00:00',
            'dia': 'Terça'
        },
        {
            'abre': '18:00',
            'fecha': '00:00',
            'dia': 'Quarta'
        },
        {
            'abre': '18:00',
            'fecha': '00:00',
            'dia': 'Quinta'
        },
        {
            'abre': '18:00',
            'fecha': '00:00',
            'dia': 'Sexta'
        },
        {
            'abre': '18:00',
            'fecha': '00:00',
            'dia': 'Sabado'
        },
        {
            'abre': '18:00',
            'fecha': '00:00',
            'dia': 'Domingo'
        },
    ]
    const infos = {
        'modalTiposAtendimento': {
            open: () => {
                setModalTiposAtend(true)
            },
            close: () => {
                setModalTiposAtend(false)
            }
        },
        'modalHorariosAtend': {
            open: () => {
                setmodalHorariosAtend(true)
            },
            close: () => {
                setmodalHorariosAtend(false)
            }
        },
        'modalFormasPag': {
            open: () => {
                setmodalFormasPag(true)
            },
            close: () => {
                setmodalFormasPag(false)
            }
        },
        'modalHelp': {
            open: () => {
                setmodalHelp(true)
            },
            close: () => {
                setmodalHelp(false)
            }
        }
    }

    return (
        <>

            <div className={styles.listHeader}>
                <ul className={styles.listInfos}>
                    <li id={styles.tipoAtend}
                        onClick={infos.modalTiposAtendimento.open}>Tipos de atendimento</li>
                    <li id={styles.horarioAtend}
                        onClick={infos.modalHorariosAtend.open}>Horário de atendimento</li>
                    <li id={styles.formaPagamento}
                        onClick={infos.modalFormasPag.open}>Formas de Pagamentos</li>
                    <li id={styles.help}
                        onClick={infos.modalHelp.open}>Ajuda</li>
                </ul>
                <div className={styles.infos}>
                    <ul>
                        <li>
                            <span>Entrega</span>
                            <span>60 min</span>
                        </li>
                        <li>
                            <span>Retirada</span>
                            <span>20 min</span>
                        </li>
                        <li>
                            <span>Pedido mínimo</span>
                            <span>R$ 10,00</span>
                        </li>
                    </ul>
                </div>
            </div>
            {modaltiposAtend === true && (
                <div className={styles.modal} onClick={infos.modalTiposAtendimento.close}>
                    <div className={styles.modalContainer}>
                        <header>
                            <span>Detalhes</span>
                            <span>X</span>
                        </header>
                        <main>
                            <div className={styles.modalCard}>
                                <Image src={'/../public/reception-bell.png'}
                                    width={50}
                                    height={80}
                                    priority />
                                <p>Atendimento?</p>
                                <p>Sim</p>
                            </div>
                            <div className={styles.modalCard}>
                                <Image src={'/../public/entrega.png'}
                                    width={50}
                                    height={80}
                                    priority />
                                <p>Entrega?</p>
                                <p>Sim</p>
                            </div>
                            <div className={styles.modalCard}>
                                <Image src={'/../public/take-away.png'}
                                    width={50}
                                    height={80}
                                    priority />
                                <p>Retirada?</p>
                                <p>Sim</p>
                            </div>
                        </main>
                    </div>
                </div>
            )}
            {modalHorariosAtend === true && (
                <div className={styles.modal} onClick={infos.modalHorariosAtend.close}>
                    <div className={styles.modalContainer}>
                        <header>
                            <span>Horário de Funcionamento</span>
                            <span>X</span>
                        </header>
                        <main>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Dia</th>
                                        <th>Abre:</th>
                                        <th>Fecha:</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {relacaoHorarios.map((element, i) => (
                                        <tr key={i}>
                                            <td>{element.dia}</td>
                                            <td>{element.abre}</td>
                                            <td>{element.fecha}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </main>
                    </div>
                </div>

            )}
            {modalFormasPag === true && (
                <div className={styles.modalFormaPagamento}>
                    <div className={styles.modal} onClick={infos.modalFormasPag.close}>
                        <div className={styles.modalContainer}>
                            <header>
                                <span>Formas de Pagamento</span>
                            </header>
                            <main>
                                <span>Pix</span>
                                <span>Cartão</span>
                                <span>Dinheiro</span>
                            </main>
                        </div>
                    </div>
                </div>
            )}
            {modalHelp === true && (
                <div className={styles.modalHelp}>
                    <div className={styles.modal} onClick={infos.modalHelp.close}>
                        <div className={styles.modalContainer}>
                            <header>
                                <span>Ajuda</span>
                            </header>
                            <main>
                                <h1>Em Construção...</h1>
                            </main>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}