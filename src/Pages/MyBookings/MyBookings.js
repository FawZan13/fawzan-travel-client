import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyBookings = () => {
    const [bookings, setBookings] = useState([]);
    const [control, setControl] = useState(false);
    const { user } = useAuth();

    const email = user.email;
    useEffect(() => {
        fetch(`https://dry-forest-48839.herokuapp.com/mybookings/${email}`)
            .then(res => res.json())
            .then(data => setBookings(data));
    }, [control]);

    const handleDelete = (id) => {
        alert('Do you want to delete this item?');
        fetch(`https://dry-forest-48839.herokuapp.com/deleteBooking/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                if (data.deletedCount) {
                    setControl(!control);
                }
            });
    };
    return (
        <div className="text-white">
            <h2 className="mt-5">My Bookings {bookings.length}</h2>
            <h3>{user?.displayName}</h3>
            <span>{email}</span>
            <Row className="text-center ">
                {
                    bookings.map(booking => (
                        <Col sm={12} md={6} lg={4} key={booking._id} className="my-5 px-5 text-center">
                            <Card border="dark" className="shadow-lg" style={{ width: '20rem' }}>
                                <Card.Img style={{ height: '200px' }} variant="top" src={booking.img} />
                                <Card.Body style={{ height: "180px", color: "black" }}>
                                    <Card.Title><h3>{booking.name}</h3></Card.Title>
                                    <Card.Text>
                                        {booking.description}
                                    </Card.Text>
                                </Card.Body>
                                <Button onClick={() => handleDelete(booking?._id)} variant="primary">Cancel</Button>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </div>
    );
};

export default MyBookings;