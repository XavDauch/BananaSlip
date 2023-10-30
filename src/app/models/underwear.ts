import { Type } from "./types";

export type Gender = 'man'| 'woman' | 'unisex';

export interface Underwear {
    id: number;
    name: string;
    gender: Gender;
    color: string;
    size: string;
    price: number;
    description: string;
    image: string;
    type: Type;
}
    // constructor(id: number, name: string, category: Category, color: string, size: string, price: number, description: string, image: string) {

// export class Slip {
//     id: number;
//     name: string;
//     category: Category;



//     constructor(id: number, name: string, category: Category) {
//         this.id = id;
//         this.name = name;
//         this.category = category;
//     }



