import axiosInstance from "@/lib/axiosInstance";

export const GetPosts =  async () => {
  try {
      const response = await axiosInstance.get('/posts');

      if (!response) {
          throw new Error(`Request failed. Please try again`);
      }

      console.log("response", response)
      return response

  } catch (error: any) {
      throw new Error(`Authentication request failed: ${error.message}`);
  }
};