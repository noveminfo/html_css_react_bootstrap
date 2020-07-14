import React from 'react';
import { Table } from "react-bootstrap";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

function ProductTable(props) {
    const products = props.products;
    const filterText = props.filterText;
    const inStockOnly = props.inStockOnly;

    const rows = [];
    let lastCategory = null;

    products.forEach((product) => {
        if (product.name.indexOf(filterText) === -1) {
            return;
        }

        if (inStockOnly && !product.stocked) {
            return;
        }

        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category} />
            );
        }
        rows.push(
            <ProductRow
                product={product}
                key={product.name} />
        );
        lastCategory = product.category;
    });

    return (
        <Table striped bordered>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </Table>
    );
}

export default ProductTable;