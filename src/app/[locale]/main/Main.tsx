import { useTranslations } from "next-intl";
import Image from "next/image";
import styles from './main.module.scss';
// import { useTranslations } from "next-intl";
// import { Link } from "@/i18n/routing";
// import Link from "next/link";
// import styles from '../app/page.module.css';

export default function Main() {
	const t = useTranslations('Main')
	return (
		<div className={styles.contenedor}>
			<section className={styles.section}>
				<h2>{t('origenes')}</h2>
				<div>
					<div className={styles.foto}>
						<Image
							src="/images/origenes.jpg"
							alt="origenes"
							width={150}
							height={100}
						/>
					</div>
					<div className={styles.texto_foto}>
						<ol>
							<li>
								<b>{t('introduccion_maiz')}</b>{t('el_cultivo_maiz')}
							</li>
							<li>
								<b>{t('sustituto')}</b>{t('epocas_escasez')}
							</li>
						</ol>
					</div>
				</div>
			</section>
			<section className={styles.section}>
				<h2>Idea de negocio</h2>
				<div>
					<div className="foto">
						<Image
							src="/images/sukaldaria.jpg"
							alt="sukaldaria"
							width={150}
							height={100}
						/>
					</div>
					<div className={styles.texto_foto}>
						<p>Mi idea de negocio del talo surgió por la pasión y arraigo que tengo a nuestra cultura gastronómica y con la intención de trasmitir lo que fue el pan de la tradicion vasca y intentar preservar este legado cultural.</p>
					</div>
				</div>
			</section>
		</div>
	)
}
