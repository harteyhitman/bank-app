import  {clients}  from "../constants"
import styles from '../style'


const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
          {clients.map((client)=>(
            <div key={client.logo} className={`flex-1 ${styles.flexCenter}
            sm:min-w-[192px] min-w-[120px]
            `}>
                <img src={client.logo} alt=""  className="sm:w-[192px] w-[100px] object-contain hover:bg-dimWhite"/>
            </div>
          ))}
      </div>
    </section>
  )
}

export default Clients