import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

function Footer() {
    return (
        <div>
        <Breadcrumb className="my-0">
            
            <Breadcrumb.Item active>Home</Breadcrumb.Item>
            <Breadcrumb.Item href="#">
                Library
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#">Data</Breadcrumb.Item>
            
        </Breadcrumb>
        </div>
    );
}

export default Footer;