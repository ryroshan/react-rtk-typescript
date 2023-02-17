export interface POST {
    id: number,
    title: string,
    price: string,
    description: string,
    cetegory: string,
    image: string
} 

export interface PostState {
    loading: boolean,
    error: null | string,
    data: null | POST[]
}