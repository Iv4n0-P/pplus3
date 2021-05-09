import React from 'react'
import axios from 'axios'

const Finished = (props) => {

    const [orders, setOrders] = React.useState([])

    React.useEffect(() => {
        const planplus = axios.create({
            baseURL: 'https://pp.doubleclick.hr',
            auth: {
                username: props.user,
                password: props.pass
            }
        })
        const getOrders = async () => {

            const { data } = await planplus.get(`https://pp.doubleclick.hr/hr/work-orders/finished/?work_place=${props.id}`)
            setOrders(data.results)
        }
        getOrders()
    }, [])

    const renderOrders = () => {
        return (
            <div className="order-wrap">
                {orders.map((order) => {
                    return (
                        <div className="order">
                            <div className="col1">
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
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }

    return (
        <div className="w30perc">
            <h4 className="subtitle margin-bottom">Finished</h4>
            <div className="d2">
                <div className="d3">
                    <div className="d4">
                        <div className="d5">
                            {renderOrders()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Finished