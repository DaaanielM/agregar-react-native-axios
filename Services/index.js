import axios from 'axios';

// ruta con la ip de su pc
export const api = 'http://192.168.0.9:4000/';
// http://localhost:4000/productos/crear

export async function addEmpleado(user) {
	try {
		const respuesta = await axios({
			url: api + `usuarios/crear`,
			method: 'post',
			data: user,
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}
