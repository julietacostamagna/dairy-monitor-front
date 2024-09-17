import { Button } from '@mui/material'
import MapCustom from '../components/MapCustom'
import { ToastContainer, toast } from 'react-toastify'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { markersRecloser } from '../utils/js/markers'

function Map() {
	const centerCity = [-31.420083, -64.188776]
	const navigate = useNavigate()

	// const showToastMessage = () => {
	// 	toast.warn('Nueva Alerta para ID!', {
	// 		position: 'top-right',
	// 		autoClose: false,
	// 		onClick: () => {
	// 			navigate('/Alert')
	// 		},
	// 		className: 'mt-3',
	// 		theme: 'colored',
	// 	})
	// }

	// useEffect(() => {
	// 	showToastMessage()
	// }, [])

	return (
		<div className="min-h-[90vh] relative w-full flex">
			<ToastContainer className={'absolute top-0'} stacked />
			<div className='min-h-[inherit]  !shadow-md !shadow-black/40 !rounded-2xl p-2 w-full'>
				<MapCustom
					id={2}
					center={centerCity}
					activeZoom={true}
					zoom={6}
					markers={markersRecloser}
				/>
			</div>
		</div>
	)
}

export default Map
