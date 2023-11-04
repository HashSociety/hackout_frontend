import React, { useEffect } from "react";
import Header from "./ui/header";
import { useAtom } from "jotai";
import { storageAtom } from "../store";
import { Toaster } from "./ui/toaster";
import { api } from "@/api";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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

  
  return (
    <div>
      <Header />
       
      {children}
      <Toaster />
    </div>
  );
}

export default Layout;
