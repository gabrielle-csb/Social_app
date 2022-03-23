namespace Paginate {
  export type Params<T> = {
    pageSize: number
    pageNumber: number
    totalCount: number
    data: T[]
  }
  export type Result<T> = {
    pageCount: number
    pageSize: number
    pageNumber: number
    totalCount: number
    data: T[]
  }
}

export class Paginate {
  static do<T>({ pageNumber, pageSize, data, totalCount }: Paginate.Params<T>): Paginate.Result<T> {
    return {
      pageCount: totalCount > 0 ? Math.ceil(totalCount / pageSize) : 0,
      pageSize,
      pageNumber,
      totalCount,
      data
    }
  }
}
