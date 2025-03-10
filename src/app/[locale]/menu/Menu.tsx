import { useTranslations } from "next-intl"
import styles from './menu.module.scss';
import Image from 'next/image';

export default function Menu() {
	const t = useTranslations('Menu')
	return (
		<div className={styles.contenedor}>
			<h2 className={styles.titulo}>{t('menu')}</h2>
			<section className={styles.section}>
				<h3>Talo Nafarroa</h3>
				<div>
					<div className={styles.foto}>
						<Image
							src="/images/menu/talo1.jpg"
							alt="talo1"
							width={350}
							height={400}
						/>
					</div>
					<div className={styles.texto_foto}>
						<p>{t('nafarroa')}</p>
					</div>
					<div className={styles.alergenos}>
						<Image
							src='/images/alergenos/trigo.png'
							alt="Contiene_trigo"
							width={100}
							height={100}
						/>
						<Image
							src='/images/alergenos/huevo.png'
							alt="Contiene_trigo"
							width={100}
							height={100}
						/>
					</div>
				</div>
			</section>
			<section className={styles.section}>
				<h3>Talo Udalaitz</h3>
				<div>
					<div className="foto">
						<Image
							src="/images/menu/talo2.jpg"
							alt="talo2"
							width={350}
							height={400}
						/>
					</div>
					<div className={styles.texto_foto}>
						<p>{t('udalaitz')}</p>
					</div>
					<div className={styles.alergenos}>
						<Image
							src='/images/alergenos/trigo.png'
							alt="Contiene_trigo"
							width={100}
							height={100}
						/>
						<Image
							src='/images/alergenos/huevo.png'
							alt="Contiene_trigo"
							width={100}
							height={100}
						/>
					</div>
				</div>
			</section>
			<section className={styles.section}>
				<h3>Talo Mondra</h3>
				<div>
					<div className="foto">
						<Image
							src="/images/menu/talo3.jpg"
							alt="talo3"
							width={350}
							height={400}
						/>
					</div>
					<div className={styles.texto_foto}>
						<p>{t('mondra')}</p>
					</div>
					<div className={styles.alergenos}>
						<Image
							src='/images/alergenos/trigo.png'
							alt="Contiene_trigo"
							width={100}
							height={100}
						/>
						<Image
							src='/images/alergenos/huevo.png'
							alt="Contiene_trigo"
							width={100}
							height={100}
						/>
					</div>
				</div>
			</section>
		</div>
	)
}
