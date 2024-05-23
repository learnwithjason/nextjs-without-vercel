import styles from './page.module.css';

export const dynamic = 'force-dynamic';

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.description}>
				<p>Waddup chat? {new Date().toLocaleString()}</p>
			</div>
		</main>
	);
}
