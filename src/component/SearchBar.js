import React from 'react';
import { Form } from 'react-bootstrap';

function SearchBar(props) {
    const filterText = props.filterText;
    const inStockOnly = props.inStockOnly;

    function handleFilterTextChange(e) {
        props.onFilterTextChange(e.target.value);
    }

    function handleInStockChange(e) {
        props.onInStockChange(e.target.checked);
    }

    return (
        <div className="mt-3">
            <Form.Group>
                <Form.Control type="text" placeholder="Search..."
                    value={filterText}
                    onChange={handleFilterTextChange} />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Only show products in stock"
                    checked={inStockOnly}
                    onChange={handleInStockChange} />
            </Form.Group>
        </div>
    );
}

export default SearchBar;