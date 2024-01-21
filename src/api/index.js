import axios from 'axios';

export const getPlacesData = async(type, sw, ne) => {
  try {
    const {data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
 
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng ,
          tr_longitude: ne.lng,  
        },
        headers: {
          'X-RapidAPI-Key': 'e6fe8b6b9fmsha545655a81d5788p1a33f5jsn9cb410f3448c',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
      });
  
    return data;
  }  catch (error){
        console.log(error)
   }  
}