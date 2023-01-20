
const formatBRL = (val:number) => new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    
}).format(val)

export {formatBRL}