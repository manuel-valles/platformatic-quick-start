import styles from './page.module.css';

export default async function Home() {
  /**
   * This will fetch the data from the NodeJS app and display it in the Next.js app.
   * `node.plt.local hostname` is the internal hostname for the node service.
   * This domain name would not work outside of a Watt.
   */
  const { content } = await (
    await fetch('http://node.plt.local', { cache: 'no-store' })
  ).json();
  return (
    <div className={styles.page}>
      <main className={styles.main}>${content}</main>
    </div>
  );
}
