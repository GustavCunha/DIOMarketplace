import React, { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import { View } from 'react-native';
import {Feather} from '@expo/vector-icons';
import formatValue from '../../utils/formatValue';
import api from '../../services/api';
import FloatingCart from '../../components/FloatingCart';
import * as CartActions from '../../store/modules/cart/actions';
import {
    Container,
    PriceContainer,
    Product,
    ProductButton,
    ProductButtonText,
    ProductContainer,
    ProductImage,
    ProductList,
    ProductPrice,
    ProductTitle,
} from './styles';

export default function Catalog(){
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        async function loadProducts(){
            const {data} = await api.get('/products');

            setProducts(data);
        }

        loadProducts();
    },[]);

    function handleAddToCart(id){
        dispatch(CartActions.addToCartRequest(id));
    }

    return(
        <Container>
            <ProductContainer>
                <ProductList
                    data={products}
                    keyExtractor={(item) => item.id}
                    ListFooterComponent={<View />}
                    ListFooterComponentStyle={{
                        height: 80,
                    }}
                    renderItem={({item}) => (
                        <Product>
                            <ProductImage source={{uri: item.image_url}} resizeMode="contain"/>
                            <ProductTitle>{item.title}</ProductTitle>
                            <PriceContainer>
                                <ProductPrice>R$ {item.price}</ProductPrice>
                                <ProductButton onPress={()=> handleAddToCart(item.id)}>
                                    <ProductButtonText>adicionar</ProductButtonText>
                                    <Feather name="plus-circle" size={30} color="#d1d7e9" />
                                </ProductButton>
                            </PriceContainer>
                        </Product>
                    )}
                />
            </ProductContainer>

            <FloatingCart />
        </Container>
    );
}

