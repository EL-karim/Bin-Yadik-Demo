import React, { Component } from 'react'
import Notifications from "./Notifications"
import OrderList from "../orders/OrderList"
import ServiceList from "../services/ServiceList"
import { connect } from 'react-redux'

class Dashboard extends Component {
    render() {
        //console.log(this.props);
        const { orders } = this.props;

        return ( 
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <OrderList orders={orders}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <ServiceList />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        orders: state.order.orders
    }
}

export default connect(mapStateToProps)(Dashboard)