import { NextPage } from "next";
import { signIn, useSession } from "next-auth/react";
import { FormEventHandler, useEffect, useState } from "react";

const Signin = () => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const handleSubmit = async (e) => {
    // validate your userinfo
    e.preventDefault();

    const res = await signIn("credentials", {
      email: userInfo.email,
      password: userInfo.password,
      redirect: false,
    });

    console.log(res);
  };

  const { data: session } = useSession();
  useEffect(() => {
    console.log(session);
  }, [session]);
  return (
    <div className="sign-in-form">
      <form onSubmit={handleSubmit}>
        {/* <h1>Login</h1> */}
        {/* <input value={userInfo.email} onChange={({ target }) => setUserInfo({ ...userInfo, email: target.value })} type="email" placeholder="john@email.com" />
        <input value={userInfo.password} onChange={({ target }) => setUserInfo({ ...userInfo, password: target.value })} type="password" placeholder="********" /> */}
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Signin;
