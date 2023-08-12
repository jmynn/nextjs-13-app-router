import Image from 'next/image'
import styles from './ContainerQueries.module.scss'

export default function ContainerQueries(){
  return(
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.image}>
            <Image src={'/kitty.jpg'} width={330} height={330} alt='kitty'/>
          </div>
          <div className={styles.info}>
            <div className={styles.title}>I'm card title!</div>
            <div className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, voluptas necessitatibus dolore ratione illo explicabo nesciunt blanditiis aperiam eligendi facere maxime placeat magni reprehenderit inventore totam. Dolorem porro necessitatibus nesciunt! Voluptatibus, delectus animi dolores cupiditate, earum dignissimos laborum commodi quibusdam facere dolor tempora, totam consectetur fugit mollitia eum rerum obcaecati sunt officiis debitis? Doloremque ut nisi explicabo, repellendus iusto consectetur unde ullam quia qui expedita distinctio aliquid laboriosam modi veniam, blanditiis error. Omnis officia, dolor ipsam maxime distinctio alias enim quibusdam nostrum laudantium commodi delectus maiores minus magnam odit voluptas nulla. Porro, eveniet explicabo impedit deleniti non commodi expedita architecto magni rem sapiente veritatis vel voluptates alias error dignissimos similique earum dolorem accusamus? Nulla laboriosam reprehenderit, odio sed sit dolorum deserunt nesciunt totam. Maxime, sequi? Libero recusandae, ipsa odit consequatur quam repudiandae velit eveniet provident ducimus tempore aut, voluptatum alias maiores debitis, dolor nostrum excepturi laborum hic suscipit. Cum, dicta?</div>
            </div>
        </div>
      </div>
  )
}