import styles from './style.module.scss'
import { BsFillTelephoneFill } from 'react-icons/bs'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import stylesModal from './modal.module.scss';

export default function Header() {
    const [modaltiposAtend, setModalTiposAtend] = useState(false)
    const [modalHorariosAtend, setmodalHorariosAtend] = useState(false)
    const [modalFormasPag, setmodalFormasPag] = useState(false)
    const [modalHelp, setmodalHelp] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(false)
    const [date, setDate] = useState<number>(0)

    useEffect(() => {
        setDate(Number(new Date().toLocaleTimeString().slice(0, 2)))
    }, [])

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

    function openMobileMenu() {
        if (mobileMenu === false) {
            setMobileMenu(true)
            return
        }
        else {
            setMobileMenu(false)
            return
        }
    }

    function closeMobileMenu() {
        setMobileMenu(false)
    }

    return (
        <header  className={styles.container}>
            <div className={styles.contentHeader}>
                <div className={styles.tel}>
                    <BsFillTelephoneFill />
                    <span>19998566555</span>
                </div>
                <div className={styles.status}>
                    {date < 24 && date > 18 ? 
                    <span className={styles.open}>Aberto</span> : 
                    <span className={styles.close}>Fechado</span>
                    }
                </div>
            </div>
            <div className={styles.subHeader}>
                <Image className={styles.logo}
                    src={'/logo.png'}
                    width={160}
                    height={80}
                    priority
                    alt={'logo'} />
                <div className={styles.checkMenu} onClick={openMobileMenu}>
                    Mais Informações
                </div>
                {mobileMenu === true && (
                    <div className={styles.mobileMenu} onClick={closeMobileMenu}>
                        <div className={styles.mobileMenuContainer}>

                            <Image className={styles.logo}
                                src={'/logo.png'}
                                width={100}
                                height={70}
                                priority
                                alt={'logo'} />
                            <ul>
                                <li id={styles.tipoAtend}
                                    onClick={infos.modalTiposAtendimento.open}>Tipos de atendimento</li>
                                <li id={styles.horarioAtend}
                                    onClick={infos.modalHorariosAtend.open}>Horário de atendimento</li>
                                <li id={styles.formaPagamento}
                                    onClick={infos.modalFormasPag.open}>Formas de Pagamentos</li>
                                <li id={styles.help}
                                    onClick={infos.modalHelp.open}>Ajuda</li>
                            </ul>
                        </div>
                    </div>)
                }

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
                    <div className={stylesModal.modal}>
                        <div className={stylesModal.modalContainer}>
                            <header>
                                <span>Detalhes</span>
                                <span className={stylesModal.close} onClick={infos.modalTiposAtendimento.close}>X</span>
                            </header>
                            <main>
                                <div className={stylesModal.modalCard}>
                                    <Image src={'/reception-bell.png'}
                                        width={50}
                                        height={80}
                                        priority
                                        alt={'reception'} />
                                    <p>Atendimento?</p>
                                    <p>Sim</p>
                                </div>
                                <div className={stylesModal.modalCard}>
                                    <Image src={'/entrega.png'}
                                        width={50}
                                        height={80}
                                        priority
                                        alt={'entrega'} />
                                    <p>Entrega?</p>
                                    <p>Sim</p>
                                </div>
                                <div className={stylesModal.modalCard}>
                                    <Image src={'/take-away.png'}
                                        width={50}
                                        height={80}
                                        priority
                                        alt={'take'} />
                                    <p>Retirada?</p>
                                    <p>Sim</p>
                                </div>
                            </main>
                        </div>
                    </div>
                )}
                {modalHorariosAtend === true && (
                    <div className={stylesModal.modal} >
                        <div className={stylesModal.modalContainer}>
                            <header>
                                <span>Horário de Funcionamento</span>
                                <span className={stylesModal.close} onClick={infos.modalHorariosAtend.close}>X</span>
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
                    <div className={stylesModal.modalFormaPagamento}>
                        <div className={stylesModal.modal} >
                            <div className={stylesModal.modalContainer}>
                                <header>
                                    <span>Formas de Pagamento</span>
                                    <span className={stylesModal.close} onClick={infos.modalFormasPag.close}>X</span>
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
                    <div className={stylesModal.modalHelp}>
                        <div className={stylesModal.modal} >
                            <div className={stylesModal.mapContainer}>
                                <header>
                                    <span>Localização</span>
                                    <span className={stylesModal.close} onClick={infos.modalHelp.close}>X</span>
                                </header>
                                <main className={stylesModal.helpMain}>
                                    <p>Avenida Doutor Carlos Burgos, 3380, Loteamento Nardini, Amparo - SP, 13900000</p>
                                    <iframe className={stylesModal.map}
                                        src="https://www.google.com/maps?q=Avenida Doutor Carlos Burgos, 3380, Loteamento Nardini, Amparo - SP, 13900000, Ney Lanches Amparo&amp;output=embed"
                                        width="100%" height="450" />
                                </main>
                            </div>
                        </div>
                    </div>
                )}

                <h1 className={styles.title}>Ney Lanches Amparo</h1>
            </div>
        </header>
    )
}
