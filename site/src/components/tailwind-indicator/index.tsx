import styles from './tailwind-indicator.module.css';

export const TailwindIndicator = () => {
  if (import.meta.env.PROD) return null;

  return (
    <div className={styles.root}>
      <div className="block sm:hidden">xs</div>
      <div className="hidden sm:block md:hidden">sm</div>
      <div className="hidden md:block lg:hidden">md</div>
      <div className="hidden lg:block xl:hidden">lg</div>
      <div className="hidden xl:block 2xl:hidden">xl</div>
      <div className="hidden 2xl:block">2xl</div>
    </div>
  );
};
