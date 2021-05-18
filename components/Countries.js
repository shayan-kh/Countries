import Country from './Country'
import style from './country.module.css'
import React from 'react'
import axios from 'axios'

export default class Countries extends React.Component {
    state = {
        data : []
    }
    componentDidMount(){
        axios.get('https://restcountries.eu/rest/v2/all?fields=name;capital').then(res => {
         this.setState({data: res.data})
         
    })
    
      }
      render(){
    return (
        <div className={style.container}>
        <h1>Countries</h1>
            {this.state.data.map((country) => (
                <Country country={country} />
            ))}
        </div>
    )}
}

