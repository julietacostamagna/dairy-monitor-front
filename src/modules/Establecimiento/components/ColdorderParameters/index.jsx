import React from 'react'
import GrafLinea from '../../../../components/Graphs/linechart'
import { dataGraphis } from '../../utils/data';

const index = () => {
    return (
        <div className='w-full'>
            <GrafLinea
                seriesData={[
                    dataGraphis[0]["temp_0"].value
                ]}
                axisX={[
                    dataGraphis[0]["temp_0"].time
                ]}
                name={["Temperatura (ºC)"]}
                title="Temperatura de Leche por Hora"
                axisY={true}
            />
            <GrafLinea
                seriesData={[
                    dataGraphis[0]["temp_1"].value, dataGraphis[0]["temp_2"].value
                ]}
                axisX={[
                    dataGraphis[0]["temp_1"].time, dataGraphis[0]["temp_2"].time
                ]}
                name={["Agua (ºC)", "Retorno (ºC)"]}
                title="Temperatura de Lavado por Hora"
                axisY={true}
            />
            <GrafLinea
                seriesData={[
                    dataGraphis[0]["pres_1"].value
                ]}
                axisX={[
                    dataGraphis[0]["pres_1"].time
                ]}
                name={["Nivel (kPa)"]}
                title="Nivel de Vacío por Hora"
                axisY={true}
            />
            <GrafLinea
                seriesData={[
                    dataGraphis[0]["d_in_0"].value, dataGraphis[0]["d_in_1"].value, dataGraphis[0]["d_in_2"].value, dataGraphis[0]["d_in_3"].value
                ]}
                axisX={[
                    dataGraphis[0]["d_in_0"].time, dataGraphis[0]["d_in_1"].time, dataGraphis[0]["d_in_2"].time, dataGraphis[0]["d_in_3"].time
                ]}
                name={["Entrada 1", "Entrada 2", "Entrada 3", "Entrada 4"]}
                title="Estado de entradas digitales por Hora"
                axisY={true}
            />
            <GrafLinea
                seriesData={[
                    dataGraphis[0]["d_out_0"].value, dataGraphis[0]["d_out_1"].value
                ]}
                axisX={[
                    dataGraphis[0]["d_out_0"].time, dataGraphis[0]["d_out_1"].time
                ]}
                name={["Salida 1", "Salida 2"]}
                title="Estado de salidas digitales por Hora"
                axisY={true}
            />
        </div>
    )
}

export default index