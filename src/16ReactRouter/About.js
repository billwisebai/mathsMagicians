import styles from './index.module.css';

const About = () => {
  console.log("about");     
  
  return (
    <main className={styles.about}>
      <h2>About</h2>
      <p>This blog app is a project to learn react router.</p>
    </main>
  )
}

export default About
