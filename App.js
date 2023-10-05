import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CadastrarCategoria from "./screens/CadastrarCategoria";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='CadastrarCategoria'
          component={CadastrarCategoria}
          options={{
            title:"Cadastrar",
            headerTintColor: 'red',
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}