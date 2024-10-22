// React Imports
import type { ImgHTMLAttributes } from 'react'

const JbcLogo = (props: ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <img
      src='https://jb-partner-images.s3.amazonaws.com/website/img/logo.png'
      height='35'
      alt='Logo' // Add an alt attribute for accessibility
      {...props}
    />
  )
}

export default JbcLogo
