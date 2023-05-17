import { NextPage } from "next";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {} & { params: { other: string } };

function Page({params}: Props) {
  return <div>{params.other}</div>;
}

export default Page;
