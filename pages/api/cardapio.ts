// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const cardapio = [
  {
      'description': 'Combo Composto por 2 Hambúrguer Saladão, ' +
          'Batata Frita e Refrigerante de 1,5L.' +
          'O Lanche Contém Pão de Hambúrguer,' +
          'Hambúrguer, Queijo Mozarela, Alface Picado,' +
          'Tomate Picado e Maionese.',
      'title': 'Combão 2',
      'price': 'R$59,00',
      'img': 'combo2.jpg'

  },
  {
      'description': 'Combo Composto por 3 Hambúrguer Saladão, Batata Frita e Refrigerante de 1,5L. O Lanche Contém Pão de Hambúrguer, Hambúrguer, Queijo Mozarela, Alface Picado, Tomate Picado e Maionese.',
      'title': 'Combão 3',
      'price': 'R$59,00',
      'img': 'combo3.jpg'
  },
  {
      'description': 'Combo Composto por 4 Hambúrguer Saladão, Batata Frita e Refrigerante de 1,5L. O Lanche Contém Pão de Hambúrguer, Hambúrguer, Queijo Mozarela, Alface Picado, Tomate Picado e Maionese.',
      'title': 'Combão 4',
      'price': 'R$81,00',
      'img': 'combo4.jpg'
  },
  {
      'description': 'Combo Composto por 5 Hambúrguer Saladão, Batata Frita e Refrigerante de 1,5L. O Lanche Contém Pão de Hambúrguer, Hambúrguer, Queijo Mozarela, Alface Picado, Tomate Picado e Maionese.',
      'title': 'Combão 5',
      'price': 'R$90,00',
      'img': 'combo5.jpg'
  },
  {
      'description': 'Combo Composto por 6 Hambúrguer Saladão, Batata Frita e Refrigerante de 1,5L. O Lanche Contém Pão de Hambúrguer, Hambúrguer, Queijo Mozarela, Alface Picado, Tomate Picado e Maionese.',
      'title': 'Combão 6',
      'price': 'R$99,00',
      'img': 'combo6.jpg'
  },
  {
      'description': 'Combo Composto por 4 Max Bacon, Batata Frita e Refrigerante de 1,5L. O Lanche Contém Pão de Hambúrguer, Hambúrguer, Bacon, Queijo Mozarela, Alface Picado, Tomate Picado e Maionese.',
      'title': 'Combão Max Bacon',
      'price': 'R$96,00',
      'img': 'combobc.jpg'
  },
  {
      'description': 'Combo Composto por 2 Gourmet Salada, 2 Fritas Individuais e 2 Refrigerante de 200ml. O Lanche Contém Pão de Hambúrguer, Hambúrguer Artesanal, Queijo Mozarela, Cebola, Alface Picado, Tomate em Rodelas e Maionese.',
      'title': 'Combão Casal',
      'price': 'R$96,00',
      'img': 'combocasal.jpg'
  },
  {
      'description': 'Combo Composto por 2 Hambúrguer Saladão, 2 Max Bacon, Batata Frita e Refrigerante de 1,5L.',
      'title': 'Combo do Mister',
      'price': 'R$91,00',
      'img': 'combomr.jpg'
  },
  {
      'description': 'Combo Composto por 1 Cheese Burguer com Cheddar e Bacon e 1 Hambúrguer Saladão Duplo, 2 Fritas Individuais e 2 Refrigerantes de 200ml.',
      'title': 'Combo Duo',
      'price': 'R$67,00',
      'img': 'comboduo.jpg'
  },
  {
      'description': 'Combo Composto por 3 Gourmet Salada, Batata Frita e Refrigerante de 1,5L. O Lanche Contém Pão de Hambúrguer, Hambúrguer Artesanal, Queijo Mozarela, Cebola, Alface Picado, Tomate em Rodelas e Maionese.',
      'title': 'Combo Gourmet',
      'price': 'R$84,00',
      'img': 'combogourmet.jpg'
  },
  {
      'description': 'Combo Composto por 1 Burguinho, 4 Nuggets ou Batata Smile, Suco Kapo e Kinder Ovo. O Lanche Contém Pão de Hambúrguer, Hambúrguer, Queijo Cheddar e Maionese.',
      'title': 'Combo Kids',
      'price': 'R$34,00',
      'img': 'combokids.jpg'
  },
  {
      'description': 'Combo Composto por 1 Cheese Bacon, 1 Cheese Salada, 1 Cheese Cheddar, 1 Cheese Catupiry, Batata Frita com Cheddar e Bacon e Refrigerante de 1,5L.',
      'title': 'Combo Na Caixa',
      'price': 'R$87,00',
      'img': 'combocaixa.jpg'
  },
  {
      'description': 'Combo Composto por 6 Cheese Bacon, Batata Frita e Refrigerante de 1,5L. O Lanche Contém Pão de Hambúrguer, Hambúrguer, Bacon, Alface Picado, Tomate Picado e Maionese.',
      'title': 'Combo Top Bacon',
      'price': 'R$107,00',
      'img': 'combotop.jpg'
  },
  {
      'description': 'Combo Composto por 1 Max Tudo, 1 Max Bacon 1 Hambúrguer Saladão, 1 Cheese Burguer, Batata Frita e Refrigerante de 1,5L.',
      'title': 'Combo Top Bacon',
      'price': 'R$96,00',
      'img': 'combofour.jpg'
  },
  {
      'description': 'Combo Composto por 1 Cheese Bacon, 1 Cheese Catupiry, 1 Cheese Cheddar, 1 Cheese Egg, 2 Cheese Salada, Batata Frita e Refrigerante de 1,5L.',
      'title': 'Pitz Burguers',
      'price': 'R$102,00',
      'img': 'combopitz.jpg'
  },
]

export default function handler(req: NextApiRequest,res: NextApiResponse) {
  res.status(200).json(
    { cardapio }
  )
}
