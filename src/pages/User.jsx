import { useLocation } from "react-router-dom";

const User = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>유저 페이지</h1>
      <p>{location.state.name}</p>
      <p>{location.state.email}</p>
      <img src={location.state.url} />
    </div>
  );
};

export default User;
