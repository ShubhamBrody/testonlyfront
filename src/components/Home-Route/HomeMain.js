/* eslint-disable import/no-anonymous-default-export */

import {useState, Fragment} from 'react';
import axios from 'axios';
import Information from './Information/Information';


export default () => {
    const [dummy, setDummy] = useState('qwqwqw');
    const submitHandler1 = () => {
        console.log("Works!!");
        axios.post('http://localhost:5000/admin/find', {
            username: 'Shubham Tiwari',
            password: 'ShubhamIsAGooDBoY'
        })
        .then(res => {
            setDummy(res.data);
        })
        .catch(err => {
            console.log(err);
        });
    }

    const submitHandler2 = () => {
        console.log("Works!!");
        axios.post('http://localhost:5000/admin/updatepassword', {
            username: 'Shubham Tiwari',
            password: 'ShubhamIsABAdBoy'
        })
        .then(res => {
            setDummy(res.data);
        })
        .catch(err => {
            console.log(err);
        });
    }

    const submitHandler3 = () => {
        console.log("Works!!");
        axios.post('http://localhost:5000/admin/add', {
            username: 'Shubham Tiwari',
            password: 'ShubhamIsABAdBoy'
        })
        .then(res => {
            setDummy(res.data);
        })
        .catch(err => {
            console.log(err);
        });
    }

    const submitHandler4 = () => {
        console.log("Works!!");
        axios.get('http://localhost:5000/home/')
        .then(res => {
            setDummy(res.data);
        })
        .catch(err => {
            console.log(err);
        });
    }
    return (
        <Fragment>
            <button onClick={submitHandler1}>find</button>
            <button onClick={submitHandler2}>update</button>
            <button onClick={submitHandler3}>make one pass</button>
            <button onClick={submitHandler4}>homes home</button>
            <p>The value is : {dummy}</p>
            <Information/>
        </Fragment>
    )
}