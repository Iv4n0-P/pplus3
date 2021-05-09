import React from 'react'
import axios from 'axios'

const Inprocess = (props) => {

    const planplus = axios.create({
        baseURL: 'https://pp.doubleclick.hr',
        auth: {
            username: props.user,
            password: props.pass
        }
    })

    const [orders, setOrders] = React.useState([])

    const getOrders = async () => {
        const { data } = await planplus.get(`https://pp.doubleclick.hr/hr/work-orders/in-process/?work_place=${props.id}`)
        setOrders(data.results)
    }

    React.useEffect(() => {
        getOrders()
    }, [])

    const handleOnClick = async (id) => {
        const response = await planplus.put(`/hr/work-orders/set-finished/${id}/`)
        props.handleRefresh()
    }

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
                            <div onClick={() => { handleOnClick(order.id) }} className="btn">
                                <p className="arr-ico">&rsaquo;</p>
                            </div>
                        </div>
                    )
                })}

            </div>

        )
    }

    return (
        <div className="w30perc">
            <h4 className="subtitle margin-bottom">In process</h4>
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

export default Inprocess