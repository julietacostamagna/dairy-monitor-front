import CardCustom from '../../../../../components/CardCustom'
import TableCustom from '../../../../../components/TableCustom'
import { ColumnsClients } from '../utils/DataTable/ColumnsClients'
// import {dataClients } from '../utils/DataTable/dataClients '

function TableClients() {
	return (
		<CardCustom className={'w-full h-full flex flex-col items-center justify-center text-black dark:text-white relative p-3 rounded-md'}>
			<div className='w-full  md:p-5'>
				<h1 className='text-2xl mb-3'>Clientes</h1>
				<TableCustom
					data={[]}
					columns={ColumnsClients()}
					density='compact'
					header={{
						background: 'rgb(190 190 190)',
						fontSize: '18px',
						fontWeight: 'bold',
					}}
					toolbarClass={{ background: 'rgb(190 190 190)' }}
					body={{ backgroundColor: 'rgba(209, 213, 219, 0.31)' }}
					footer={{ background: 'rgb(190 190 190)' }}
					card={{
						boxShadow: `1px 1px 8px 0px #00000046`,
						borderRadius: '0.75rem',
					}}
				/>
			</div>
		</CardCustom>
	)
}

export default TableClients
