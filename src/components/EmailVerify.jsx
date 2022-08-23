import { useParams } from "react-router-dom";

export default function EmailVerify() {
  const { id } = useParams();
  return (
    <>
      <h2>Email Status: {id}</h2>
    </>
  );
}
