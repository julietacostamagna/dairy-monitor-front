import {
	MRT_ExpandButton,
	MRT_GlobalFilterTextField,
	MRT_ShowHideColumnsButton,
	MRT_TablePagination,
	MRT_ToggleDensePaddingButton,
	MRT_ToggleFiltersButton,
	MRT_ToggleGlobalFilterButton,
	MaterialReactTable,
	useMaterialReactTable,
} from 'material-react-table'
import NoRegisterTable from './NoRegisterTable'
import { storage } from '../../storage/storage'
import { Box, IconButton, Tooltip } from '@mui/material'
import { PiBroomFill } from 'react-icons/pi'
import { useEffect } from 'react'
const TableCustom = ({ data, columns, ...prop }) => {
	const filtros =
		storage.get('filter')?.reduce((acc, item) => {
			if (columns?.some((col) => col.accessorKey === item.name)) {
				acc = { id: item.name, value: item.value }
			}
			return acc
		}, {}) || {}
	// creo una constante con las configuracion inicial para poder modificar con props
	const tableInitialState = {
		density: prop.density ? prop.density : window.innerWidth < 750 ? 'compact' : 'comfortable',
		expanded: true,
		showColumnFilters: false,
		columnFilters: Object.keys(filtros).length ? [filtros] : [],
		columnVisibility: prop.columnVisibility,
		sorting: [],
		grouping: [],
	}
	// activacion de paginacion
	if (prop.pagination) {
		tableInitialState.pagination = { pageIndex: 0, pageSize: prop.pageSize || 5 }
	}
	// controlo si llega un agrupacion por columna
	if (prop.groupBy) {
		tableInitialState.grouping.push(prop.groupBy)
	}
	// controlo si llega un orden por columna
	if (prop.orderBy) {
		tableInitialState.sorting.push({ id: prop.orderBy, desc: false })
	}
	const hideColumn = prop?.onColumnVisibilityChange ? { onColumnVisibilityChange: prop.onColumnVisibilityChange } : ''
	const columnVisibility = prop?.columnVisibility ? { columnVisibility: prop.columnVisibility } : ''
	const pags = () => {
		prop.getPage(table)
	}
	const table = useMaterialReactTable({
		columns,
		data,
		initialState: tableInitialState,
		state: {
			...columnVisibility,
		},
		groupedColumnMode: 'remove',
		positionToolbarAlertBanner: 'none',
		positionToolbarDropZone: 'none',
		enableTopToolbar: prop.topToolbar || false,
		enableStickyFooter: false,
		enableStickyHeader: true,
		enablePagination: prop.pagination ?? false,
		defaultColumn: {
			minSize: 10,
		},
		displayColumnDefOptions: {
			'mrt-row-expand': {
				size: 5,
				minSize: 1,
				maxSize: 10,
				Cell: ({ row, table }) => {
					if (!row.depth) {
						return <MRT_ExpandButton row={row} table={table} />
					}
				},
			},
		},
		muiTableContainerProps: { sx: { maxHeight: prop.pagination ? 500 : 50000 } },
		// HABILITACION DE ROWS
		enableBatchRowSelection: prop.checkbox ?? false,
		enableMultiRowSelection: prop.checkbox ?? false,
		enableRowSelection: prop.checkbox ?? false,
		enableSelectAll: prop.checkbox ?? false,
		enableSubRowSelection: prop.checkbox ?? false,
		// HABILITACION DE COLUMNA
		enableFullScreenToggle: prop.fullScreen || false,
		// si esta true te deja copiar el campo de la tabla
		enableClickToCopy: prop.copy,
		// habilita los 3 puntos para acciones por columna
		enableColumnActions: false,
		// habilita hacer drag and drop aunque faltan otras opciones para que funcione al 100%
		enableColumnDragging: false,
		// habilita el poder filtrar por todas las columnas
		enableColumnFilters: true,
		// activa un boton que te genera un modal para editar el campo en la tabla, pero hay que combinarlo con otra funcion para el guardado, actualizacion, etc.
		enableEditing: false,
		// permite agrupar por columnas
		enableGrouping: prop.grouping,
		// junto con el de los 3 puntos de accion te permite ocultar columnas, o activando el toopbar
		enableHiding: prop.hide,
		// habilita el ordenamiento de columnas osea ordenar los datos por alguna columna en especifico
		enableSorting: prop.sort,

		// svg para cuando la tabla esta vacia
		renderEmptyRowsFallback: () => {
			return <NoRegisterTable />
		},

		// clases para el header de la tabla (muiTableHeadRowProps, muiTableHeadCellProps, muiTableHeadProps)
		muiTableHeadRowProps: {
			sx: {
				backgroundColor: 'transparent',
			},
		},

		muiTableHeadCellProps: {
			sx: {
				backgroundColor: 'transparent',
				...prop.header,
			},
		},

		// ------------------------------------

		// clases para la linea de herramientas de arriba ()
		muiTopToolbarProps: {
			sx: {},
		},
		// Se creo a mano las herramientas para poder escribir en español las opciones
		renderTopToolbar: ({ table }) => (
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'flex-end',
					alignItems: 'center',
					backgroundColor: 'transparent',
					...prop.toolbarClass,
				}}
			>
				{prop.btnCustomToolbar && prop.btnCustomToolbar}
				<MRT_GlobalFilterTextField placeholder='Escriba su busqueda' table={table} />
				{prop.getPage && prop.checkAlert && (
					<IconButton
						onClick={() => pags()}
						table={table}
						title='Limpiar alertas'
						sx={{
							'&:hover': {
								backgroundColor: '#ecec97',
							},
							background: 'yellow',
							color: 'black',
						}}
					>
						<PiBroomFill />
					</IconButton>
				)}
				<MRT_ToggleGlobalFilterButton title='Buscar' table={table} />
				<MRT_ToggleFiltersButton title='Filtrar' table={table} />
				<MRT_ShowHideColumnsButton title='Mostras/Ocultar Columnas' table={table} />
				<MRT_ToggleDensePaddingButton title='Densidad' table={table} />

				{/* descomentar si queremos hacer un fullScreen en la tabla */}
				{/* <MRT_ToggleFullScreenButton table={table} /> */}

				{/* descomentar si queremos hacer un boton de impresion en la tabla */}
				{/* <Tooltip title='Print'>
					<IconButton onClick={() => window.print()}>
						<Print />
					</IconButton>
				</Tooltip> */}
			</Box>
		),
		// ------------------------------------

		// clases para la linea de herramientas de abajo

		muiBottomToolbarProps: {
			sx: {
				minHeight: prop.pagination ? '3.5rem' : '2rem',
				backgroundColor: 'transparent',
				...prop.footer,
			},
		},

		// ------------------------------------

		// clases para el fondo y bordes de la tabla

		muiTablePaperProps: {
			sx: {
				backgroundColor: 'transparent',
				...prop.card,
			},
		},

		// ------------------------------------

		// clases para la paginacion

		muiPaginationProps: {
			showRowsPerPage: true,
			// El texto de las filas por paginas esta al final en el useEfect
		},
		paginationDisplayMode: 'pages',

		// ------------------------------------

		// clases para el body de la tabla(muiTableBodyCellProps, muiTableBodyProps, muiTableBodyRowProps)
		muiTableBodyRowProps: ({ row }) => ({
			sx: {
				...prop.body,
				backgroundColor: prop.ChangeColorRow ? prop.ChangeColorRow(row) && 'yellow' : undefined,
			},
		}),
		muiTableBodyCellProps: ({ row }) => ({
			sx: {
				color: prop.ChangeColorRow ? prop.ChangeColorRow(row) && 'black' : undefined,
			},
		}),
		muiTableBodyProps: {
			sx: () => ({
				'& tr:nth-of-type(odd):not([data-selected="true"]):not([data-pinned="true"]) > td': {
					backgroundColor: '#cdcdcd23',
				},
				'& tr:nth-of-type(odd):not([data-selected="true"]):not([data-pinned="true"]):hover > td': {
					backgroundColor: '#a9a8a88b',
				},
				'& tr:nth-of-type(even):not([data-selected="true"]):not([data-pinned="true"]) > td': {
					backgroundColor: '#68686822',
				},
				'& tr:nth-of-type(even):not([data-selected="true"]):not([data-pinned="true"]):hover > td': {
					backgroundColor: '#a9a8a88b',
				},
			}),
		},
		// ------------------------------------

		// funcion para guardar las columnas que se ocultan

		...hideColumn,
	})
	useEffect(() => {
		const label = document.querySelector('label[for="mrt-rows-per-page"]')
		if (label) {
			label.innerText = 'Filas por página'
		}
	}, [])
	return <MaterialReactTable table={table} />
}

export default TableCustom
