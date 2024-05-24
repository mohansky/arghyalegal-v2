"use client";
import { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Paragraph } from "./styled-comps/paragraph";

export default function ModalDisclaimer() {
  const [isOpen, setIsOpen] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const data = window.sessionStorage.getItem("DISCLAIMER");
    if (data !== null) setIsOpen(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem("DISCLAIMER", JSON.stringify(isOpen));
  }, [isOpen]);

  return (
    <>
      {isClient ? (
        <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Disclaimer</AlertDialogTitle>
              <AlertDialogDescription>
                <div className="space-y-5 text-justify">
                  <p>
                    The current rules of the Bar Council of India does not
                    permit advertisement or solicitation by advocates in any
                    form or manner.
                  </p>
                  <p>
                    By agreeing to access this site, you confirm that you are
                    seeking information relating to Arghya Legal on your own
                    accord. The content of this website is for informational
                    purposes only and should not be interpreted as legal advice
                    or advertisement.
                  </p>
                  <p>
                    Arghya Legal is the owner of all intellectual property
                    related to this website.
                  </p>
                  <p>
                    We disclaim liability of any nature arising from any
                    information or materials which form a part of this site.
                  </p>
                </div>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction>I Agree</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      ) : (
        <>Loading...</>
      )}
    </>
  );
}
