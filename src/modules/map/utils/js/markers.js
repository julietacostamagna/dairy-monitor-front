// Definimos los iconos personalizados
const blueIcon = (nro) =>
	new L.divIcon({
		iconSize: [25, 41],
		iconAnchor: [12, 41],
		popupAnchor: [1, -34],
		shadowSize: [41, 41],
		className: 'leaflet-marker-icon-blue',
		html: `<span class="marcador_ubicacion_map" style="background: yellow;" ><span class="interior_marcador_map" style="background: white;" ><a class="icono_marcador_user_map" style="font-size: 14px;"><i class="fas fa-wrench" style="font-size: 14px; margin-left: 4px;">${nro}</i></a></span></span>`,
	})

	const generateColor = (data, maxData) => {
		const maxColor = [0, 0, 139];
		const minColor = [173, 216, 230]; 
	  
		const ratio = Math.pow(data / maxData, 2);
		const color = minColor.map((min, i) => Math.round(min + ratio * (maxColor[i] - min)));
	  
		return `rgb(${color.join(',')})`;
	  };
	  
	  const maxData = 1.18;
	  
	  export const markersRecloser = [
		{
		  id: 2,
		  icon: blueIcon(7),
		  alert: false,
		  info: {
			number: 15,
			data: 1.00,
			color: generateColor(1.00, maxData)
		  },
		  lat: -30.709525,
		  lng: -61.995524,
		},
	  ];