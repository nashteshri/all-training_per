export interface IProduct {
    id: string | Date
    name: string
    price: number | string
    description: string
    imageUrl: string
    isAvailable: boolean
    discount: number |string
    rating: number | string
}