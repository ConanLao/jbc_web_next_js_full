// React Imports
import { useState, useEffect } from 'react'

// Next Imports
import Link from 'next/link'

// MUI Imports
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useColorScheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { Theme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { SystemMode } from '@core/types'

// Hook Imports
import { useImageVariant } from '@core/hooks/useImageVariant'

// Styles Imports
import styles from './styles.module.css'
import frontCommonStyles from '@views/front-pages/styles.module.css'

const HeroSection = ({ mode }: { mode: SystemMode }) => {
  // States
  const [transform, setTransform] = useState('')

  // Vars
  const dashboardImageLight = '/images/front-pages/landing-page/hero-dashboard-light.png'

  // const dashboardImageLight =
  // 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixlr.com%2Fimage-generator%2F&psig=AOvVaw3UbFoNPfliAEoCDmn4_iTV&ust=1729687692657000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPiSxfWCookDFQAAAAAdAAAAABAE'
  const dashboardImageDark = '/images/front-pages/landing-page/hero-dashboard-dark.png'
  const elementsImageLight = '/images/front-pages/landing-page/hero-elements-light.png'
  const elementsImageDark = '/images/front-pages/landing-page/hero-elements-dark.png'

  // const heroSectionBgLight = '/images/front-pages/landing-page/hero-bg-light.png'
  const heroSectionBgLight = ''

  // const heroSectionBgLight = '/images/front-pages/landing-page/rb_169261.png'

  // const heroSectionBgLight = '/images/front-pages/landing-page/download.jpeg'
  const heroSectionBgDark = '/images/front-pages/landing-page/hero-bg-dark.png'

  // Hooks
  const { mode: muiMode } = useColorScheme()
  const dashboardImage = useImageVariant(mode, dashboardImageLight, dashboardImageDark)
  const elementsImage = useImageVariant(mode, elementsImageLight, elementsImageDark)
  const heroSectionBg = useImageVariant(mode, heroSectionBgLight, heroSectionBgDark)

  const _mode = (muiMode === 'system' ? mode : muiMode) || mode
  const isAboveLgScreen = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'))

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleMouseMove = (event: MouseEvent) => {
        const rotateX = (window.innerHeight - 2 * event.clientY) / 100
        const rotateY = (window.innerWidth - 2 * event.clientX) / 100

        setTransform(
          `perspective(1200px) rotateX(${rotateX < -40 ? -20 : rotateX}deg) rotateY(${rotateY}deg) scale3d(1,1,1)`
        )
      }

      window.addEventListener('mousemove', handleMouseMove)

      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [])

  return (
    <section id='home' className='overflow-hidden pbs-[75px] -mbs-[75px] relative'>
      <img
        src={heroSectionBg}
        alt='hero-bg'
        className={classnames('bs-[95%] sm:bs-[85%] md:bs-[80%]', styles.heroSectionBg, {
          [styles.bgLight]: _mode === 'light',
          [styles.bgDark]: _mode === 'dark'
        })}
      />
      <div className={classnames('pbs-[88px] overflow-hidden', frontCommonStyles.layoutSpacing)}>
        <div className='md:max-is-[550px] mbs-0 mbe-7 mli-auto text-center relative'>
          <Typography
            className={classnames('font-extrabold sm:text-[42px] text-3xl mbe-4 leading-[48px]', styles.heroText)}
          >
            Start a Charger Rental Business With Confidence
          </Typography>
          <Typography className='font-medium' color='text.primary'>
            Earn from rentals and ads with minimal startup or effort. Scale easily and enjoy consistent, hands-off
            revenue.
          </Typography>
          <div className='flex mbs-6 items-baseline justify-center relative'>
            <div className='flex gap-2 absolute inline-start-[0%] block-start-[41%] max-md:hidden'>
              <Typography className='font-medium'>Join JB Charging</Typography>
              <img src='/images/front-pages/landing-page/join-community-arrow.png' alt='arrow' height='48' width='60' />
            </div>
            <Button
              component={Link}
              size='large'
              href='/front-pages/landing-page#pricing-plans'
              variant='contained'
              color='primary'
            >
              Book a Demo
            </Button>
          </div>
        </div>
      </div>
      <div
        className={classnames('relative text-center', frontCommonStyles.layoutSpacing)}

        // style={{ transform: isAboveLgScreen ? transform : 'none' }}
      >
        {/* <Link href='/' target='_blank' className='block relative'>
          <img src={dashboardImage} alt='dashboard-image' className={classnames('mli-auto', styles.heroSecDashboard)} />
          <div className={classnames('absolute', styles.heroSectionElements)}>
            <img src={elementsImage} alt='dashboard-elements' />
          </div>
        </Link> */}
        <video playsInline autoPlay muted loop className={classnames('mli-auto', 'rounded', styles.heroSecDashboard)}>
          <source src='https://jb-partner-images.s3.amazonaws.com/website/vid/demo_new.mov' type='video/quicktime' />
          <source src='https://jb-partner-images.s3.amazonaws.com/website/vid/demo_new.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  )
}

export default HeroSection
