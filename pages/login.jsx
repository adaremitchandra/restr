import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";
import { authLogin } from "../redux/features/auth/authSlice";

const login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const router = useRouter();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const submit = async () => {
    const data = {
      user_email: form.email,
      password: form.password,
    };
    await dispatch(authLogin(data));
    await router.replace("/Home");
  };

  return (
    <div className="container m-auto flex h-screen flex-col items-center justify-center bg-slate-50">
      login to your account
      <div className="h-1/4 w-1/2">
        <label className="">
          email :
          <input name="email" value={form.email} onChange={onChange} className="w-full rounded-lg border-2 border-slate-200 px-3 py-3 outline-none focus:border-sky-500" />
        </label>
        <label className="">
          password :
          <input name="password" value={form.password} onChange={onChange} className="w-full rounded-lg border-2 border-slate-200 px-3 py-3 outline-none focus:border-sky-500" />
        </label>
      </div>
      <Button onClick={submit}>Login</Button>
      <Button>SignUp</Button>
    </div>
  );
};

export default login;

export async function getServerSideProps(context) {
  const { token } = context.req.cookies;

  if (token) {
    return {
      redirect: {
        destination: "/Home",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
