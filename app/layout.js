import Container from './_components/UI/Container/Container'
import Footer from './_components/UI/Footer/Footer'
import Header from './_components/UI/Header/Header'
import Providers from './_providers/Providers'
import './_styles/globals.scss'
import './_styles/nullstyle.scss'
import { Montserrat } from 'next/font/google'

const monserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
	title: {
		template: '%s | Next Test Site',
		default: 'Next Test Site',
	},
	description: 'Generated by create next app',
}

export default function RootLayout({ children, book, favorites}) {
	return (
		<html lang="en">
			<body className={monserrat.className}>
				<Providers>
					<div className={'container'}>
						<Header />
						<main>
							<Container>
								{children}
								{favorites}
								{book}
							</Container>
						</main>
						<Footer />
					</div>
				</Providers>
			</body>
		</html>
	)
}
