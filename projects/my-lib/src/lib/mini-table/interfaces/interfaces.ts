
export interface Catalog {
  id: string
  name: string
  position?: number
}

export interface SubCatalog {
  id: string
  name: string
  position?: number
  catalog_product: {
    id: string
  }
}
