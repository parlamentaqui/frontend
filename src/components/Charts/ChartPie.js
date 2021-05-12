import React from 'react';
import { Chart } from 'react-google-charts';

function ChartPie(props) {
  const { dados } = props;
  const slices = {};
  dados.forEach((element, index) => {
    slices[index] = { color: element.color };
  });
  const data = dados.map((element) => [element.label, element.value]);
  data.unshift(['Tipo de Gasto', 'Valor']);
  return (
    <Chart
      width="100%"
      chartType="PieChart"
      loader={<div>Carregando Gráfico</div>}
      data={data}
      options={{
        title: '',
        slices,
        pieSliceText: 'none',
      }}
      rootProps={{ 'data-testid': '1' }}
    />
  );
}
export default ChartPie;
