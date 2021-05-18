
import styles from './country.module.css'

export default function Country({country}){
    
    return (
    <div className={styles.country}>
    <ul>
        <li>country: {country.name}</li>
        <li>capital: {country.capital}</li>
    </ul>
    </div>
    )
}

