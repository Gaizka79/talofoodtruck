import { useTranslations } from "next-intl"
import styles from './about.module.scss'

export default function About() {
	const t = useTranslations('Main')
	return (
		<div className={styles.about}>
			<h3>EN EL ABOUT</h3>
			<ol>
				<li>
					<b>{t('introduccion_maiz')}</b>{t('el_cultivo_maiz')}
				</li>
				<li>
					<b>{t('sustituto')}</b>{t('epocas_escasez')}
				</li>
			</ol>
		</div>
	)
}
