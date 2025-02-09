
export const host = "https://connectiveminds-backend.onrender.com";

export const sendotp = "/v1/otp/send";
export const verifyotp = "/v1/otp/verify";
export const group = `/v1/idea/crud/`;
export const acceptrequest = `${group}accept/`;
export const declinerequest = `${group}decline/`;
export const getGroupsByUserId = "/v1/idea/get/";
export const getallgroups = `/v1/idea/get/all`;
export const incomingRequest = `/v1/idea/get/joinrequest`;
export const sentRequest = `/v1/idea/get/sentrequest`;
export const getprojectbyid = `/v1/idea/get/`;
export const removeMemberById = "/v1/idea/crud/remove/";
export const getchat = `/v1/chat/get/`;
export const crudchat = `/v1/chat/crud/`;
export const userSignUp = `/v1/user/auth/signup`;
export const postReview = `/v1/review/crud/`;
export const getReview = `/v1/review/get/reviews`;
export const geteventsbyuserid = "/v1/calendar/get/";
export const getFiles = `/file/files/`;
export const postFiles = `/file/upload/`;
export const deleteFies = `file/delete/`;
export const getdatesbyProject = `v1/calendar/crud/`;
export const getdates = `/calendar/`;
export const postdates = `/v1/calendar/crud/create/`;
export const createprofile = `/v1/profile/crud/createprofile`;
export const updateProfileimage = `/v1/user/crud/updateprofile`;
export const updateprofile = `/v1/user/crud/`;
export const getprofile = `/v1/user/get/userprofile`;


