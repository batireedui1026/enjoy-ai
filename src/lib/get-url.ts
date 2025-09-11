export const getUrl = () => {
  //   return window.location.origin + "/api/v1";
  return (
    window.location.protocol + "//" + window.location.hostname + ":8001/api/v1"
  );
};
