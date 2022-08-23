import {Link, Outlet} from "react-router-dom";

export default function EmailVerification() {
  return (
    <div style={{ display: "flex" }}>
      <h1>Hello</h1>
      <Link to={"/email-verify/banana"} key={"banana"}>banana</Link>
      <Outlet />
    </div>
  );
}
