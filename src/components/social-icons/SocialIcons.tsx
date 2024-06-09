/*
 * @Author: kasuie
 * @Date: 2024-05-22 15:54:06
 * @LastEditors: kasuie
 * @LastEditTime: 2024-06-06 21:38:36
 * @Description:
 */
"use client";
import {
  Github,
  Twitter,
  QQ,
  Telegram,
  Email,
  Steam,
  Bilibili,
  Discord,
  Instargram,
  X,
  SvgProps,
} from "@kasuie/icon";
import Link from "next/link";
import { Avatar } from "../ui/image/Avatar";
import { clsx, isValidUrl } from "@kasuie/utils";
import { motion } from "framer-motion";
import { Link as LinkType } from "@/config/config";

export const SocialIcons = ({
  links,
  autoAnimate = true,
  motions = {},
}: {
  links: Array<LinkType>;
  autoAnimate?: boolean;
  motions?: object;
}) => {
  const IconsMap: any = {
    github: (props: SvgProps) => <Github {...props} />,
    twitter: (props: SvgProps) => <Twitter {...props} />,
    qq: (props: SvgProps) => <QQ {...props} />,
    telegram: (props: SvgProps) => <Telegram {...props} />,
    email: (props: SvgProps) => <Email {...props} />,
    steam: (props: SvgProps) => <Steam {...props} />,
    bilibili: (props: SvgProps) => <Bilibili {...props} />,
    discord: (props: SvgProps) => <Discord {...props} />,
    instargram: (props: SvgProps) => <Instargram {...props} />,
    x: (props: SvgProps) => <X {...props} />,
  };

  const renderIcon = (key: any, color?: string, size: number = 16) => {
    if (key && Object.keys(IconsMap).includes(key)) {
      return IconsMap[key]({ color, size });
    }
    return null;
  };

  return (
    <motion.div className="px-4 md:px-0" {...motions}>
      <ul className="relative m-0 flex flex-wrap justify-center gap-6 md:gap-9">
        {links?.map((v: LinkType, index: number) => {
          return (
            <Link
              key={index}
              href={v?.url || ""}
              target="_blank"
              className={clsx(
                "group relative flex h-9 w-9 flex-shrink-0 flex-grow-0 cursor-pointer items-center justify-center rounded-full bg-white/60 text-center text-[#3f345f] shadow-[0_5px_25px_#5d46e826] duration-500 ease-linear before:absolute before:left-[-8px] before:top-[-8px] before:h-[calc(100%+16px)] before:w-[calc(100%+16px)] before:rounded-full before:border before:border-[#ffffff8c] before:opacity-0 hover:animate-[move_0.9s_both] hover:before:animate-[1.5s_linear_0s_normal_none_infinite_focuse] dark:bg-transparent",
                {
                  "before:animate-[1.5s_linear_0s_normal_none_infinite_focuse]":
                    autoAnimate,
                }
              )}
            >
              {v.title && (
                <span className="mio-tooltip group-hover:pointer-events-auto group-hover:visible group-hover:bottom-[-50px] group-hover:opacity-100">
                  {v.title}
                </span>
              )}
              {v.icon && isValidUrl(v.icon) ? (
                <Avatar
                  alt={v.title}
                  src={v.icon}
                  width={18}
                  height={18}
                  style={{
                    borderRadius: "50%",
                  }}
                />
              ) : (
                renderIcon(v.icon, v.color)
              )}
            </Link>
          );
        })}
      </ul>
    </motion.div>
  );
};
