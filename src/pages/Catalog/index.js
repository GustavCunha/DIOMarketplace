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

    const [products, setProducts] = useState([
        {
            id: '1',
            title: 'Assinatura Trimestral',
            image_url: 'https://image.freepik.com/fotos-gratis/dispositivo-tecnologico-com-netfilx-app_23-2147915501.jpg',
            price: 150,
        },{
            id: '2',
            title: 'Assinatura Anual',
            image_url: 'https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/annual_subscription_qyolci.png',
            price: 540
        },{
            id: '3',
            title: 'Assinatura Mensal',
            image_url: 'https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/annual_subscription_qyolci.png',
            price: 45.0
        }
    ]);

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

