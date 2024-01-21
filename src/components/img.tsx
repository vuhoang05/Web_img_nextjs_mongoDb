import Image from "next/image"
export default function ImgHome() {
    return (
        <div className='flex gap-5  justify-center mb-4 '>
            <div className='rounded-lg bg-white text-center p-2 group hover:text-blue-500 hover:bg-white hover:shadow-2xl hover:shadow-black/50 transition-all'>
                <Image className='rounded' src="/anh1.jpg" width={300} height={300} alt="hi"></Image>
                <p className='p-2 font-semibold'>Stupid cat</p>
            </div>
            <div className='rounded-lg  bg-white  text-center p-2 group hover:text-blue-500 hover:bg-white hover:shadow-2xl hover:shadow-black/50 transition-all'>
                <Image className='rounded-tl' src="/anh2.jpg" width={300} height={300} alt="hi"></Image>
                <p className='p-2 font-semibold'>Dumb dog</p>
            </div>
            <div className='rounded-lg bg-white  text-center p-2 group hover:text-blue-500 hover:bg-white hover:shadow-2xl hover:shadow-black/50 transition-all'>
                <Image className='rounded-tl' src="/anh3.jpg" width={300} height={300} alt="hi"></Image>
                <p className='p-2 font-semibold'>Nerd</p>
            </div>
        </div>

    )
}