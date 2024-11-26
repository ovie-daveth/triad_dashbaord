const response = {
    success: (res, message, data = null) => {
      return res.status(200).json({
        success: true,
        message,
        data,
      });
    },
  
    error: (res, message, status = 500) => {
      return res.status(status).json({
        success: false,
        message,
      });
    },
  };
  
  export default response;
  