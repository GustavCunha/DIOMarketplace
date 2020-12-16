import React, { useState, useMemo } from 'react';
import {Feather} from '@expo/vector-icons';
import {
    ActionButton,
    ActionContainer,
    Container,
    Product,
    ProductContainer,
    ProductImage,
    ProductList,
    ProductPrice,
    ProductPriceContainer,
    ProductQuantity,
    ProductSinglePrice,
    ProductTitle,
    ProductTitleContainer,
    SubTotalValue,
    TotalContainer,
    TotalProductsContainer,
    TotalProductsText,
} from './styles';
import { View } from 'react-native';
import EmptyCart from '../../components/EmptyCart';

export default function Cart(){

    const [products, setProducts] = useState([
        {
            id: '1',
            title: 'Assinatura Trimestral',
            image_url: 'https://image.freepik.com/fotos-gratis/dispositivo-tecnologico-com-netfilx-app_23-2147915501.jpg',
            quantity: 3,
            price: 22,
        },{
            id: '2',
            title: 'Assinatura Anual',
            image_url: 'https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/annual_subscription_qyolci.png',
            quantity: 1,
            price: 540
        },{
            id: '3',
            title: 'Assinatura Mensal',
            image_url: 'https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/annual_subscription_qyolci.png',
            quantity: 5,
            price: 45.00
        }
    ]);

    const cartSize = useMemo(()=> {
        return products.length || 0;
    }, [products]);

    const cartTotal = useMemo(()=> {
        const cartAmount = products.reduce((acc, product) => {
            const totalPrice = acc + (product.price * product.quantity);
            return totalPrice;
        }, 0);

        return cartAmount;
    }, [products]);

    return(
        <Container>
            <ProductContainer>
                <ProductList
                    data={products}
                    key={(item) => item.id}
                    ListEmptyComponent={<EmptyCart/>}
                    ListFooterComponent={<View/>}
                    ListFooterComponentStyle={{
                        height: 80
                    }}
                    renderItem={({item}) => (
                        <Product>
                            <ProductImage source={{uri: item.image_url}} />
                            <ProductTitleContainer>
                                <ProductTitle>{item.title}</ProductTitle>

                                <ProductPriceContainer>
                                    <ProductSinglePrice>R$ {item.price}</ProductSinglePrice>

                                    <TotalContainer>
                                        <ProductQuantity>{item.quantity}x</ProductQuantity>

                                        <ProductPrice>R$ {item.price * item.quantity}</ProductPrice>
                                    </TotalContainer>
                                </ProductPriceContainer>
                            </ProductTitleContainer>

                            <ActionContainer>
                                <ActionButton onPress={()=>{}}>
                                    <Feather name="plus" size={16} color='#e83f5b' />
                                </ActionButton>

                                <ActionButton onPress={()=>{}}>
                                    <Feather name="minus" size={16} color='#e83f5b' />
                                </ActionButton>
                            </ActionContainer>
                        </Product>
                    )}
                />
            </ProductContainer>

            <TotalProductsContainer>
                <Feather name="shopping-cart" size={24} color='#fff' />
                <TotalProductsText>{cartSize} {cartSize == 1 ? 'item' : 'itens'}</TotalProductsText>
                <SubTotalValue>R$ {cartTotal}</SubTotalValue>
            </TotalProductsContainer>
        </Container>
    );
}
