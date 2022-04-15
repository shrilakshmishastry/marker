const useGetLocalStorage = () => {
  return window.localStorage.getItem("theme");
};

const useSetLocalStorage = (theme) => {
  window.localStorage.setItem("theme", theme);
};
export { useGetLocalStorage, useSetLocalStorage };
