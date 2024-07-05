import React, { useState } from 'react';
import { View, Text, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function LoginScreen({navigation}: any){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
    <View style={{ 
            flex: 1, 
            alignItems: 'center',
            backgroundColor: '#f5f5f5' 
        }}>
        <StatusBar backgroundColor={'white'} barStyle="dark-content" />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image
                source={{
                    uri: 'https://png.pngtree.com/thumb_back/fh260/background/20210825/pngtree-scratched-texture-yellow-brown-abstract-background-image_767909.jpg'
                }}
                style={{
                    paddingRight: 410,
                    width: 100,
                    height: 720,
                    position: 'absolute'
                }}/>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 100 }}>
            <Image
                source={{ uri: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2021/8/21/88f706f5-b5ee-4f2b-acfc-ea65f11aecf0.jpg' }}
                style={{ width: 120, height: 120, borderRadius: 10, }}
            />
            <Text style={{ fontSize: 25, fontWeight: 'bold', marginTop: 10 }}>
                Toko<Text style={{ color: 'white' }}>Boneka Lucu</Text>
            </Text>
            <Text style={{ marginTop: 10, fontWeight: 'bold', }}>Login</Text>
        </View>
        <View style={{ 
            flexDirection: 'row-reverse', 
            alignItems: 'center', 
            marginHorizontal: 50, 
            marginTop: 10, 
            backgroundColor: 'gray', 
            borderRadius: 12, 
            paddingHorizontal: 13,
            elevation: 2
        }}>
            <Icon name="envelope" size={20} color="white"  />
            <TextInput
            value={email}
            onChangeText={setEmail}
            style={{ flex: 1, marginLeft: 2 }}
            placeholder="Email"
            />   
        </View>
        <View style={{ 
            flexDirection: 'row-reverse', 
            alignItems: 'center', 
            marginHorizontal: 50, 
            marginTop: 10, 
            backgroundColor: 'gray', 
            borderRadius: 12, 
            paddingHorizontal: 13,
            elevation: 2
        }}>
            <Icon name="lock" size={20} color="white" />
            <TextInput
            value={password}
            onChangeText={setPassword}
            style={{ flex: 1, marginLeft: 3 }}
            placeholder="Password"
            secureTextEntry={true}
            />
        </View>
        <TouchableOpacity style={{
            backgroundColor: "#1e90ff",
            paddingVertical: 10, 
            paddingHorizontal: 135, 
            marginTop: 30, 
            borderRadius: 10
        }}

        onPress={() => navigation.navigate('ThirdScreen')}>
            
            <Text style={{
            color: 'white',
            textAlign: 'center', 
            fontWeight: 'bold'
            }}>Log in</Text>
        </TouchableOpacity>
        <View style={{
            marginHorizontal: 20, 
            flexDirection: 'row', 
            marginTop: 7
        }}>
        <TouchableOpacity style={{flex: 1, marginLeft: 30}}>
            <Text> Masukan Pace</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginLeft: 80}}>
            <Text>lupa kata sandi?</Text>
        </TouchableOpacity>
        </View>
        <View style={{
            flex: 1, 
            justifyContent: 'center',
            alignItems: 'center', 
            marginTop: 140,
            flexDirection: 'row-reverse',
         }}>
            
        </View>
    </View>
    );
}