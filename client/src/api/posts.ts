import axiosInstance from "@/lib/axiosInstance";

export const GetPosts =  async () => {
  try {
      const response = await axiosInstance.get('/posts');

      if (!response) {
          throw new Error(`Request failed. Please try again`);
      }

      console.log("response toto", response.data)
      return response.data

  } catch (error: any) {
      throw new Error(`Authentication request failed: ${error.message}`);
  }
};

export const CreateQuestions =  async (data: any) => {
    try {
        const response = await axiosInstance.post('/posts', data);
  
        if (!response) {
            throw new Error(`Request failed. Please try again`);
        }
  
        console.log("response", response)
        return response
  
    } catch (error: any) {
        throw new Error(`Authentication request failed: ${error.message}`);
    }
  };

  export const deletePost =  async (id: number) => {
    try {
        const response = await axiosInstance.delete(`/posts/${id}`);
  
        if (!response) {
            throw new Error(`Request failed. Please try again`);
        }
  
        console.log("response", response)
        return response
  
    } catch (error: any) {
        throw new Error(`Authentication request failed: ${error.message}`);
    }
  };