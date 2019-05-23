import React from 'react';
import { AppRegistry, ScrollView, View } from 'react-native';
import ShopView from './ListShopView';

import { getAllShops, getShopPicture } from '../../../API/expressoAPI';

export default class Maincomp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ShopViews: [] };
    };

    async componentDidMount() {
        // Request all shops names
        const allShops = await getAllShops();

        const shopsWithPictures = await allShops.map(async ({name, street, drinkList}) => {
            return {
                name: name,
                picture: await getShopPicture(name),
                street: street,
                coffees: drinkList.length,
            };
        });

        // When all promises have resolved, update state
        Promise.all(shopsWithPictures).then(shops => {
            // Create ShopView components to be rendered
            const shopViews = shops.map((shop, index) => (
                <ShopView key={index} name={shop.name} picture={shop.picture} street={shop.street} numcoffees={shop.coffees} />
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

const styles = {
  container: {
      width: '100%',
      flexDirection: 'column',
      backgroundColor: '#F0F7F4',
      justifyContent: 'center',
  },
};
