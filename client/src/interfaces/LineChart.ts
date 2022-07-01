export interface DataSetItem {
  label: string,
  data: Array<number>,
  borderColor: string,
  backgroundColor: string
}

export interface DataLineChart {
  labels: Array<string>,
  datasets: Array<DataSetItem>
}
