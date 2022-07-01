export interface DataVerticalItem {
  label: string,
  data: Array<number>,
  backgroundColor: string
}

export interface DataVerticalChart {
  labels: Array<string>,
  datasets: Array<DataVerticalItem>
}
