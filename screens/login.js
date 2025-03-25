import {View, Text, Image, Button, TextInput, StyleSheet, ImageBackground} from 'react-native';

export default function Login(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={{uri:"https://s2-g1.glbimg.com/nvcgNY-D57tVdJ6FmYtAiPQbp1I=/0x0:242x251/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/l/K/JUm2dRSriCk1pIBCJ7Mw/farmington.png"}}/>
                <Text style={styles.title}> Colégio Farmington </Text>
                <Button title='Home' color={'red'}/>
            </View>
            <View style={styles.logincontent}>
                <Text style={styles.logintitle}> Login de Usuário </Text>
                <TextInput
                    placeholder="Usuário"
                    placeholderTextColor={'black'}
                    style={styles.txtinput}
                />
                <TextInput
                    placeholder="Senha"
                    placeholderTextColor={'black'}
                    style={styles.txtinput}
                />
                <Button title='Login' color={'red'}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
    },
    header:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#2887c1',
    },
    title:{
        fontSize: '20px',
        alignSelf: 'center',
    },
    logintitle:{
        fontSize: '20px',
        alignSelf: 'center',
        marginBottom: '25px',
    },
    logo:{
        width: 100,
        height: 100,
    },
    content:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '25px'
    },
    logincontent:{
        alignItems: 'center',
        justifyContent: 'center',
        padding: '25px',
    },
    txtinput:{
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        padding: 10,
        marginBottom: '20px',
    }
})