import React from 'react'
import axios from 'axios'

const Finished = (props) => {

    const [orders, setOrders] = React.useState([])

    React.useEffect(() => {
        const planplus = axios.create({
            baseURL: 'https://pp.doubleclick.hr',
            auth: {
                username: 'react@cirrus.hr',
                password: 'plaNPlus'
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
                    )
                })}
            </div>
        )
    }

    return (
        <div className="w30perc">
        <h4 className="subtitle margin-bottom">Finished</h4>
        {renderOrders()}
        </div>
    )
}

export default Finished