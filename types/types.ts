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
type productsData = {
    i: number,
    price: string;
    title: string;
    description: string;
    img: string;
}
interface prodProps {
    prods?:productsData[] | any
}



export type { CardapioProps, ComboProps, prodProps }