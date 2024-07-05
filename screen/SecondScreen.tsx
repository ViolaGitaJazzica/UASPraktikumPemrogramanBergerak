import React, { useState } from 'react';
import { Text, View, Image, SafeAreaView, ScrollView, } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import PromoItem from "./PromoItem";

export default function SecondScreen() {
    return(
        <SafeAreaView style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
        <View>
            <Image 
                source={{
                    uri: 'https://c.pxhere.com/photos/8b/0f/texture_brown_grunge_textured_backgrounds_background_brown_background_surface-844671.jpg!d'
                }}
                style={{
                    height: 160, width: '100%'
                }}/>
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                position: 'absolute',
                alignSelf: 'center',
                top: 20
            }}>Selamat Datang!</Text>
            <View style={{
                marginHorizontal: 25,
                height: 160,
                marginTop: -90,
                backgroundColor: 'gray',
                elevation: 4,
                borderRadius: 20
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 13,
                    marginTop: 10,
                    }}>
                    <Text style={{fontSize: 15, fontWeight: 'bold'}}>Saldo</Text>
                    <Text style={{fontSize: 15, fontWeight: 'bold'}}>Rp. 100.000.000</Text>
                </View>
                <View style={{
                    height: 0.8, 
                    backgroundColor: '#adadad', 
                    marginTop: 10,
                    }}>
                </View>
                <View style={{
                     flexDirection: 'row',
                     marginTop: 34, 
                     marginHorizontal: 38, 
                     justifyContent: 'space-between',
                     }}>
                    <View>
                        <Icon name="paper-plane" size={33} color="black"  />
                        <Text style={{marginTop: 5, alignSelf: 'center'}}>kirim</Text>
                    </View>
                    <View>
                        <Icon name="hand-holding-usd" size={33} color="black"  />
                        <Text style={{marginTop: 5, alignSelf: 'center'}}>minta</Text>
                    </View>
                    <View>
                        <Icon name="database" size={33} color="black"  />
                        <Text style={{marginTop: 5, alignSelf: 'center'}}>top up</Text>
                    </View>
                </View>
            </View>
{/* tanda */}
            <View style={{ width: '100%', alignItems: 'center', 
                    backgroundColor: '#B69574'}}>
                <View style={{
                    marginTop: 30,
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    marginHorizontal: 35,
                    flexWrap: 'wrap',
                    width: '90%',
                    
                }}>
                    <View style={{ alignItems: 'center', width: '23%' }}>
                        <Icon name="money-check-alt" size={33} color="black" />
                        <Text style={{ 
                            marginTop: 5, 
                            alignSelf: 'center', 
                            textAlign: 'center',
                            width: 60,
                    
                        }}>pulsa data
                        </Text>
                    </View>
                    <View style={{ alignItems: 'center', width: '23%' }}>
                        <Icon name="gift" size={33} color="black" />
                        <Text style={{ 
                            marginTop: 5, 
                            alignSelf: 'center', 
                            textAlign: 'center',
                            width: 60
                        }}>hadiah gratis
                        </Text>
                    </View>
                    <View style={{ alignItems: 'center', width: '23%' }}>
                        <Icon name="google-play" size={33} color="black" />
                        <Text style={{ 
                            marginTop: 5, 
                            alignSelf: 'center', 
                            textAlign: 'center',
                            width: 60
                        }}>play store
                        </Text>
                    </View>
                    <View style={{ alignItems: 'center', width: '23%' }}>
                        <Icon name="lightbulb" size={33} color="black" />
                        <Text style={{ marginTop: 5, alignSelf: 'center', textAlign: 'center' }}>
                            listrik
                        </Text>
                    </View>
                </View>

{/* baris kedua */}
                <View style={{
                    marginTop: 20,
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    marginHorizontal: 40,
                    flexWrap: 'wrap',
                    width: '90%'
                }}>
                    <View style={{ alignItems: 'center', width: '23%' }}>
                        <Icon name="wallet" size={33} color="black" />
                        <Text style={{ 
                            marginTop: 5, 
                            alignSelf: 'center', 
                            textAlign: 'center',
                            width: 60
                        }}>tarik saldo
                        </Text>
                    </View>
                    <View style={{ alignItems: 'center', width: '23%' }}>
                        <Icon name="money-bill-wave-alt" size={33} color="black" />
                        <Text style={{ 
                            marginTop: 5, 
                            alignSelf: 'center', 
                            textAlign: 'center',
                            width: 60
                        }}>tarik tunai
                        </Text>
                    </View>
                    <View style={{ alignItems: 'center', width: '23%' }}>
                        <Icon name="credit-card" size={33} color="black" />
                        <Text style={{ 
                            marginTop: 5, 
                            alignSelf: 'center', 
                            textAlign: 'center',
                            width: 60
                        }}>kirim ke bank
                        </Text>
                    </View>
                    <View style={{ alignItems: 'center', width: '23%' }}>
                        <Icon name="tasks" size={33} color="black" />
                        <Text style={{ 
                            marginTop: 5, 
                            alignSelf: 'center', 
                            textAlign: 'center',
                            width: 60 
                        }}>lain lainya
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{height: 20, width: '100%', backgroundColor: 'white', marginTop: 30}}>
            </View>
            <View style={{
                marginHorizontal: 16,
                width: '100%', 
                flexDirection: 'row', 
                flexWrap: 'wrap'}}>

                <PromoItem
                    image={{uri : "https://asset.kompas.com/crop/0x0:1000x667/750x500/data/photo/2018/07/01/3248986025.jpg"}}
                    text="Toko Terlaris"
                    diskon=""
               
                
                />
                <PromoItem
                    image={{uri : "https://ae01.alicdn.com/kf/S72d97d0bef6f45b7b72ef6144a24472fA.jpg_640x640Q90.jpg_.webp"}}
                    text="Toko Termurah"
                    diskon="Diskon 70%"
                />
                <PromoItem
                    image={{uri : "https://lokasiterdekat.com/wp-content/uploads/2023/04/Toko-Boneka-Terdekat.jpg"}}
                    text="Toko Terlengkap"
                    diskon=""
                />
                <PromoItem
                    image={{uri : "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/93/MTA-99310330/tidak_ada_merk_boneka_lumba_lumba_besar_jumbo_full01_ae08cb1b.jpeg"}}
                    text="Toko Murah Lainnya"
                    diskon="Diskon 50%"
                />
            </View>
        </View>
        </ScrollView>
        </SafeAreaView>
    )
} 