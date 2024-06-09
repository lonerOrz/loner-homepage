/*
 * @Author: kasuie
 * @Date: 2024-05-22 14:21:22
 * @LastEditors: kasuie
 * @LastEditTime: 2024-05-30 21:24:59
 * @Description:
 */
"use client";
import { ImageProps, Image } from "./Image";
import { motion } from "framer-motion";

export type AvatarProps = {
  round?: "full" | "50%";
  warpClass?: string;
  isShowMotion?: boolean;
  motions?: object;
} & ImageProps;

export function Avatar({
  warpClass,
  src,
  alt,
  isShowMotion,
  motions,
  ...imageProps
}: AvatarProps) {
  return (
    <motion.div className={warpClass} {...(isShowMotion ? motions : {})}>
      <Image alt={alt || "image"} src={src} {...imageProps} />
    </motion.div>
  );
}
