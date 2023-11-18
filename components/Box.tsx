import { BoxProps } from '@/types'

const Box = ({ title, description, id }: BoxProps) => {
  return (
    <div className='flex flex-col bg-slate-800 w-full p-4 pr-8 rounded-lg gap-2'>
      <p className='text-lg font-bold'>{title}</p>
      <p className='text-sm text-white/60'>{description}</p>
      <a
        href={id}
        className='hover:bg-slate-900/50 pl-2 p-1 rounded-lg transition-colors'
      >
        View
      </a>
    </div>
  )
}

export default Box
