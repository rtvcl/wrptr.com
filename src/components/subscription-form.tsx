"use client";
import axios from "axios";
import { FormEvent, useState } from "react";
import {ImSpinner8} from 'react-icons/im'

type Props = {};

const SubscriptionForm = (props: Props) => {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("Idle");
  const [errorMsg, setErrorMsg] = useState(null);

  const subscribe = async (e: FormEvent) => {
    e.preventDefault();
    setState("Loading");

    try {
      const response = await axios.post("/api/subscribe", { email });
      setState("Success");
      setEmail("");
    } catch (e: any) {
      setErrorMsg(e.response.data.error);
      setState("Error");
    }
  };

  return (
    <div className="relative max-w-2xl p-4 mx-2 mt-12 bg-white shadow-md sm:p-6 sm:mx-auto">
      <h4 className="text-lg font-semibold ">
        don&apos;t miss out.
        <span className="ml-2 text-xs opacity-50">
          (honestly, no idea when the newsletter will arrive, hehe!)
        </span>
      </h4>
      <p className="text-sm">Sign up for my newsletter to stay in the loop.</p>
      <form
        onSubmit={subscribe}
        className="flex items-center w-full gap-2 mt-4"
      >
        <input
          className="border-2 flex-1 border-box bg-[#f1f1f1] border-[#000000] px-4 py-2 text-sm"
          type="text"
          placeholder="email.address@domain.xyz"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={subscribe}
          className=" px-4 text-base font-bold border-[#000000] border-[1px] retro-shadow-sm hover:text-white hover:bg-black transition-colors flex gap-2 items-center "
        >
          {state === "Loading" ? (<>
            <ImSpinner8 className=" animate-spin"/> Loading...
          </>): 'subscribe'} 
        </button>
      </form>
      {state === "Error" && <p className="mt-2 text-xs text-red-700 opacity-50">{errorMsg}</p>}
      {state === "Success" && <p className="mt-2 text-xs opacity-50">Awesome, you&apos;ve been subscribed!</p>}
    </div>
  );
};

export default SubscriptionForm;
