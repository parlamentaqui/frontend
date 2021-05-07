import React, { useState } from 'react';
import { Chart } from 'react-google-charts';

function ChartPie(props) {
  const { expense } = props;
  const [data, setData] = useState([]);
  const rateCurrencyType = expense.expenses_type;
  const rateCurrencyValue = expense.document_value;
  const chartData = [['Currency Type', 'Currency Value']];
  for (let i = 0; i < rateCurrencyType.length; i += 1) {
    chartData.push([rateCurrencyType[i], rateCurrencyValue[i]]);
  }
  const save = () => {
    const tdata = chartData;
    setData(tdata);
  };
  return (
    <Chart
      width="600px"
      height="400px"
      chartType="PieChart"
      loader={<div>Carregando Gráfico</div>}
      data={data}
      options={{
        title: '',
      }}
      rootProps={{ 'data-testid': '1' }}
    />
  );
}

export default ChartPie;
