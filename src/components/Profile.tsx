import React, { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

const Profile: React.FC = () => {
  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img
        src="https://cdn.statically.io/img/images7.alphacoders.com/100/1009606.png"
        alt="Matheus Olivira"
        style={{objectFit: 'cover'}}
      />
      <div>
        <strong>Matheus Oliveira</strong> 
        <p>
          <img src="icons/level.svg" alt="Level" />
        { level }
        </p>
      </div>
    </div>
  )
}

export default Profile
