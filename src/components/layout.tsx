import React, { useEffect } from "react";
import Header from "./ui/header";
import { useAtom } from "jotai";
import { storageAtom } from "../store";
import { Toaster } from "./ui/toaster";
import { api } from "@/api";
import { useQuery } from "@tanstack/react-query";
import { Storage } from "@/types/storage";

function Layout(props: { children: React.ReactNode }) {
  const { children } = props;
  const [storage, setStorage] = useAtom(storageAtom);
  // const userQuery = useQuery({
  //   queryKey: ["user"],
  //   queryFn: api.user.getUser,
  //   enabled: !!storage?.token,
  //   refetchInterval: 10000,
  // });

  const getStorage = async () => {
    //@ts-ignore
    const storage = localStorage.getItem("h-store");
    if (storage) {
      setStorage(JSON.parse(storage));
    } else {
      setStorage({ token: "", name: "", email: "" });
    }
  };

  useEffect(() => {
    if (!storage) return;
    localStorage.setItem("h-store", JSON.stringify(storage));
  }, [storage]); 

  // useEffect(() => {
  //   if (!storage?.token) return;
  //   if (userQuery.data) {
  //     // setStorage((p: Storage) => ({ ...p, name: userQuery.data.name }));
  
  //     setStorage((p: Storage) => ({ ...p, name: userQuery.data.Name }));
  //   }
  // }, [storage?.token]);

  useEffect(() => {
    getStorage();
  }, []);

  return (
    <div>
      <Header />

      {children}
      <Toaster />
    </div>
  );
}

export default Layout;
