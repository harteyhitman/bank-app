import { stats } from "../constants"
import styles from "../style"


const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row 
    flex-wrap sm:mb-20 mb-6 hover:flex-wrap-reverse
    `}>
      {stats.map((stat)=>(
        <div key={stat.id} className="flex-1 flex justify-start items-center flex-row m-3">
          <h4 className="font-poppins font-semibold xs:text-[40px] xs:leading-[53px] leading-43  text-white">{stat.value}</h4>
          <p className="font-poppins xs:leading-[26px] font-normal xs:text-[15px] leading-21 text-[15px] text-gradient uppercase ml-3">{stat.title}</p>
        </div>
      ))}
    </section>
  )
}

export default Stats