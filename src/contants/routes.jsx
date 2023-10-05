import { AiFillHome } from 'react-icons/ai'
import { HiPuzzlePiece } from 'react-icons/hi2'
import { TbSettingsFilled } from 'react-icons/tb'

const iconSize = 20
export const routes = [
  {
    name: 'Home',
    path: '/home',
    icon: <AiFillHome size={iconSize} />
  },
  {
    name: 'Quizz',
    path: '/quizz',
    icon: <HiPuzzlePiece size={iconSize} />
  },
  {
    name: 'Settings',
    path: '/quizz',
    icon: <TbSettingsFilled size={iconSize} />
  }
]
