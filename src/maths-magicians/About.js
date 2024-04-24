import styles from './index.module.css';

const About = () => {
  console.log("about");

  return (
    <main className={styles.about}>
      <h2>About</h2>
      <br />
      <p>This app is a project to training maths calculation.</p>
    </main>
  )
}

export default About
