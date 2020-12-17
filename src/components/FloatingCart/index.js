import React, {useMemo} from 'react';
import { useSelector } from 'react-redux';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {
    CartButton,
    CartPricing,
    CartTotalPrice,
    Container,
    CartButtonText
} from './styles';

export default function FloatingCart(){
    const navigation = useNavigation();

    const products = useSelector(({cart}) => cart);

    const cartSize = useMemo(()=> {
        return products.length || 0
    }, [products]);

    const cartTotal = useMemo(() => {
        const cartAmount = products.reduce((acc, product) => {
            const totalPrice = acc + (product.price * product.amount);
            return totalPrice;
        }, 0);

        return cartAmount;
    })

    return(
        <Container>
            <CartButton onPress={() => navigation.navigate('Cart')}>
                <Feather name="shopping-cart" size={24} color="#f3f9ff" />
                <CartButtonText>{cartSize} {cartSize == 1 ? 'item' : 'itens'}</CartButtonText>

                <CartPricing>
                    <CartTotalPrice>R$ {cartTotal}</CartTotalPrice>
                </CartPricing>

                <Feather name="chevron-right" size={24} color="#f3f9ff" />
            </CartButton>
        </Container>
    );
}
