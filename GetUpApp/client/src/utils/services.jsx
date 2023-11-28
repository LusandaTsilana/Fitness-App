export const baseUrl = "http://localhost:5000/api";

export const postRequest = async (url, body) => {
  console.log("body", body);
  //the response will carry either the error message or the data if it is correct
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });

  const data = await response.json();

  if (!response.ok) {
    let message;

    if (data?.message) {
      message = data.message;
    } else {
      message = data;
    }

    return { error: true, message };
  }

  return data;
};
