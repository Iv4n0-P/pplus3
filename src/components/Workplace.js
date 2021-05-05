import React from 'react'
import Open from './Open'
import Inprocess from './Inprocess'
import Finished from './Finished'
import * as QueryString from 'query-string'

const Workplace = (props) => {
    
    const params = QueryString.parse(props.location.search)
    const id = Number(params.id)
    const label = params.label

    const [key, setKey] = React.useState(1)

    const handleRefresh = () => {
        setKey(key+1)
    }

    return (
        <div>
            <h3 className="title margin-bottom">{`Radno mjesto: ${label}`}</h3>
            <button className="btn-odustani margin-bottom" onClick={() => {props.history.goBack()}}>Povratak</button>
            <div className="wrap">
                <Open key={Math.random() * key} id={id} handleRefresh={handleRefresh} />
                <Inprocess key={Math.random() * key} id={id} handleRefresh={handleRefresh} />
                <Finished key={Math.random() * key} id={id} handleRefresh={handleRefresh} />
            </div>
        </div>
    )
}

export default Workplace