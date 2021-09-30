import { iconHome, iconComment, iconChat, iconTool } from './Icons'

interface SideLink {
  to: string
  icon: JSX.Element
  text: string
}

export const sideLinks: SideLink[] = [
  {
    to: '/',
    icon: iconHome,
    text: 'ホームページ',
  },
  {
    to: '/comment',
    icon: iconComment,
    text: 'コメント',
  },
  {
    to: '/chat',
    icon: iconChat,
    text: 'チャット',
  },
  {
    to: '/tool',
    icon: iconTool,
    text: 'ツール',
  },
]
