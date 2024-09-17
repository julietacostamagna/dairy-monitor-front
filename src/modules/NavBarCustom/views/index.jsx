import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { ListItemText, ListItemIcon, ListItemButton, ListItem, IconButton, Divider,	Typography,	List, Toolbar, useMediaQuery } from '@mui/material'
import DropdownImage from '../../core/components/DropdownImage'
import { Fragment, useContext, useEffect, useRef, useState } from 'react'
import ButtonModeDark from '../../core/components/ButtonModeDark'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosSpeedometer } from "react-icons/io";
import { FaRegCopy, FaMapMarked, FaCogs } from "react-icons/fa";
import { TbPhotoEdit } from "react-icons/tb";
import { RiAlertFill  } from 'react-icons/ri'
import AppBarCustom from '../components/AppBarCustom'
import DrawerCustom from '../components/DrawerCustom'
import DrawerHeaderCustom from '../components/DrawerHeaderCustom'
import SubMenuCustom from '../components/SubMenuCustom'
import { MainContext } from '../../../context/MainContext'
import IMG from '../assets/img/delavalLogoTipo2.png'

function NavBarCustom() { 
	const [open, setOpen] = useState(false)
	const { tabs } = useContext(MainContext)
	const navigate = useNavigate()
	const NavBarRef = useRef(null)
	const [buttonActive, setButtonActive] = useState(location)
	const isMobile = useMediaQuery('(max-width: 600px)');
	const handleDrawerOpen = () => {
		setOpen(true)
	}
	const handleDrawerClose = () => {
		setOpen(false)
	}
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (NavBarRef.current && !NavBarRef.current.contains(event.target)) {
				handleDrawerClose()
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])
	const menuSideBar = [
		{ name: 'Alertas', link: 'Alert', icon: <RiAlertFill className=' text-3xl' /> },
		{ name: 'Clientes', link: 'Home', icon: <IoIosSpeedometer  className=' text-3xl' /> },
		{ name: 'Mapa', link: 'Map', icon: <FaMapMarked  className=' text-3xl' /> },
		{ name: 'Bitácora', link: 'binnacle', icon: <TbPhotoEdit   className=' text-3xl' /> },
		{ name: 'Configuración', link: 'Cistern', icon: <FaCogs className=' text-3xl' /> },
		{ name: '', link: 'Grafics', icon: <FaRegCopy   className=' text-3xl' /> },
	]

	const activeButton = (id) => {
		setButtonActive(id)
		navigate(id)
	}
	return (
		<>
			<AppBarCustom position='fixed' open={open}>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						onClick={handleDrawerOpen}
						edge='start'
						sx={{
							marginRight: 5,
							boxShadow: 'none',
							...(isMobile && { display: 'none' }),
							...(open && { display: 'none' }),
						}}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' noWrap component='div'>
						<img className='w-[150px]' src={IMG} />
						{/* Dairy Monitor */}
					</Typography>
					<div className='absolute right-5 flex flex-row items-center gap-2'>
						<ButtonModeDark />
						<DropdownImage />
					</div>
				</Toolbar>
			</AppBarCustom>
			<DrawerCustom variant='permanent' open={open} ref={NavBarRef} sx={{
				...(isMobile && {
					position: 'fixed',
					bottom: 0,
					width: '100%',
					height: '10vh',
					zIndex: 1200,
					'& .MuiDrawer-paper': {
						position: 'absolute',
						bottom: 0,
						width: '100%',
						height: '10vh',
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-around',
						padding: '0',
					},
				}),
			}}>
				<div className='bg-white dark:bg-gray-800 h-full w-full'>
					<DrawerHeaderCustom style={{ display: isMobile ? 'none' : ''}}>
						<IconButton onClick={handleDrawerClose}>
							<ChevronLeftIcon className='dark:text-white' />
						</IconButton>
					</DrawerHeaderCustom>
					<Divider />
					<List sx={{
						...(isMobile && {
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'center',
							width: '100%',
							padding: 0,
						}),
					}}>
						{menuSideBar.map((item, index) => {
							if (tabs.length == 0 && item.link == 'tabs') {
								return ''
							}
							if (item.link == 'Abm/') {
								return ''
							}
							return (
								<Fragment key={index}>
									<ListItem disablePadding sx={{
										...(isMobile && {
											flexGrow: 1,
											flexBasis: 0,
											justifyContent: 'center',
											display: 'flex',
										}),

									}} >
										{item.submenus ? (
											<SubMenuCustom
												item={item}
												className={`dark:text-white`}
												openSideBar={open}
												buttonActive={buttonActive}
												activeButton={activeButton}
											/>
										) : (
											<Link to={item.link} className={` text-black dark:text-white`}>
												<ListItemButton
													// className={item.link === 'Alert' ? styles.backgroundAlert : ''}
													sx={{
														minHeight: 48,
														justifyContent: !isMobile && open ? 'initial' : 'center',
														py: 1.8,
														paddingLeft: '10px',
														paddingRight: '10px',
													}}
													onClick={() => activeButton(item.link)}
												>
													<ListItemIcon
														sx={{
															minWidth: 0,
															mr: !isMobile && open ? 3 : 'auto',
															justifyContent: 'center',
															color: buttonActive == item.link ? 'blue' : '',
															
														}}
													>
														{item.icon}
													</ListItemIcon>
													<ListItemText
														primary={item.name}
														sx={{
															opacity: !isMobile && open ? 1 : 0,
															color: buttonActive == item.link ? 'blue' : '',
															display: isMobile ? 'none !important' : 'block'
														}}
													/>
												</ListItemButton>
											</Link>
										)}
									</ListItem>
								</Fragment>
							)
						})}
					</List>
				</div>
			</DrawerCustom>
		</>
	)
}

export default NavBarCustom
