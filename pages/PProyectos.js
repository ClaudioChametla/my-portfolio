import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Proyectos from '../components/sections/Proyectos'
import Footer from '../components/Footer'
import { useMediaQuery, Stack,Box, Center } from "@chakra-ui/react"

export default function PProyectos(){
    return(
        <Stack>
                <Center flexDir="column">
                    <Hero/>
                    <NavBar/>
                    <Box h="100px"/>
                    <Proyectos/>
                </Center>
            <Footer/>
        </Stack>
    )

}