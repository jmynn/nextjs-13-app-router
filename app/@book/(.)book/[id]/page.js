import Modal from '@/app/_components/UI/Modal/Modal'
import styles from './page.module.scss'
import { getByID } from '@/app/_services/gallery.service'
import CardBodyModal from '@/app/_components/UI/CardBodyModal/CardBodyModal'
import Like from '@/app/_components/UI/Like/Like'
export async function generateStaticParams(id){
      
}
export default async function page({params : {id}}){
    const [card] = await getByID(id)
    return (
        <Modal>
            <CardBodyModal {...card}>
                <Like id={id}/>
            </CardBodyModal>
        </Modal>
    )
}
