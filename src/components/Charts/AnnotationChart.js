import React from 'react';
import { Chart } from 'react-google-charts';

function AnnotationChat(props) {
  const { growth } = props;
  const data = growth.map((element) => [`${element.year}`, element.value]);
  data.unshift(['Ano', 'Declaração']);
  return growth ? (
    <Chart
      width="300px"
      height="250px"
      chartType="Bar"
      loader={<div>Carregando Gráfico</div>}
      data={data}
      options={{
        colors: ['Orange', 'Salmon'],
        chartArea: { width: '100%' },
      }}
      rootProps={{ 'data-testid': '2' }}
    />
  ) : (
    ''
  );
}

export default AnnotationChat;
