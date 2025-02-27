'use client'
import Dark from '@/data/dark.svg'
import Light from '@/data/light.svg'
import { useState, useEffect } from 'react'
import {useTheme} from 'next-themes'

const LogoSwitch = () => {
    const [mounted, setMounted] = useState(false)
    const { resolvedTheme } = useTheme()
    
    useEffect(() => setMounted(true), [])

    return (
        <div>
            {mounted ? (
                resolvedTheme === 'dark' ? <Dark /> : <Light />
            ) : (
                //prevent Flash while Mounting
                <div className='h-6 w-6' />  
            )}
        </div>

    )
}

export default LogoSwitch
   