export interface BookInter{
    id:number,
    name:string,
    price:number,
    number:number
}


//一个自定义类型
export type Books = Array<BookInter>