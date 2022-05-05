import axios from "axios";

export const getPhoneNumberFunc = async () => {
  const response = await axios.get(`https://swapi.dev/api/people/1/`);
  if (response.status >= 200 && response.status < 300) {
    console.log(response);
    //   return response.data;
  } else return Promise.reject("error request");
};
