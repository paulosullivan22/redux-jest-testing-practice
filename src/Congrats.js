import React from 'react'
import PropTypes from 'prop-types'

const Congrats = props => {
    return (
        <div data-test="component-congrats" className="alert alert-success">
            {props.success ? 
                <p data-test="success-message">You guessed the word!</p>
                : null
            }
        </div>
    )
}

Congrats.propTypes = {
    success: PropTypes.bool.isRequired
}

export default Congrats