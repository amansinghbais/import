import { api, client } from '@/adapter'
import store from '@/store';

const login = async (username: string, password: string): Promise <any> => {
  return api({
    url: "login", 
    method: "post",
    data: {
      'USERNAME': username, 
      'PASSWORD': password
    }
  });
}

const checkPermission = async (payload: any): Promise <any>  => {
  let baseURL = store.getters['user/getInstanceUrl'];
  baseURL = baseURL && baseURL.startsWith('http') ? baseURL : `https://${baseURL}.hotwax.io/api/`;
  return client({
    url: "checkPermission",
    method: "post",
    baseURL: baseURL,
    ...payload
  });
}

const getProfile = async (): Promise <any>  => {
    return api({
      url: "user-profile", 
      method: "get",
    });
}
const getAvailableTimeZones = async (): Promise <any>  => {
  return api({
    url: "getAvailableTimeZones",
    method: "get",
    cache: true
  });
}
const setUserTimeZone = async (payload: any): Promise <any>  => {
  return api({
    url: "setUserTimeZone",
    method: "post",
    data: payload
  });
}
    
const createFieldMapping = async (payload: any): Promise <any> => {
  return api({
    url: "/service/createDataManagerMapping",
    method: "POST",
    data: payload
  });
}

const updateFieldMapping = async (payload: any): Promise <any> => {
  return api({
    url: "/service/updateDataManagerMapping",
    method: "POST",
    data: payload
  });
}

const deleteFieldMapping = async (payload: any): Promise <any> => {
  return api({
    url: "/service/deleteDataManagerMapping",
    method: "POST",
    data: payload
  });
}

const getFieldMappings = async (payload: any): Promise <any> => {
  return api({
    url: "/performFind",
    method: "POST",
    data: payload
  });
}

export const UserService = {
    createFieldMapping,
    deleteFieldMapping,
    login,
    getAvailableTimeZones,
    getFieldMappings,
    getProfile,
    setUserTimeZone,
    checkPermission,
    updateFieldMapping
}