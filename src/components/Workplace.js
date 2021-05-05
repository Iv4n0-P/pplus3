import React from 'react'
import Open from './Open'
import Inprocess from './Inprocess'
import Finished from './Finished'

const Workplace = (props) => {
    
    const id = props.match.params.id
    const [key, setKey] = React.useState(1)

    const handleRefresh = () => {
        setKey(key+1)
    }

    return (
        <div>
            <h3 className="title margin-bottom">{`Workplace ${id}`}</h3>
            <div className="wrap">
                <Open key={Math.random() * key} id={id} handleRefresh={handleRefresh} />
                <Inprocess key={Math.random() * key} id={id} handleRefresh={handleRefresh} />
                <Finished key={Math.random() * key} id={id} handleRefresh={handleRefresh} />
            </div>
        </div>
    )
}

export default Workplace