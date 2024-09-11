import React from 'react'
import styles from "./ChartBar.module.css"
import styled from 'styled-components'

const ChartBarStyle = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ChartBarStyle2 = styled.div`
    height: 100%;
    width: 100%;
    border: 2px solid rgb(252, 247, 247);
    border-radius: 12px;
    background-color: grey;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

const ChartBarStyle3 = styled.div`
    background-color: blueviolet;
    width: 100%;
    transition: all 0.3s ease-out;
`

const ChartBarP = styled.p`
    font-weight: bold;
    font-size: 0.8rem;
    text-align: center;
`

const ChartBar = ({maxPrice , currentPrice , label}) => {

    const fillHeight = (100 * currentPrice) / maxPrice

  return (
    <ChartBarStyle className={styles.chartBar} >
      <ChartBarStyle2 className={styles.chartBarInner}>
        <ChartBarStyle3 style={{height: `${fillHeight}%`}} className={styles.chartBarFill}></ChartBarStyle3>
      </ChartBarStyle2>
      <ChartBarP className={styles.chartBarLabel}>{label}</ChartBarP>
    </ChartBarStyle>
  )
}

export default ChartBar
