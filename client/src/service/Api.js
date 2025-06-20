import axios from 'axios';

// Use the deployed backend URL from the .env file
const URL = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL: `${URL}/api`, // Adjust path if needed
});

// Test API call
api.get('/users')
  .then(res => console.log(res.data))
  .catch(err => console.error(err));

// Auth: Login
export const loginApi = async (data) => {
  try {
    return await axios.post(`${URL}/ngo/login`, data);
  } catch (error) {
    console.error('Error while sending login data:', error);
  }
};

// Auth: Register
export const registerApi = async (data) => {
  try {
    return await axios.post(`${URL}/ngo/register`, data);
  } catch (error) {
    console.error('Error while sending register data:', error);
  }
};

// Hotel: Donate
export const hotelDataApi = async (data) => {
  try {
    return await axios.post(`${URL}/hotel/donate`, data);
  } catch (error) {
    console.error('Error while sending hotel data:', error);
  }
};

// Hotel: Get all
export const getHotel = async () => {
  try {
    return await axios.get(`${URL}/hotels`);
  } catch (error) {
    console.error('Error while getting hotels:', error);
    return null;
  }
};

// Hotel: Delete
export const manageHotelApi = async (id) => {
  try {
    return await axios.delete(`${URL}/hotels/${id}`);
  } catch (error) {
    console.error('Error while deleting hotel:', error);
  }
};

// NGO: Link hotel
export const addNgoHotel = async (id1, id2) => {
  try {
    return await axios.post(`${URL}/ngo/hotel/${id1}/${id2}`);
  } catch (error) {
    console.error('Error while adding NGO hotel:', error);
  }
};

// NGO: Get all linked hotels
export const ngoHotel = async () => {
  try {
    return await axios.get(`${URL}/ngo/hotel`);
  } catch (error) {
    console.error('Error while getting NGO hotel data:', error);
  }
};

// Mail: Send mail
export const sendMail = async (id1, id2) => {
  try {
    return await axios.post(`${URL}/send-mail/${id1}/${id2}`);
  } catch (error) {
    console.error('Error while sending mail:', error);
  }
};
