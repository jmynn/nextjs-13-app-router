import Container from '../Container/Container'
import Logo from '../Logo/Logo'
import styles from './Footer.module.scss'
export default function Footer (){
    return (
       <footer className={styles.footer}>
            <Container>
                <div className={styles.row}>
                    <Logo />
                    <div className={styles.country}>Russia Dev</div>
                </div>
            </Container>
       </footer>
    )
}
