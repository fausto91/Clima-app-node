const axios = require('axios');


const getLugarLatLng = async (dir)=>{
    
    const encodedUlr = encodeURI(dir);   

    const  instance = axios.create({
        baseURL: `https://geocode.xyz/${encodedUlr}?json=1`
       
    });
    
    const resp = await instance.get();

      if (resp.data.matches === null) {
        throw new Error(`No hay resultados para ${dir}`);

      }
      
    
      const data = resp.data;
      const direccion = data.standard.city;
      const lng = data.longt;
      const lat = data.latt;

    
  
      return {
          direccion,
          lat,
          lng

         }
}

module.exports = {
  getLugarLatLng

}
