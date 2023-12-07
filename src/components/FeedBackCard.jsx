import {quotes} from '../assets'
const FeedBackCard = ({content, name, title, img}) => {
  return (
    <div className='flex justify-between flex-col p-10 sm:mr-5 ,mr-0 feedback-card rounded-[10px]'>
      <img src={quotes} alt="" className='w-[42px] h-[27] object-contain'/>
      <p 
      className='font-poppins font-normal text-[18px] leading-[32px] text-white my-10'
      >{content}</p>

      <div className='flex flex-row'>
<img src={img} alt={name} className='w-[48px] h-[48px] rounded-full'/>

        <div className='flex flex-col ml-4'>
          <h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-white'>
            {name}
          </h4>
            <p className='font-poppins font-normal text-[16px] leading-[24px] text-dimwhite'
>{title}</p>
        </div>
      </div>
    </div>
  )
}

export default FeedBackCard