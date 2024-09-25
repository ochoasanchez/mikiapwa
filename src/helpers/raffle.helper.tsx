import axios from "axios";

const strapiUrl = import.meta.env.VITE_STRAPI_URL;
const bearerToken = "Bearer " + import.meta.env.VITE_STRAPI_TOKEN;

const config = {
  headers: {
    Authorization: bearerToken,
  },
};

const signUpParticipant = async (data: ParticipantType) => {
  // const scoreData = { data: data };
  const participantData = { data };

<<<<<<< HEAD
    const participantData = { data };

    try {
      const response = await axios.post(`${strapiUrl}/api/participants`, participantData, config);
      console.log('signUpResponse:', response)
      
      return response.data;
=======
  try {
    const response = await axios.post(
      `${strapiUrl}/api/participants`,
      participantData,
      config,
    );
    console.log("signUpResponse:", response);
    // debugger;

    return response.data;
  } catch (error) {
    console.error("Error sending score data:", error);
>>>>>>> prettier

    return error;
  }
};

<<<<<<< HEAD
      return error;
    }
  };

  

const getRaffleParticipants = async (raffleType?: 'main' | 'trivia' | 'memory') => {
  if (!raffleType || raffleType === 'main') {
    try {
      const response = await axios.get(`${strapiUrl}/api/clients`, config);
      console.log('Participants:', response.data)

=======
const getRaffleParticipants = async (
  raffleType?: "main" | "trivia" | "memory",
) => {
  if (!raffleType || raffleType === "main") {
    // debugger;
    try {
      const response = await axios.get(`${strapiUrl}/api/clients`, config);
      // const response = await axios.get(`${strapiUrl}/api/clients?filters[level][$eq]=3`, config);
      console.log("Participants:", response.data);
      // debugger;
>>>>>>> prettier
      return response.data;
    } catch (error) {
      console.error("Error getting participants data:", error);

      return error;
    }
  }
<<<<<<< HEAD
  if (raffleType === 'memory') {
    try {
      const response = await axios.get(`${strapiUrl}/api/scores?filters[game][$eq]=memory`, config);
      console.log('Memory Participants:', response.data);

=======
  if (raffleType === "memory") {
    // debugger;
    try {
      // const response = await axios.get(`${strapiUrl}/api/scores?filters[game][$eq]=memory&filters[scoreValue][$lte]=20`, config);
      const response = await axios.get(
        `${strapiUrl}/api/scores?filters[game][$eq]=memory`,
        config,
      );
      console.log("Memory Participants:", response.data);
      // debugger;
>>>>>>> prettier
      return response.data;
    } catch (error) {
<<<<<<< HEAD
      console.error('Error getting memory participants data:', error);
  
      return error;
    }
  } if (raffleType === 'trivia') {
    try {
      const response = await axios.get(`${strapiUrl}/api/scores?filters[game][$eq]=trivia&filters[scoreValue][$gte]=4`, config);
      console.log('Trivia Participants:', response.data)
      return response.data;
  
    } catch (error) {
      console.error('Error getting trivia participants data:', error);
  
=======
      console.error("Error getting memory participants data:", error);

>>>>>>> prettier
      return error;
    }
  }
  if (raffleType === "trivia") {
    // debugger;
    try {
      const response = await axios.get(
        `${strapiUrl}/api/scores?filters[game][$eq]=trivia&filters[scoreValue][$gte]=4`,
        config,
      );
      console.log("Trivia Participants:", response.data);
      // debugger;
      return response.data;
    } catch (error) {
      console.error("Error getting trivia participants data:", error);

      return error;
    }
  }
};

export { signUpParticipant, getRaffleParticipants };
