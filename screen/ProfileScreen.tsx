import React, { useState } from 'react';
import { Text, View, Image, TextInput, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function ProfileScreen() {
    const [kampus, setKampus] = useState('Malang');
    const [prodi, setProdi] = useState('Owner Toko Boneka Lucu');
    const [tgllahir, setTgllahir] = useState('8 September 2003');
    const [asal, setAsal] = useState('Banyuwangi');
    const [kontak, setKontak] = useState('085794688145');
    const [email, setEmail] = useState('violagit08@gmail.com');

    return (
    <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
            <View style={{ height: 170,}}>
                <View>
                    <Image 
                        source={{
                            uri: 'https://png.pngtree.com/background/20230610/original/pngtree-many-stuffed-teddy-bears-lined-up-in-a-small-wooden-hutch-picture-image_3109810.jpg'
                        }}
                        style={{
                            width: 410,
                            height: 170,
                            position: 'absolute'   
                        }}/>
                </View>
                <View style={{ marginTop: 40, marginLeft: 20, flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={{
                            uri: 'https://i.scdn.co/image/ab6761610000e5eb4fa2555dcede5e4840fb109d'
                        }}
                        style={{
                            width: 100,
                            height: 100,
                            borderRadius: 100 / 2,
                            borderWidth: 4,
                            borderColor: '#a9a9a9',
                        }}/>
                    <View style={{ marginLeft: 20 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white', paddingRight: 150 }}>
                            Viola Doll ^^  
                        </Text>
                        <Text style={{ fontSize: 15, marginTop: 5, color: 'white' }}>
                            Owner
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{ flex: 1, paddingTop: 30 }}>
                <View style={{
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    marginHorizontal: 20,
                    backgroundColor: '#B68574',
                    borderRadius: 12,
                    paddingHorizontal: 13,
                    paddingVertical: 15,
                    elevation: 2
                }}>
                <Icon name="home" size={20} color="black" />
                    <View style={{ flex: 1, marginLeft: 10 }}>
                        <Text style={{ 
                            marginBottom: 1, 
                            fontSize: 17, 
                            color: 'black', 
                            fontWeight: 'bold' 
                            }}>Domisili 
                        </Text>
                        <TextInput
                            value={kampus}
                            onChangeText={setKampus}
                            style={{paddingHorizontal: 1}}/>
                    </View>
                </View>
                <View style={{ 
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    marginHorizontal: 20,
                    marginTop: 10,
                    backgroundColor: '#B68574',
                    borderRadius: 12,
                    paddingHorizontal: 13,
                    paddingVertical: 15,
                    elevation: 2
                }}>
                <Icon name="users" size={20} color="black" />
                    <View style={{ flex: 1, marginLeft: 10 }}>
                        <Text style={{ 
                            marginBottom: 1, 
                            fontSize: 17, 
                            color: 'black', 
                            fontWeight: 'bold' 
                            }}>Pekerjaan 
                        </Text>    
                        <TextInput
                            value={prodi}
                            onChangeText={setProdi}
                            style={{ paddingHorizontal: 1 }}/>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    marginHorizontal: 20,
                    marginTop: 10,
                    backgroundColor: '#B68574',
                    borderRadius: 12,
                    paddingHorizontal: 13,
                    paddingVertical: 15,
                    elevation: 2
                }}>
                <Icon name="calendar-alt" size={20} color="black" />
                    <View style={{ flex: 1, marginLeft: 10 }}>
                        <Text style={{ 
                            marginBottom: 1, 
                            fontSize: 17, 
                            color: 'black', 
                            fontWeight: 'bold' 
                            }}>Tanggal Lahir 
                        </Text>
                        <TextInput
                            value={tgllahir}
                            onChangeText={setTgllahir}
                            style={{paddingHorizontal: 2 }}/>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    marginHorizontal: 20,
                    marginTop: 10,
                    backgroundColor: '#B68574',
                    borderRadius: 12,
                    paddingHorizontal: 13,
                    paddingVertical: 15,
                    elevation: 2
                }}>
                <Icon name="building" size={20} color="black" />
                    <View style={{ flex: 1, marginLeft: 10 }}>
                        <Text style={{ 
                            marginBottom: 1, 
                            fontSize: 17, 
                            color: 'black', 
                            fontWeight: 'bold' 
                            }}>Kota Asal 
                        </Text>
                        <TextInput
                            value={asal}
                            onChangeText={setAsal}
                            style={{paddingHorizontal: 1 }}/>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    marginHorizontal: 20,
                    marginTop: 10,
                    backgroundColor: '#B68574',
                    borderRadius: 12,
                    paddingHorizontal: 13,
                    paddingVertical: 15,
                    elevation: 2
                }}>
                <Icon name="mobile-alt" size={20} color="black" />
                    <View style={{ flex: 1, marginLeft: 10 }}>
                        <Text style={{ 
                            marginBottom: 1, 
                            fontSize: 17, 
                            color: 'black', 
                            fontWeight: 'bold' 
                            }}>Nomor Handphone 
                        </Text>
                        <TextInput
                            value={kontak}
                            onChangeText={setKontak}
                            style={{paddingHorizontal: 1 }}/>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    marginHorizontal: 20,
                    marginTop: 10,
                    backgroundColor: '#B68574',
                    borderRadius: 12,
                    paddingHorizontal: 13,
                    paddingVertical: 15,
                    elevation: 2,
                    marginBottom: 30
                }}>
                <Icon name="envelope" size={20} color="black" />
                    <View style={{ flex: 1, marginLeft: 10 }}>
                        <Text style={{ 
                            marginBottom: 1, 
                            fontSize: 17, 
                            color: 'black', 
                            fontWeight: 'bold' 
                            }}>Email 
                        </Text>
                        <TextInput
                            value={email}
                            onChangeText={setEmail}
                            style={{paddingHorizontal: 1 }}/>
                    </View>
                </View>
                <View style={{flexDirection: 'row', marginBottom: 30 }}>
                     <TouchableOpacity
                        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Icon name="facebook" size={25} color="#bdbdbd" />                       
                    </TouchableOpacity> 
                    <TouchableOpacity 
                        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Icon name="instagram" size={25} color="#bdbdbd" />                       
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Icon name="github" size={25} color="#bdbdbd" />                       
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Icon name="youtube" size={25} color="#bdbdbd" />                       
                     </TouchableOpacity>                                     
                    </View>
                </View>
        </ScrollView>
    </SafeAreaView>
    );
}
