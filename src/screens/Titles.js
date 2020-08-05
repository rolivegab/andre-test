import React, { useRef, useEffect } from 'react'
import { GoogleCharts } from 'google-charts';
import { useQuery } from '@apollo/client';
import { NUMBER_OF_TITLES } from '../api/queries/analytics';

const Titles = () => {
  const divRef = useRef()
  const {
    data,
    loading
  } = useQuery(NUMBER_OF_TITLES)
  const drawChart = () => {
    // Standard google charts functionality is available as GoogleCharts.api after load
    const data = GoogleCharts.api.visualization.arrayToDataTable([
      ['Chart thing', 'Chart amount'],
      ['Lorem ipsum', 60],
      ['Dolor sit', 22],
      ['Sit amet', 18]
    ]);
    const grafico = new GoogleCharts.api.visualization.PieChart(divRef.current);
    grafico.draw(data);
  }

  useEffect(() => {
    GoogleCharts.load(drawChart);
  }, [])

  if (loading) {
    return 'Carregando...'
  }

  return (
    <div>
      Número de títulos: {data.numberOfTitles}
      <div id="chartContainer1"></div>
      <div ref={divRef}></div>
    </div>
  )
}

export default Titles