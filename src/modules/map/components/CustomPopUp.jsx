function CustomPopUp({ content }) {
	return (
		<div className='rounded-lg p-0 min-w-35 border-2 overflow-hidden'>
			<div style={{background: content.color}} className=' text-white pl-1 row items-center'>
				<p className='!m-0 w-full font-bold textoPopUp !mr-1'>{content.data}</p>
				<p className='!m-0 font-bold textoPopUp !mr-2'>bar</p>
			</div>
		</div>
	)
}

export default CustomPopUp
