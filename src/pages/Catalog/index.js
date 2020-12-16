import React from 'react';
import { useState } from 'react';
import { View } from 'react-native';
import {Feather} from '@expo/vector-icons';
import formatValue from '../../utils/formatValue';
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
import FloatingCart from '../../components/FloatingCart';

export default function Catalog(){

    const [products, setProducts] = useState([]);

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
                                <ProductButton onPress={()=> {}}>
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

