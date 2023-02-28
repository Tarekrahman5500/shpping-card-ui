import styled from "styled-components";
import {categories} from "../data.js";
import CategoryItem from "./categoryItem.jsx";


const Container = styled.div`
  display: flex;
  padding: 20px;
  
`
const Categories = () => {


    return (
        <Container>
            {
                categories.map(item =>(
                    <CategoryItem item={item} key={item.id}/>
                ))
            }
        </Container>
    );
};

export default Categories;