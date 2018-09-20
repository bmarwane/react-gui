import React from 'react';
import styles from './Box.css'
import { connect } from 'react-redux'

export function Box({ children, gameWidth, gameHeight, boxHeight, fontSize }) {
  var paddingAndBordersExtraSpace = 6;
  const outerBlock = {
    width: gameWidth + 'px',

  }

  const innerBlock = {
    width: (gameWidth * 1) - paddingAndBordersExtraSpace + 'px',
    height: boxHeight ? boxHeight : 'inherited',
    fontSize: fontSize ? fontSize : '8px'
  }

  const bodyDimension = {
    maxHeight: (gameHeight / 3) + 'px',
  }
  return (
    <div style={outerBlock}>
      <div className={styles.box} style={innerBlock}>
        <div className={styles.boxBody} style={bodyDimension}>
          { children }
        </div>

      </div>

    </div>
  )
}

function mapStateToProps(state) {
  return {
    gameWidth: state.main.getIn(['gameConfig', 'width']),
    gameHeight: state.main.getIn(['gameConfig', 'height']),
  }
}

export default connect(mapStateToProps)(Box)
