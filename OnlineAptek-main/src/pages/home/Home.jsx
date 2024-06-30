import React from 'react'
import Header from '../../components/Header/Header'
import FirstSec from '../../components/FirstSec/FirstSec'
import Bonus from '../../components/Bonus/Bonus'
import Healthy from '../../components/Healthy/Healthy'
import Brends from '../../components/Brends/Brends'
import AptekMap from '../../components/AptekMaps/AptekMap'
import PharmBeauty from '../../components/PharmBeauty/PharmBeauty'
import Footor from '../../components/Footor/Footor'
import styles from '../../components/Header/Header.module.scss'
const Home = () => {
  return (
    <div>
        
        <Header/>
        <FirstSec/>
        <Bonus/>
        <Healthy />
        <Brends/>
        <AptekMap/>
        <PharmBeauty/>
        <Footor/>
    </div>
  )
}

export default Home