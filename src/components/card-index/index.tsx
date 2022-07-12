import React, {PropsWithChildren, ReactNode, useState} from 'react'

export interface IIndex {
  title: string
  component: ReactNode
}

export interface ICardIndex {
  indecies: IIndex[]
  defaultValue?: string
}

const CardIndex = ({
  indecies,
  defaultValue,
}: ICardIndex) => {
  const titles = indecies.map((idx) => idx.title)

  const [selected, setSelected] = useState('Index 2' ?? defaultValue ?? titles[0])
  const currentComponent = indecies.find((idx) => idx.title === selected)!.component

  let selectedSibling = -1
  const renderIndexTabs = (title: string, index: number, length: number) => {
    const isFirst = index === 0
    const isLast = index === length - 1
    const isSelected = title === selected
    const isSelectedSibling = index === selectedSibling

    let extraClassNames = 'hover:bg-white hover:transition-{background-color}'
    if (!isFirst) {
      extraClassNames += ' -ml-2'
    }

    if (isLast) {
      extraClassNames += ' border-r-2 rounded-br pr-2'
    }

    if (isSelected) {
      selectedSibling = index + 1
      extraClassNames += ' bg-white border-t-transparent rounded-br z-10 border-r-2 pr-2 pb-2 '
    } else {
      extraClassNames += ' bg-slate-100 '
    }

    if (isSelectedSibling) {
      extraClassNames += ' rounded-bl-none pl-4'
    }

    return (
      <div className={`border-t-2 border-b-2 border-x-2 rounded-bl-xl pl-2 pr-4 py-1 hover:cursor-pointer ${extraClassNames}`} onClick={() => setSelected(title)}>
        {title}
      </div>
    )
  }

  return (
    <div className=''>
      <div className='border-2 rounded rounded-br-none p-2'>
        {currentComponent}
      </div>
      <div className='grid grid-flow-col auto-cols-max items-start justify-end ml-3 -mt-[2px]'>
        {titles.map((t, index, arr) => renderIndexTabs(t, index, arr.length))}
      </div>
    </div>
  )
}

export default CardIndex

