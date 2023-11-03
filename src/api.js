export const getLoginToken = async (loginFormData) => {
    try {
      if (!loginFormData) return;
      const params = new URLSearchParams(loginFormData);
  
      const response = await fetch(import.meta.env.VITE_BACKEND_URL + "/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params,
      });
  
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
      throw new Error("Error occurred during login request.");
    }
  };

  export const getUser = async (token) => {
    const res = await fetch(import.meta.env.VITE_BACKEND_URL + "/get_userid", {
      methods: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  
    return res.json();
  };
  