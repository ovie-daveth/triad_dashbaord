import axiosInstance from "@/lib/axiosInstance";

export const RegisterUser =  async (req: any) => {
  try {
      const response = await axiosInstance.post('/users', req);

      if (!response) {
          throw new Error(`Request failed. Please try again`);
      }

      console.log("response", response)
      return response

  } catch (error: any) {
      throw new Error(`Authentication request failed: ${error.message}`);
  }
};

export const LoginUser =  async (req: any) => {
    try {
        const response = await axiosInstance.post('/users/login', req);
  
        if (!response) {
            throw new Error(`Request failed. Please try again`);
        }
  
        console.log("response", response)
        return response
  
    } catch (error: any) {
        throw new Error(`Authentication request failed: ${error.message}`);
    }
  };