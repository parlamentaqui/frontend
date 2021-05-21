import React from 'react';
import { Chart } from 'react-google-charts';

function AnnotationChat(props) {
  const { growth } = props;
  return growth ? (
    <Chart
      width="300px"
      height="250px"
      chartType="Bar"
      loader={<div>Carregando Gráfico</div>}
      data={[
        ['Ano', 'Declaração'],
        [growth[0].year, growth[0].value],
        [growth[1].year, growth[1].value],
      ]}
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
