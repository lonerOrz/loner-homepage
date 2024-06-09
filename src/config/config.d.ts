/*
 * @Author: kasuie
 * @Date: 2024-05-26 01:00:52
 * @LastEditors: kasuie
 * @LastEditTime: 2024-06-07 18:08:55
 * @Description:
 */
export interface Link {
  title: string;
  color?: string;
  url?: string;
  icon?: string;
}

export interface Site {
  icon?: string;
  title: string;
  url?: string;
  desc?: string;
}

export interface Slider {
  icon?: string;
  title?: string;
  value?: number;
  color?: string;
}

export interface SitesConfig {
  cardStyle?: string;
  hoverBlur?: boolean;
  hoverScale?: boolean;
  hoverFlip?: boolean;
  direction?: string;
  modal?: boolean;
  modalTips?: string;
  modalTitle?: string;
}

export interface SubTitleConfig {
  heart?: boolean;
  shadow?: boolean;
  typing?: boolean;
  typingGap?: number | string;
  loopTyping?: boolean;
  typingCursor?: boolean;
  showFrom?: boolean;
}

export interface SocialConfig {
  autoAnimate?: boolean;
}

export interface BgConfig {
  bg: string; // pc背景图
  mbg: string; // 移动端背景图
  bgStyle?: string; // 背景飘浮风格 可选 sakura 或者 snow 或者自行填写飘浮物资源图片
  blur?: string;
  cardOpacity?: number;
}

interface AvatarConfig {
  src: string; // 头像资源路径
  size?: number; // 头像尺寸
  round?: string; // full | 3xl | xl | sm | md | lg 圆角程度
  hoverAnimate?: string; // top
}

interface LayoutConfig {
  istTransition?: boolean; // 是否启动过渡动画
  gapSize?: string; // sm | md | lg  组件间隔大小
  style?: string;
}

interface PWA {
  theme_color: string;
  background_color: string;
  display: string;
  orientation: string;
  scope: string;
  start_url: string;
  icons: Array<{
    src: string;
    sizes: string;
    type: string;
    purpose: string;
  }>;
  splash_pages: any;
}

interface SlidersConfig {
  data?: Slider[];
  title?: string;
  hidden?: boolean;
  color?: string;
  dotColor?: string;
  column?: number;
}

interface FooterConfig {
  text?: string;
  url?: string;
  ICP?: string; // https://beian.miit.gov.cn
  direction?: string;
  isExternal?: boolean;
}

export interface AppConfig {
  name: string; // 站点标题
  favicon?: string; // 站点图标
  domain: string; // 站点链接
  keywords?: string; // 站点关键词
  description?: string; // 站点描述性信息
  avatarConfig?: AvatarConfig; // 主页头像相关配置
  layoutConfig?: LayoutConfig; // 布局相关的一些配置
  bgConfig: BgConfig; // 背景相关的一些配置
  primaryColor?: string;
  theme?: string;
  subTitle?: string; // 站点头像下方的次标题，可填入一言api，例：https://v1.hitokoto.cn?c=a&c=b&c=c
  subTitleConfig?: SubTitleConfig;
  socialConfig?: SocialConfig;
  footer?: string | FooterConfig; // 底部文字
  links: Link[]; // 社交媒体的链接
  sites: Site[]; // 项目或者其他站点链接
  sitesConfig?: SitesConfig; // sites 渲染组件配置项
  sliders?: SlidersConfig;
}
