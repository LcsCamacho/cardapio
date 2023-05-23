interface CardapioProps {
    description?: string;
    img?: string;
    price:  string | number;
    title: string
}

interface ComboProps {
    cardapioData: {
        cardapio: CardapioProps[]
    }
}
type productsData = {
    i: number,
    price: string | number;
    title: string;
    description: string;
    img: string;
    data?: Date;
}
interface prodProps {
    prods?:productsData[] | any
}

export interface ProductsDataV2 {
    
    items: productsData[]
}




export type { CardapioProps, ComboProps, prodProps, productsData }