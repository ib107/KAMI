import { ScrollView, Image } from "react-native";


export default function UserGuide({ navigation }) {
    return (
        <ScrollView> 
<Image style = {{ width: 400, height: 1000, alignContent:'center'}}
source={require('../assets/kami.png')}
resizeMode='cover'
/>


            </ScrollView>
    );
}