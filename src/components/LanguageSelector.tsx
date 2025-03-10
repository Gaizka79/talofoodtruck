'use client'

import { Link, usePathname } from "@/i18n/routing";
import Image from 'next/image';
import styles from './languageSelector.module.scss';

const LanguageSelector: React.FC = () => {
	const pathname = usePathname()
	return (
		<div className={styles.languageSelector}>
			<Link href={pathname} locale="es">
				<button>
					<Image
						src='/images/locales/espana.png'
						alt="Contiene_trigo"
						width={40}
						height={20}
					/>
				</button></Link>
			<Link href={pathname} locale="eu">
				<button>
					<Image
						src='/images/locales/basque-country-flag.png'
						alt="Contiene_trigo"
						width={40}
						height={20}
					/>
				</button>
			</Link>
		</div>
	)
}

export default LanguageSelector;