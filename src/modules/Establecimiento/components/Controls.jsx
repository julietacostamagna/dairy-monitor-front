import React from 'react'
import CardCustom from '../../../components/CardCustom'
import { MdModeEdit } from "react-icons/md";
import { IconButton, Switch, TextField } from '@mui/material'
import { FaTemperatureQuarter } from "react-icons/fa6";
import { FaPowerOff } from "react-icons/fa";

const Controls = () => {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  return (
    <div className='w-full flex flex-wrap p-5 gap-2 justify-center'>
      <CardCustom className={'w-full flex flex-wrap justify-center md:w-1/3 text-black dark:text-white bg-zinc-300 relative p-3 rounded-md'}>
        <h2 className='w-full text-center m-2 flex items-center justify-center'>
          <FaTemperatureQuarter className='mr-2' /> Temperaturas
        </h2>
        <div className='w-full md:w-3/4'>
          <div className="flex justify-between m-2">
            <p>Tanque de leche</p>
            <b>Sin datos</b>
          </div>
          <div className="flex justify-between m-2">
            <p>Agua de Lavado</p>
            <b>Sin datos</b>
          </div>
          <div className="flex justify-between m-2">
            <p>Retorno de Lavado</p>
            <b>Sin datos</b>
          </div>
        </div>
        <p className='w-full mt-5 text-center'>Última actualización 11/09/2024 10:15hs</p>
      </CardCustom>
      <CardCustom className={'w-full flex flex-wrap justify-center md:w-1/3 text-black dark:text-white bg-zinc-300 relative p-3 rounded-md'}>
        <h2 className='w-full text-center m-2'>Vacío</h2>
        <div className='w-full md:w-3/4'>
          <div className="flex justify-between m-2">
            <p>Nivel de Vacío</p>
            <b>Sin datos</b>
          </div>
          <div className="flex justify-between m-2">
            <p>Reserva de Vacío</p>
            <b>Sin datos</b>
          </div>
        </div>
        <p className='w-full mt-5 text-center'>Última actualización 11/09/2024 10:15hs</p>
      </CardCustom>
      <CardCustom className={'w-full flex flex-wrap justify-center md:w-1/3 text-black dark:text-white bg-zinc-300 relative p-3 rounded-md'}>
        <h2 className='w-full text-center m-2 flex items-center justify-center'>
          <FaPowerOff className='mr-2' /> Controles
        </h2>
        <div className='w-full'>
          <div className="flex justify-between items-center m-2">
            <TextField
              disabled
              id="outlined-disabled"
              defaultValue="Bomba de vacío"
            />
            <IconButton aria-label="fingerprint" color="secondary">
              <MdModeEdit className='text-yellow-600' />
            </IconButton>
            <Switch {...label} />
          </div>
          <div className="flex justify-between items-center m-2">
            <TextField
              disabled
              id="outlined-disabled"
              defaultValue=" "
            />
            <IconButton aria-label="fingerprint" color="secondary">
              <MdModeEdit className='text-yellow-600' />
            </IconButton>
            <Switch {...label} />
          </div>
        </div>
        <p className='w-full mt-5 text-center'>Última actualización 11/09/2024 10:15hs</p>
      </CardCustom>
      <CardCustom className={'w-full flex flex-wrap justify-center md:w-1/3 text-black dark:text-white bg-zinc-300 relative p-3 rounded-md'}>
        <h2 className='w-full text-center m-2'>Entradas digitales</h2>
        <div className='w-full'>
          <div className="flex justify-between items-center m-2">
            <TextField
              disabled
              id="outlined-disabled"
              defaultValue="Bomba de vacío"
            />
            <IconButton aria-label="fingerprint" color="secondary">
              <MdModeEdit className='text-yellow-600' />
            </IconButton>
            <b className='text-red-500'>Apagado</b>
          </div>
          <div className="flex justify-between items-center m-2">
            <TextField
              disabled
              id="outlined-disabled"
              defaultValue="Bomba de desagote"
            />
            <IconButton aria-label="fingerprint" color="secondary">
              <MdModeEdit className='text-yellow-600' />
            </IconButton>
            <b className='text-red-500'>Apagado</b>
          </div>
          <div className="flex justify-between items-center m-2">
            <TextField
              disabled
              id="outlined-disabled"
              defaultValue="Bomba x"
            />
            <IconButton aria-label="fingerprint" color="secondary">
              <MdModeEdit className='text-yellow-600' />
            </IconButton>
            <b className='text-red-500'>Apagado</b>
          </div>
          <div className="flex justify-between items-center m-2">
            <TextField
              disabled
              id="outlined-disabled"
              defaultValue=" "
            />
            <IconButton aria-label="fingerprint" color="secondary">
              <MdModeEdit className='text-yellow-600' />
            </IconButton>
            <b className='text-red-500'>Apagado</b>
          </div>
        </div>
        <p className='w-full mt-5 text-center'>Última actualización 11/09/2024 10:15hs</p>
      </CardCustom>
    </div>
  )
}

export default Controls