export interface DataPieItem {
  label: string,
  data: Array<number>,
  borderColor: Array<string>,
  backgroundColor: Array<string>,
  borderWidth: number
}

export interface DataPieChart {
  labels: Array<string>,
  datasets: Array<DataPieItem>
}
