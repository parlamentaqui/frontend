export const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost' : 'http://www.parlamentaqui.com';
export const basePort = '8001';
export const apiURL = `${baseURL}:${basePort}`;
export const camaraURL = `${apiURL}/camara`;
export const camaraSearchRoute = `${camaraURL}/resultado`;
export const deputadosHomeRoute = `${camaraURL}/deputies-home`;
export const partiesSearchRoute = `${camaraURL}/parties`;
export const ufSearchRoute = `${camaraURL}/federative_unities`;
