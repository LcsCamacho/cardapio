import Image from 'next/image';
import { useEffect, useState } from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import stylesModal from './modal.module.scss';
import styles from './style.module.scss';
import Maps from '../map';

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

    return (
        <header className={styles.container}>
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
                <div className={styles.checkMenu} onClick={() => setMobileMenu(!mobileMenu)}>
                    <p>Mais Informações</p>
                </div>
                {mobileMenu && (
                    <div className={styles.mobileMenu} onClick={() => setMobileMenu(!mobileMenu)}>
                        <div className={styles.mobileMenuContainer}>

                            <Image className={styles.logoMobileMenu}
                                src={'/logo.png'}
                                width={100}
                                height={70}
                                priority
                                alt={'logo'} />
                            <ul>
                                <li id={styles.tipoAtend}
                                    onClick={() => setModalTiposAtend(!modaltiposAtend)}>Tipos de atendimento</li>
                                <li id={styles.horarioAtend}
                                    onClick={() => setmodalHorariosAtend(!modalHorariosAtend)}>Horário de atendimento</li>
                                <li id={styles.formaPagamento}
                                    onClick={() => setmodalFormasPag(!modalFormasPag)}>Formas de Pagamentos</li>
                                <li id={styles.help}
                                    onClick={() => setmodalHelp(!modalHelp)}>Ajuda</li>
                            </ul>
                        </div>
                    </div>)
                }

                <div className={styles.listHeader}>
                    <ul className={styles.listInfos}>
                        <li id={styles.tipoAtend}
                            onClick={() => setModalTiposAtend(!modaltiposAtend)}>Tipos de atendimento</li>
                        <li id={styles.horarioAtend}
                            onClick={() => setmodalHorariosAtend(!modalHorariosAtend)}>Horário de atendimento</li>
                        <li id={styles.formaPagamento}
                            onClick={() => setmodalFormasPag(!modalFormasPag)}>Formas de Pagamentos</li>
                        <li id={styles.help}
                            onClick={() => setmodalHelp(!modalHelp)}>Ajuda</li>
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

                {modaltiposAtend && (
                    <div className={stylesModal.modal}>
                        <div className={stylesModal.modalContainer}>
                            <header>
                                <span>Detalhes</span>
                                <span className={stylesModal.close} onClick={() => setModalTiposAtend(!modaltiposAtend)}>X</span>
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
                {modalHorariosAtend && (
                    <div className={stylesModal.modal} >
                        <div className={stylesModal.modalContainer}>
                            <header>
                                <span>Horário de Funcionamento</span>
                                <span className={stylesModal.close} onClick={() => setmodalHorariosAtend(!modalHorariosAtend)}>X</span>
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
                {modalFormasPag && (
                    <div className={stylesModal.modalFormaPagamento}>
                        <div className={stylesModal.modal} >
                            <div className={stylesModal.modalContainer}>
                                <header>
                                    <span>Formas de Pagamento</span>
                                    <span className={stylesModal.close} onClick={() => setmodalFormasPag(!modalFormasPag)}>X</span>
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
                {modalHelp && (
                    <div className={stylesModal.modalHelp}>
                        <div className={stylesModal.modal} >
                            <div className={stylesModal.mapContainer}>
                                <header>
                                    <span>Localização</span>
                                    <span className={stylesModal.close} onClick={() => setmodalHelp(!modalHelp)}>X</span>
                                </header>
                                <main className={stylesModal.helpMain}>
                                    <p>Avenida Doutor Carlos Burgos, 3380, Loteamento Nardini, Amparo - SP, 13900000</p>
                                    <Maps />
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
