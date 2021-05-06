import React from 'react'

const Home = (props) => {
    const [workplaces, setWorkplaces] = React.useState([])

    React.useEffect(() => {
        setWorkplaces([
            {
                id: 1,
                label: 'Bar'
            },
            {
                id: 2,
                label: 'Pizzeria'
            },
            {
                id: 3,
                label: 'Kitchen'
            },
            {
                id: 4,
                label: 'Barbecue'
            },
        ])
    }, [])

    const handleOnClick = (id, label) => {
        props.history.push(`/workplace?id=${id}&label=${label}`)
    }

    return (
        <div>
            {workplaces.map((workplace) => {
                return (
                    <div className="pointer margin-bottom" onClick={() => { handleOnClick(workplace.id, workplace.label) }}>
                        <h3>{workplace.label}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default Home