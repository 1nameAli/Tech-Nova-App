
export const Logout= () => {
  return (
    <button
      className="btn btn-outline-danger"
      onClick={() => {
        localStorage.removeItem("token");
        window.location.href = `https://tech-nova-trading.vercel.app`;
      }}
    >
      Logout
    </button>
  );
};

