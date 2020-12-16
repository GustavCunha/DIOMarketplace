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

    const [products, setProducts] = useState([]);

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
