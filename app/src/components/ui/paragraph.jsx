import React from 'react'

const Paragraph = (props) => {

    console.log('Paragraph rendered')

    return (<p>{props.children}</p>)
}

export default React.memo(Paragraph);