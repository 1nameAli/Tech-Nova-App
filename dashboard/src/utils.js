import { toast } from "react-toastify";

export const successHandler = (msg) => {
  toast.success(msg, {});
};

export const errorHandler = (msg) => {
  toast.error(msg, {});
};
