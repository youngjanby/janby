import { FormControl } from "@angular/forms";



export interface DataTable extends DataTableCreate {
    completed: boolean,
  }

  export interface DataTableCreate {
    category: string,
    subCategory: string,
    brend: string,
    product: string,
    cashback: string,
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