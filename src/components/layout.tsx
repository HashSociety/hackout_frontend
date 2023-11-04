import React, { useEffect } from "react";
import Header from "./ui/header";
import { useAtom } from "jotai";
import { storageAtom } from "../store";
import { Toaster } from "./ui/toaster";
import { api } from "@/api";

function Layout(props: { children: React.ReactNode }) {
  const { children } = props;
  const [storage, setStorage] = useAtom(storageAtom);

  const getStorage = async () => {
    //@ts-ignore
    const storage = localStorage.getItem("h-store");
    if (storage) {
      setStorage(JSON.parse(storage));
    } else {
      setStorage({ token: null });
    }
  };

  useEffect(() => {
    if (!storage) return;
    localStorage.setItem("h-store", JSON.stringify(storage));
  }, [storage]);

  useEffect(() => {
    getStorage();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      await getStorage();
      const data = await api.user.getUser();
      console.log(data);
    };
  
    fetchData();
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
