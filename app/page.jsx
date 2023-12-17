import styles from "@/app/ui/homepage/homepage.module.css";

const Homepage = () => {
  return (
    <div className={styles.container}>
      <form action="/login" className={styles.form}>
        <button>Enter</button>
      </form>
    </div>
  );
};

export default Homepage;