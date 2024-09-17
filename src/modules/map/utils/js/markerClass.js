// MarkerOptions.js
import L from 'leaflet'

export const blueIcon = (nro) =>
	new L.divIcon({
		iconSize: [25, 41],
		iconAnchor: [12, 41],
		popupAnchor: [1, -34],
		shadowSize: [41, 41],
		className: 'leaflet-marker-icon-blue',
		html: `<span class="marcador_ubicacion_map" style="background: darkblue;" ><span class="interior_marcador_map" ><a class="icono_marcador_user_map" style="font-size: 14px;"><i class="fas fa-wrench" style="color: black; font-size: 14px; margin-left: 4px;">${nro}</i></a></span></span>`,
	})

const getIcon = (nro) => {
		return blueIcon(nro)
}
class markerCustom {
	constructor(
		id = false,
		lat,
		lng,
		info = {
			name: 'nuevo',
		}
	) {
		this.id = id || ''
		this.lat = lat
		this.lng = lng
		this.info = info
		this.icon = getIcon(this.id)
	}
}

export default markerCustom
