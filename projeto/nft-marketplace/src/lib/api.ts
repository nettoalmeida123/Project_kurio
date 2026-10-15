import axios from 'axios'
export const api=axios.create({baseURL:'/api',timeout:10000})
export type NFT={id:number;name:string;artist:string;price:string;stock:number;image:number;category:string;edition:number}
export type CartItem={id:number;quantity:number}
export type User={id:string;name:string;email:string}
export type Wallet={id:string;name:string;address:string;network:string}
export type Order={id:string;status:'confirmed'|'declined';items:CartItem[];total:string;tx:string;createdAt:string}
