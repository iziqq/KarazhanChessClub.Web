import store from "@backend/store/store";
import Result from "@models/Result";
import EventBus from "@models/EventBus";
import Events from "@models/shared/Events";
import SideAlert from "@models/shared/SideAlert";
import axios, { AxiosError, AxiosResponse, AxiosRequestConfig } from "axios";

export default {
  async post(
    url: string,
    data: any = null,
    options?: AxiosRequestConfig
  ): Promise<any> {
    try {
      var axiosResponse = await axios.post(url, data, options);

      return this.handleAxiosResponse(axiosResponse);
    } catch (error) {
      if (error.response) {
        return this.handleAxiosError(error);
      } else {
        return this.handleConnectionError();
      }
    }
  },

  async put(url: string, data: any = null): Promise<any> {
    try {
      var axiosResponse = await axios.put(url, data);

      return this.handleAxiosResponse(axiosResponse);
    } catch (error) {
      if (error.response) {
        return this.handleAxiosError(error);
      } else {
        return this.handleConnectionError();
      }
    }
  },
  async get(url: string, data: any = null): Promise<any> {
    try {
      var axiosResponse = await axios.get(url, {
        params: data
      });

      return this.handleAxiosResponse(axiosResponse);
    } catch (error) {
      if (error.response) {
        return this.handleAxiosError(error);
      } else {
        return this.handleConnectionError();
      }
    }
  },
  async patch(url: string, data: any = null): Promise<any> {
    try {
      var axiosResponse = await axios.patch(url, data);

      return this.handleAxiosResponse(axiosResponse);
    } catch (error) {
      if (error.response) {
        return this.handleAxiosError(error);
      } else {
        return this.handleConnectionError();
      }
    }
  },
  async delete(url: string): Promise<any> {
    try {
      var axiosResponse = await axios.delete(url);

      return this.handleAxiosResponse(axiosResponse);
    } catch (error) {
      if (error.response) {
        return this.handleAxiosError(error);
      } else {
        return this.handleConnectionError();
      }
    }
  },
  handleAxiosResponse(axiosResponse: AxiosResponse): any {
    if (axiosResponse.data) return axiosResponse.data;

    var response = new Result();

    response.success = true;

    return response;
  },
  handleAxiosError(axiosError: AxiosError): any {
    EventBus.$emit(
      Events.ShowSideAlert,
      new SideAlert(
        `Error: ${axiosError.response?.data.error ||
          axiosError.response?.data?.title ||
          axiosError.message ||
          "General error"}`,
        "error"
      )
    );
    
    return axiosError.response?.data;
  },
  handleConnectionError(): any {
    var response = new Result();

    response.success = false;
    response.error = "Connection error, please try again later";

    EventBus.$emit(
      Events.ShowSideAlert,
      new SideAlert(`Error: ${response.error || "General error"}`, "error")
    );

    return response;
  }
};
