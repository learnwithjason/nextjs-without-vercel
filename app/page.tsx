import Image from 'next/image';
import styles from './page.module.css';

async function getQuote() {
	const response = await fetch(
		`https://strangerthings-quotes.vercel.app/api/quotes`,
	);

	if (!response.ok) {
		throw new Error('oh no');
	}

	const data = await response.json();

	return data.at(0);
}

export default async function Home() {
	const quote = await getQuote();

	return (
		<main className={styles.main}>
			<div className={styles.description}>
				<p>Waddup chat? {new Date().toLocaleString()}</p>
			</div>
			<pre>{JSON.stringify(quote, null, 2)}</pre>
		</main>
	);
}
