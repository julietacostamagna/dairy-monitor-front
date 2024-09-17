import React from 'react'
import GrafLinea from '../../../../components/Graphs/linechart'

const index = () => {

    const data1 = [
        {
            name: 'Temperatura',
            data: [3, 10, 30, 25, 3, 10, 30, 25],
            horas: ['09:00', '11:00', '12:00', '15:00', '09:00', '11:00', '12:00', '15:00']
        },
    ];

    const data2 = [
        {
            name: '',
            data: [4, 7, 2, 9, 3, 8, 2, 3],
            horas: ['09:00', '11:00', '12:00', '15:00', '09:00', '11:00', '12:00', '15:00']
        },
        {
            name: '',
            data: [6, 10, 1, 3, 5, 8, 7, 9],
            horas: ['09:00', '11:00', '12:00', '15:00', '09:00', '11:00', '12:00', '15:00']
        },
        {
            name: '',
            data: [2, 3, 4, 2, 2, 3, 4, 3],
            horas: ['09:00', '11:00', '12:00', '15:00', '09:00', '11:00', '12:00', '15:00']
        },
    ];

    const data3 = [
        {
            name: 'Temperatura',
            data: [3, 10, 30, 25, 3, 10, 30, 25],
            horas: ['09:00', '11:00', '12:00', '15:00', '09:00', '11:00', '12:00', '15:00']
        },
    ];

    return (
        <div className='w-full'>
            <GrafLinea seriesData={data1}
                axisX={data1[0].horas}
                title="Tensiones (V)"
                axisY={false} />
            <GrafLinea seriesData={data2}
                axisX={data2[0].horas}
                title="Corrientes (A)"
                axisY={false} />
            <GrafLinea seriesData={data3}
                axisX={data3[0].horas}
                title="Frecuencia (Hz)"
                axisY={false} />
        </div>
    )
}

export default index