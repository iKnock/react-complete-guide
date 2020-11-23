import React, { Component } from 'react'

import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.module.css'

import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        console.log("price: " + this.props.price);
        event.preventDefault();
        //console.log(this.props.ingredients);
        //navigate check out form
        //for now send and save the data to the firestore db
        //Note add .json at the end only for firebase db        
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            customer: {
                name: 'henok ergana',
                address: {
                    street: 'via Addis Abeba 14',
                    zipcode: '24354',
                    country: 'Italy'
                },
                email: 'test@gmail.com'
            },
            deliveryMethod: 'fastest',
            price: this.props.price
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false });
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({ loading: false })
            })
    }

    render() {
        let form = (
            <form>
                <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
                <input className={classes.Input} type="email" name="email" placeholder="Your Email" />
                <input className={classes.Input} type="text" name="street" placeholder="Street" />
                <input className={classes.Input} type="text" name="postal" placeholder="Postal Code" />
                <Button btnType="Success" clicked={this.orderHandler}>Order Here</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;