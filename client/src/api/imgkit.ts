export const authenticator =  async () => {
  try {
      const response = await fetch('http://localhost:5000/auth');

      if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Request failed with status ${response.status}: ${errorText}`);
      }

      const data = await response.json();
      console.log("data", data)
      const { signature, expire, token } = data;
      return { signature, expire, token };
  } catch (error: any) {
      throw new Error(`Authentication request failed: ${error.message}`);
  }
};