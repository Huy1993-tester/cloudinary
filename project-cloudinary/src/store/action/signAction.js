import signService from "../../core/signService";

export const Action1 = () => {
  return async () => {
    try {
      const response = await signService.action1();
      // const (data) = reponse.data;
      console.log(response);
      return response;
    } catch (error) {
      //  throw new Error(error)
      return error.response;
    }
  };
};

export const Action2 = () => {
  return async () => {
    try {
      const response = await signService.action2();
      // const (data) = reponse.data;
      console.log(response);
      return response;
    } catch (error) {
      //  throw new Error(error)
      return error.response;
    }
  };
};
