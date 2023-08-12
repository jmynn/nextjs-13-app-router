'use server'
import styles from './Popover.module.scss'

export default async function Popover() {
	return (
		<>
			<button className={styles.show} popovertarget="popup">
				Show popup (у меня кликабельный бэкграунд)
			</button>
			<div className={styles.popup} id="popup" popover="true">
				<div className={styles.body}>
					<div className={styles.title}>У меня нет overscroll</div>
					<div className={styles.text}>
						<p>Я текст попапа**</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Quam animi quis tempora dolorem eveniet,
							corporis, quisquam amet nihil eaque odio culpa
							possimus accusantium repudiandae dolore incidunt
							facere labore dolorum hic, sint sunt repellendus
							facilis aperiam nemo. Minima ipsum perspiciatis modi
							blanditiis, aliquid soluta. Repellat voluptatibus
							optio provident, perspiciatis eum modi, facilis
							adipisci rerum ex quas voluptas dicta ipsa
							praesentium tenetur dolores quos saepe! Voluptas
							laboriosam fuga tenetur, et, iusto impedit vitae
							rerum nihil deleniti voluptatibus odio omnis amet
							dicta officiis architecto natus unde. Est eos porro
							nemo unde minus voluptate? Eaque, reprehenderit.
							Quod magnam, doloremque cum a accusantium et.
							Dignissimos, aliquam quas velit ratione nostrum
							accusamus facere molestias vel enim assumenda, fuga
							neque iste iure! Harum provident delectus
							laboriosam, minima accusamus odio suscipit
							accusantium dolores animi ullam nostrum unde
							perspiciatis at quas voluptatem repellendus, nam
							distinctio fugiat doloremque hic, illum eos
							cupiditate pariatur? Deleniti impedit veniam
							architecto harum non possimus.
						</p>
					</div>
					<button popovertarget="popup" popovertargetaction="hide">
						Close
					</button>
				</div>
			</div>
		</>
	)
}
