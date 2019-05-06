import React from 'react';
import { AppRegistry, ScrollView, View } from 'react-native';
import { default as ShopView } from './ListShopView';

import { getAllShopNames, getShopPicture } from '../../../API/expressoAPI';

export default class Maincomp extends React.Component {

    constructor(props) {
        super(props);
        this.state = { ShopViews: [] };
    };

    async componentDidMount() {
        // Request all shops names
        const shopNames = await getAllShopNames();

        const shopsWithPictures = await shopNames.map(async shopName => {
            return {
                name: shopName,
                picture: await getShopPicture(shopName),
            };
        });

        // When all promises have resolved, update state
        Promise.all(shopsWithPictures).then(shops => {
            // Create ShopView components to be rendered
            const shopViews = shops.map((shop, index) => (
                <ShopView key={index} name={shop.name} picture={shop.picture} />
            ));

            // Update state
            this.setState({
                ShopViews: shopViews,
            });
        });
    };

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                {this.state.ShopViews}
            </ScrollView>
        );
    }
}
