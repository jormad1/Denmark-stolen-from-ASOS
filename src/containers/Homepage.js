import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView
} from 'react-native';

import {lightBackground} from '../AsosColors';
import Card from '../components/Card'

const premiumDeliveryBanner = 'http://content.asos-media.com/~/media/070417040134en-GB/unisex/service-messages/' +
        '2017/Premier/premier-service-message-iphone-app-v2.png'
const salesBanner = 'http://content.asos-media.com/~/media/040417100631en-GB/mw-homepage/2017/April/1' +
        '1/App/mw-INT-mss-iphone-1024x672-week2.jpg'

const newSeason = 'http://content.asos-media.com/~/media/300317024542en-GB/mw-homepage/2017/April/0' +
        '3/jeans_hero_moment_mw_app.jpg'

const newTrend = 'http://content.asos-media.com/~/media/060417052531en-GB/mw-homepage/2017/April/11/1146x1496-newness-(2).jpg';
const holiday = 'http://content.asos-media.com/~/media/210317114653en-GB/mw-homepage/2017/April/03/springbreak-app-02.jpg';
const activeWear = 'http://content.asos-media.com/~/media/210317114821en-GB/mw-homepage/2017/April/03/mw-activewear-app-01.jpg';
const suitGuide = 'http://content.asos-media.com/~/media/210317114935en-GB/mw-homepage/2017/April/03/mw-occasionwear-app-01.jpg';
const freeDelivery = 'http://content.asos-media.com/~/media/191216102247en-GB/unisex/Free-worldwide-delivery-service-messages/App/iphone/freedelivery-service-message-iphone-1024x138_UK.png'
const salesBanner2 = 'http://content.asos-media.com/~/media/040417100631en-GB/mw-homepage/2017/April/1' +
        '1/App/mw-INT-mss-iphone-1024x672-week2.jpg'
const recommendationBanner = 'http://content.asos-media.com/~/media/100217042313en-GB/asosapp/homepage/SERVICE_MESSAGES_FEB17/v2-unisex-rec-iphone-1024x380-v1.png';
class Homepage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>

                    <Card type='wide' source={premiumDeliveryBanner}/>
                    <Card type='standard' source={salesBanner}/>
                    
                    <ScrollView scrollEnabled={false} contentContainerStyle={styles.gridView}> 
                        <Card type='grid-item' title='NEW TREND' subtitle="Camo you'll want to be seen in" source={newTrend}/>
                        <Card type='grid-item' title='HOLIDAY' subtitle="Spring into summer" source={holiday}/>
                        <Card type='grid-item' title='ACTIVE WEAR' subtitle="Pump up, look sharp" source={activeWear}/>
                        <Card type='grid-item' title='THE SUIT GUIDE' subtitle="Sharp gear for any occasion" source={suitGuide}/> 
                    </ScrollView>

                    <Card type='wide' source={freeDelivery}/>
                    <Card type='standard' source={salesBanner2}/>
                    <Card type='standard-short' source={recommendationBanner}/>

                    <ScrollView horizontal={true} contentContainerStyle={styles.recentView}> 
                        <Card type='grid-item' price='£35.00' subtitle="ASOS light camo jacket" source={newTrend}/>
                        <Card type='grid-item' price='£55.0' subtitle="Spring into summer" source={holiday}/>
                        <Card type='grid-item' price='£67.50' subtitle="Pump up, look sharp" source={activeWear}/>
                        <Card type='grid-item' price='£10.00' subtitle="Sharp gear for any occasion" source={suitGuide}/> 
                    </ScrollView>

                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: lightBackground,
        paddingTop: 20,
        paddingLeft:10,
        paddingRight:10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    scrollView: {
        backgroundColor: lightBackground,
        padding: 20,
        paddingTop:10,
    },
    containerScroll: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridView:{
        flexDirection:'row', 
        flexWrap:'wrap',
        alignItems: 'flex-start',
        justifyContent:'space-around',
    },
    recentView:{
        flexDirection:'row', 
        flexWrap:'nowrap',
        alignItems: 'flex-start',
        justifyContent:'space-between',

    }
});

export default Homepage;