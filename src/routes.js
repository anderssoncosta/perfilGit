import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Perfil from "./Perfil";
import Repositorios from "./Repositorios";


import { Ionicons } from '@expo/vector-icons'; 



const Tab = createBottomTabNavigator()

function Routes() {
  return(
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor:'#000',
        tabBarShowLabel: true,
        tabBarStyle: {
          borderTopWidth: 0,
          
        }
      }}
    >
      <Tab.Screen
        name="Buscar Usuário"
        component={Perfil}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if(focused){
              return <Ionicons name="search" size={26} color={color} />
            }else{
              return <Ionicons name="search-outline" size={26} color={color} />
            }
          }
        }}
      />
      <Tab.Screen
        name="Repositorios"
        component={Repositorios}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if(focused){
              return <Ionicons name="search" size={26} color={color} />
            }else{
              return <Ionicons name="search-outline" size={26} color={color} />
            }
          }
        }}
      />
    </Tab.Navigator>
  )
}

export default Routes