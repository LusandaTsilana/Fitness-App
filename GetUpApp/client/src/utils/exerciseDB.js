import axios from "axios";
import { rapidapikey } from "../constants/bodyParts";

const baseUrl = "https://exercisedb.p.rapidapi.com";

// //fetch api key from server
// const getApiKey = async () => {
//   try {
//     const response = await axios.get("/api/get-key");
//     return response.data.apiKey;
//   } catch (error) {
//     console.error("Error fetching API key:", error);
//     return null;
//   }
// };

const apiCall = async (url, params) => {
  if (!rapidapikey) {
    console.log("Api key not found");
    return null;
  }
  try {
    const options = {
      method: "GET",
      url,
      params,
      headers: {
        "X-RapidAPI-Key": rapidapikey,
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log("error:", error);
  }
};

export const fetchExerciseByBodypart = async (bodyPart) => {
  let data = await apiCall(baseUrl + `/exercises/bodyPart/${bodyPart}`);

  return data;
};
