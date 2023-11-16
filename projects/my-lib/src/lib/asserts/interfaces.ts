import { FormControl } from "@angular/forms";

export interface productData extends Product {
  data: Product[]
}

export interface Product extends ProductCreate {
    isReady: boolean
  }

  export interface ProductCreate {
    id: string
    name: string
    nameFrom1C: string
    codeFrom1C: string
    price: number
    volume: string
    isRetailAllowed: boolean
    brand: {
      id: string
      name: string
      icon: string
    }
    
    images: string [];
    }

  export type ChangeTypeOfKeys<
  T extends object,
  NewType
> = {
  [key in keyof T]: NewType
}


export interface DataPagination {
  pageIndex: number,
  pageSize: number,
  length: number,
}