import { useRouter } from 'next/router'
import styles from '../../styles/blogpost.module.css'

const slug = () => {
  const router = useRouter()
  const { slug } = router.query
  return (
    <div className={styles.grid}>
      <div className={styles.card}>
        <h1> {slug}</h1>
        <div>
          <p>
            lkvnfvjkfdvklfdvklnckvnxcklvxckvnxc<br/>,vnxcv,vcnfdvnjkvkdvjkdvfkdjvbjkdfvbjkjkvchsdkjvbmvbxcmvb<br/>gjhfjhfjhfjhfjhfjhfjhfjhjhccnbcvbcncnvfhgfjkgjhvjgvvghjhvhgvjhvjhvhgvjhvjhvjhvjhjkgjjkgjhjkgjhgjhxmcbvxcb
          </p>
        </div>
      </div>
    </div>
  )
}

export default slug
