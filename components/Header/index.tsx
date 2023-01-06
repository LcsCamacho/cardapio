import styles from './style.module.scss'
import { BsFillTelephoneFill } from 'react-icons/bs'
import Image from 'next/image';
import { useState } from 'react';
import Modal from './modal/index';
export default function Header() {
    const [modaltiposAtend, setModalTiposAtend] = useState(false)
    const [modalHorariosAtend, setmodalHorariosAtend] = useState(false)
    const [modalFormasPag, setmodalFormasPag] = useState(false)
    const [modalHelp, setmodalHelp] = useState(false)
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

    const [mobileMenu, setMobileMenu] = useState(false)
   
    const date = Number(new Date().toLocaleTimeString())
   
    
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
        <header className={styles.container}>
            <div className={styles.contentHeader}>
                <div className={styles.tel}>
                    <BsFillTelephoneFill />
                    <span>19998566555</span>
                </div>
                <div className={styles.status}>
                    {
                        date >= 18 && date <= 23.9 ?
                            <span className={styles.open}>Aberto</span> :
                            <span className={styles.close}>Fechado</span>
                    }
                </div>
            </div>
            <div className={styles.subHeader}>
                <Image className={styles.logo}
                    src={'/../public/logo.png'}
                    width={160}
                    height={80}
                    priority 
                    alt={'logo'}/>
                <div className={styles.checkMenu} onClick={openMobileMenu}>
                    Mais Informações
                </div>
                {mobileMenu === true && (
                    <div className={styles.mobileMenu} onClick={closeMobileMenu}>
                        <div className={styles.mobileMenuContainer}>

                            <Image className={styles.logo}
                                src={'/../public/logo.png'}
                                width={100}
                                height={70} 
                                priority
                                alt={'logo'}/>
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
                <Modal/>
                <h1 className={styles.title}>Ney Lanches Amparo</h1>
            </div>
        </header>
    )
}
