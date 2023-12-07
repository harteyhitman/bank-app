import { feedback } from '../constants'
import styles from '../style'
import FeedbackCard from './FeedBackCard'


const Testimonials = () => {
  return (
    <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      {/* TODO */}
      <div className=' absolute z-0 w-[66%] h-[60%] -right-[50%] rounded-full blue__gradient' />
      <div className='w-full flex 
                       justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1] '>
        <h1 className={styles.heading2}>
          What people are <br className='sm:block hidden' />
          saying about us
        </h1>

        <div className='w-full md:mt-6 mt-6'>
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet
            eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
        </div>
      </div>

      <div className='md:flex flex-row
      '>
        {feedback.map((card) => (
          <div key={card.id}>
             <FeedbackCard  {...card} />
          </div>
         
        ))}
      </div>
    </section>
  )
}

export default Testimonials