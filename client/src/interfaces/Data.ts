export interface DataItem { 
    name: string,
    blue: number,
    orange: number,
}

export interface Data {
  map(arg0: (item: DataItem) => string): string[];
  data: Array<DataItem>,
}