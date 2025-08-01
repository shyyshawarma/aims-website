import React from 'react'
import { cn } from '@/lib/utils'

function Blob({classname}) {
  return (
    <div className={cn(
      "bg-[#0276be]/60 absolute w-32 h-64 rounded-full blur-3xl -z-50",
        classname)}
    />
  )
}

export default Blob