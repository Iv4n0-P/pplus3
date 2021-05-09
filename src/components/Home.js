import React from 'react'
import axios from 'axios'
import * as QueryString from 'query-string'

const Home = (props) => {
    const [workplaces, setWorkplaces] = React.useState({})

    const params = QueryString.parse(props.location.search)

    const planplus = axios.create({
        baseURL: 'https://pp.doubleclick.hr',
        auth: {
            username: params.user,
            password: params.pass
        }
    })

    React.useEffect(() => {

        const getWorkplaces = async () => {
            const results = await planplus.get('https://pp.doubleclick.hr/hr/work-orders/work-places')
            setWorkplaces(results.data)
        }

        getWorkplaces()

    }, [])

    const handleOnClick = (id, label) => {
        props.history.push(`/workplace?id=${id}&label=${label}&user=${params.user}&pass=${params.pass}`)
    }

    return (
        <div>
        <h3 className="title margin-bottom">Odaberite radno mjesto</h3>
        <button className="btn-odustani margin-bottom" onClick={() => {props.history.goBack()}}>Logout</button>
            <div className="workplace margin-top" onClick={() => { handleOnClick(0, workplaces[0]) }}>
                <h3>{workplaces[0]}</h3>
            </div>
            <div className="workplace" onClick={() => { handleOnClick(1, workplaces[1]) }}>
                <h3>{workplaces[1]}</h3>
            </div>
            <div className="workplace" onClick={() => { handleOnClick(2, workplaces[2]) }}>
                <h3>{workplaces[2]}</h3>
            </div>
            <div className="workplace" onClick={() => { handleOnClick(3, workplaces[3]) }}>
                <h3>{workplaces[3]}</h3>
            </div>
            <div className="workplace" onClick={() => { handleOnClick(4, workplaces[4]) }}>
                <h3>{workplaces[4]}</h3>
            </div>
        </div>
    )
}

export default Home