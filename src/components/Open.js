import React from 'react'
import axios from 'axios'

const Open = (props) => {

    const [orders, setOrders] = React.useState([])
    const [refresh, setRefresh] = React.useState(false)

    const planplus = axios.create({
        baseURL: 'https://pp.doubleclick.hr',
        auth: {
            username: 'react@cirrus.hr',
            password: 'plaNPlus'
        }
    })

    const getOrders = async () => {      
        const { data } = await planplus.get(`/hr/work-orders/open/?work_place=${props.id}`)
        setOrders(data.results)
    }

    React.useEffect(() => {
        getOrders()
    }, [])

    const handleOnClick = async (id) => {
        const response = await planplus.put(`/hr/work-orders/set-in-process/${id}/`)
        props.handleRefresh()
    }

    const renderOrders = () => {
        return (
            <div className="order-wrap">
                {orders.map((order) => {
                    return (
                        <div className="order">
                        <p className="col-primary">{order.label}</p>
                            <p><span className="bold">Stol:</span> {order.table}</p>
                            <p><span className="bold">Tip:</span> <span>{order.course_name}</span></p>
                            {order.workorderitem_set.map((item) => {
                                return (
                                    <p>
                                        {item.item_name}
                                    </p>
                                )
                            })}
                            <button onClick={() => {handleOnClick(order.id)}} className="add-btn">Stavi u izradu</button>
                        </div>
                    )
                })}
            </div>
        )
    }

    return (
        <div className="w30perc">
        <h4 className="subtitle margin-bottom">Open</h4>
        {renderOrders()}
        </div>
    )
}

export default Open