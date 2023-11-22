import { FormArray, FormControl, FormGroup } from "@angular/forms";

export interface productData extends Product {
  data: Product[]
}

export interface Product extends ProductCreate {
    tags: Fruit[];
    isReady: boolean
  }

  interface Categories {
    categoryName: string
    categoryValue: string
  }

  interface Character {
    characterName: string
    characgerValue: string
  }

  interface Brand {
    id: string;
    name: string;
    icon: string
  }

  export interface ProductData {
    isRetailAllowed: boolean,
    volume: string,
    id: string,
    isReady: boolean,
    codeFrom1C: string,
    nameFrom1C: string,
    name: string,
    brand: Brand,
    Article: string,
    description: string,
    images: string[],
    price: number,
    categories: Categories,
    volumes: Volumes[],
    characters: Character[],
    tags: Fruit[]
  }

  interface Volumes {
    volume: string
  }

  export interface Fruit {
    name: string
  }

  export interface dataPropsInDialog {
    index: number
    product: ProductData
  }

  export interface ProductForm {
    nameFrom1C: FormControl<string>
    name: FormControl<string>
    brand: FormControl<string>
    Article: FormControl<string>
    description: FormControl<string>
    images: FormArray<FormControl<string>>
    price: FormControl<string>
    categories: FormGroup<{key: FormControl<string>, value: FormControl<string>}>
    volumes: FormArray<FormControl<string>>
    characters: FormArray<FormControl>
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

export interface DataPagination {
  pageIndex: number,
  pageSize: number,
  length: number,
}