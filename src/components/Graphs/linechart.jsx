import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useContext } from 'react';
import { MainContext } from '../../context/MainContext';

const GrafLinea = ({ seriesData, axisX, title, axisY, name }) => {
    const { darkMode } = useContext(MainContext);

    const convertDatesToTimestamps = (dates) => {
        return dates.map(date => new Date(date).getTime());
    };

    const formattedAxisX = convertDatesToTimestamps(axisX.flat());

    const formattedSeriesData = seriesData.map((series, index) => 
        series.map((value, idx) => [formattedAxisX[idx], value])
    );

    const options = {
        chart: {
            type: 'line',
            backgroundColor: darkMode ? '#373638' : 'white',
        },
        title: {
            text: title,
            align: 'center',
            style: {
                color: darkMode ? 'white' : 'black',
            },
        },
        tooltip: {
            shared: true,
            xDateFormat: '%d/%m/%Y %H:%M:%S',
        },
        plotOptions: {
            line: {
                marker: {
                    enabled: false, 
                },
                dataLabels: {
                    enabled: false,
                },
            },
        },
        yAxis: {
            title: {
                text: 'Valor',
            },
            labels: {
                style: {
                    color: darkMode ? 'white' : 'black',
                },
            },
            enabled: axisY !== false,
        },
        xAxis: {
            type: 'datetime',
            labels: {
                style: {
                    color: darkMode ? 'white' : 'black',
                },
                formatter: function() {
                    return Highcharts.dateFormat('%d/%m/%Y', this.value); 
                },
            },
        },
        series: formattedSeriesData.map((item, index) => ({
            name: name[index] || `Serie ${index + 1}`,
            data: item,
            connectNulls: true,
        })),
    };

    return (
        <div className='p-2'>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
};

export default GrafLinea;
