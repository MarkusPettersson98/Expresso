import React from 'react';
import { ScrollView } from 'react-native';
import ShopView from './ListShopView';
import LoadingScreen from '../loading/loadingCoffee';

import { getAllShops, getShopPicture } from '../../../API/expressoAPI';

export default class Maincomp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ShopViews: [], loading: true, };
    };

    async componentDidMount() {
        // Request all shops names
        const allShops = await getAllShops();

        const shopsWithPictures = await allShops.map(
            async ({ name, street, drinkList }) => {
                return {
                    name: name,
                    picture: await getShopPicture(name),
                    street: street,
                    coffees: drinkList.length,
                };
            },
        );

        // When all promises have resolved, update state
        Promise.all(shopsWithPictures).then(shops => {
            // Create ShopView components to be rendered
            const shopViews = shops.map((shop, index) => (
                <ShopView
                    key={index}
                    name={shop.name}
                    picture={shop.picture}
                    street={shop.street}
                    numcoffees={shop.coffees}
                />
            ));

            // Update state
            this.setState({
                ShopViews: shopViews,
                loading: false,
            });
        });
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                {this.state.loading && <LoadingScreen />}
                {this.state.ShopViews}
            </ScrollView>
        );
    }
}

const styles = {
  container: {
      flexGrow: 1,
      width: '100%',
      flexDirection: 'column',
      backgroundColor: '#FAFAFA',
      justifyContent: 'center',
  },
  cardcontainer: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.05,
        shadowRadius: 4,

        elevation: 2,
  }
};
