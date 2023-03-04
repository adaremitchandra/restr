import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import useSWR from "swr";

const Gambar = ({ par }) => {
  // useEffect(() => {
  //   axios.get("https://sandbox-api.adaremit.com/api/v1/kursfee").then((res) => setData(res.data.transaction));
  // }, []);

  // const [data, setData] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const fetcher = async () => {
    const response = await axios.get("https://sandbox-api.adaremit.com/api/v1/kursfee");
    return response.data.transaction;
  };

  const { data } = useSWR("rate", fetcher);
  if (!data) return <h2>Loading...</h2>;

  const login = () => {
    // const data = {
    const form = {
      user_email: email,
      password: password,
    };
    // };
    // console.log(data);
    axios
      .post("https://mobile.api.adaremit.co.id/v1/login", form)
      .then((res) => console.log(res))
      .catch((err) => console.log("Errornya", err));
  };

  return (
    <div style={{ backgroundColor: "pink", display: "flex", flexDirection: "column" }}>
      <div style={{ margin: "auto", height: "100px", backgroundColor: "lightGreen", padding: "16px 32px" }}>
        <form>
          <div>
            <label>
              Email :
              <input type="email" value={email} onChange={(val) => setEmail(val.target.value)} />
            </label>
          </div>
          <div>
            <label>
              Password :
              <input type="password" value={password} onChange={(val) => setPassword(val.target.value)} />
            </label>
          </div>
        </form>
        <button onClick={login}>Submit</button>
      </div>

      <div style={{ backgroundColor: "skyblue", margin: "auto" }}>
        {data?.map((item) => (
          <div key={item.currency_code} style={{ display: "flex", gap: "100px", justifyContent: "space-between" }}>
            <Image src={item.flag} width={30} height={30} />
            <p style={{ backgroundColor: "tomato", textAlign: "center" }}>| {item.country} |</p>
            <p style={{ backgroundColor: "tomato", textAlign: "center" }}>| {item.currency_code} |</p>
            <p style={{ backgroundColor: "tomato", textAlign: "center" }}>| {item.sell} |</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gambar;

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch("https://api.adaremit.co.id/api/v1/kursfee");
//   const par = await res.json();

//   // Pass data to the page via props
//   return { props: { par } };
// }
