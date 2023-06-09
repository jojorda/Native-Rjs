import React from 'react'

import {
    HStack,
    Center,
    NativeBaseProvider,
    Box,
    Pressable,
  } from "native-base";
  import { FontAwesome5 } from '@expo/vector-icons';
  // import { MaterialCommunityIcons } from '@expo/vector-icons';
  

export default function NavbarFooter() {
 
    const [selected, setSelected] = React.useState(1);
    return(
    <NativeBaseProvider  >
        <Box flex={1} bg="light.100" width="100%"  alignSelf="center" position="fixed" justifyItems="end" mt="240">
          <Center flex={1}></Center>
          <HStack  alignItems="center" shadow={6}>
            <Pressable cursor="pointer" opacity={selected === 0 ? 1 : 0.5} py="3" flex={1} onPress={() => setSelected(0)}>
              <Center>    
                <FontAwesome5 name="clipboard-list" size={30} color="red" />
              </Center>
            </Pressable>
            <Pressable cursor="pointer" opacity={selected === 1 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(1)}>
              <Center>
              <MaterialCommunityIcons name="format-list-checks" size={30} color="red" />
              </Center>
            </Pressable>
            <Pressable cursor="pointer" opacity={selected === 2 ? 1 : 0.6} py="2" flex={1} onPress={() => setSelected(2)}>
              <Center>     
              <MaterialCommunityIcons name="checkbox-marked" size={30} color="red" />
              </Center>
            </Pressable>
          </HStack>
        </Box>
      </NativeBaseProvider>
    )
}