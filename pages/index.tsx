import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Header from '../components/Header'
import { GetServerSideProps} from 'next'
import { useState } from 'react';
import Cards from '../components/Cards'

const combos = [
  'Combos Familias',
  'Promoções',

]
// 'Gourmet Pub',
//   'Hamburgueres',
//   'Frangos',
//   'Churrascos',
//   'Hot-Dogs',
//   'Diversos',
//   'Porções',
//   'Sucos Naturais',
//   'Refigerantes',
//   'Cerveja',
//   'Maionese',

interface CardapioProps {
  description: string;
  img: string;
  price: string;
  title: string
}

interface ComboProps {
  cardapioData: {
    cardapio: CardapioProps[]
  }
}
export default function Home({ cardapioData }: ComboProps) {
  const [comboFamily, setComboFamily] = useState(false)
  const [promocoes, setPromocoes] = useState(false)
  const states = [
    comboFamily,
    promocoes
  ]
  const functions = [
    'comboFamily',
    'promocoes'
  ]

  const control:any = {

     'promocoes':() => {
      if (promocoes === false) setPromocoes(true)
      else setPromocoes(false)
    },
    'comboFamily':() => {
      if (comboFamily === false) setComboFamily(true)
      else setComboFamily(false)
    }
  }

  return (
    <>
      <Head>
        <title>Cardápio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className={styles.main}>
        <div className={styles.mainContainer}>
          <ul className={styles.combos}>

            {combos.map((el: string, i: number) => (
              <li key={i}>{el}</li>
            ))}

          </ul>

          <div className={styles.cardapio}>
            {
              combos.map((el: string, i: number) => (
                <div key={i} className={styles.product}>
                  <div className={styles.titleProduct} onClick={control[functions[i]]}>
                    <span>{el}</span>
                    {states[i] === false ? <span>+</span> : <span>-</span>}
                  </div>
                  {states[i] === true && (
                    <Cards cardapioData={cardapioData} />
                  )}
                </div>
              ))
            }
          </div>
        </div>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  var cardapioData
  const resp = await fetch('http://localhost:3000/api/cardapio')
  .then((res) => res.json())
  .then((data) => cardapioData = data)
  .catch(err => console.log(err))
  

  return {
    props: {
      cardapioData
    },
  }
}
