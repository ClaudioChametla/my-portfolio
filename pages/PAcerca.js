import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Acerca from '../components/sections/Acerca'
import Footer from '../components/Footer'

import {  Stack,Box, Center } from "@chakra-ui/react"
export default function PAcerca(){
    return(
        <Stack>
            <Center flexDir="column">
                <Hero/>
                <NavBar/>
                <Acerca/>
                <Box h="100px"/>
            </Center>
            <Footer/>
      </Stack>


    )

}