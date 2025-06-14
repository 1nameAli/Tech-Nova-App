import {baseUrl} from '../baseUrl.js'
export const Logout= () => {
  return (
    <button
      className="btn btn-outline-danger"
      onClick={() => {
        localStorage.removeItem("token");
        window.location.href = `${baseUrl}/signup`;
      }}
    >
      Logout
    </button>
  );
};

