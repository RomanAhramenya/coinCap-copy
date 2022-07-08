import Image from 'next/image'
import image from './../../assets/image/loader.gif'

export const Loader = () => {
  return (
    <div style={{width:'100%',textAlign:"center",marginTop:'10rem'}}>
        <Image width={50} height={50}  src={image} alt='load'/>
    </div>
  )
}
