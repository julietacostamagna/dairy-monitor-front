import CardCustom from '../../../../../components/CardCustom'
import TableCustom from '../../../../../components/TableCustom'
import { ColumnsBinnacle } from '../utils/DataTable/ColumnsBinnacle'

function TableBinnacle() {
	return (
		<CardCustom className={'w-ful text-black dark:text-white relative p-3 rounded-md'}>
			<div className='w-full  md:p-5'>
				<h1 className='text-2xl mb-3'>Bitácora</h1>
				<TableCustom
					data={[]}
					columns={ColumnsBinnacle()}
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

export default TableBinnacle
