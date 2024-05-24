"use client"
import { Icon } from "@iconify/react";
import clsx from "clsx";

interface ContactItemProps {
  title: string;
  contactName: string;
  href: string;
  arialabel: string;
  text: string[];
  id: number;
  className: string;
  icon: string;
}

export default function ContactItem({
  title,
  contactName,
  href,
  arialabel,
  text,
  id,
  className,
  icon,
}: ContactItemProps) {
  return (
    <>
      <li className="mb-3 group">
        <div className="mb-5 w-fit flex">
          <Icon icon={icon}
            className={clsx("mt-1 w-5 h-5 mr-3", className)}/>
          <a
            className={clsx(" ", className)}
            href={href}
            // name={contactName}
            title={title}
            aria-label={arialabel}
            target="_blank"
            rel="noopener noreferrer"
          >
            {text.map((item, index) => {
              return <p key={index}>{item}</p>;
            })}
          </a>
        </div>
      </li>
    </>
  );
}
