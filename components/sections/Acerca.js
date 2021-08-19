import { Text, Image,StackDivider,VStack,Box, Center, Flex  } from "@chakra-ui/react"

const acerca = () => {
    return(
      <Flex>
        <VStack>

          <Text fontSize="6xl" fontFamily="cursive" > Acerca de mi </Text>
          
          <Center w="70%" flexDir="column">
          <Text fontSize="1rem" 
          
          >
            Soy un programador mexicano. <br/> 
            Nacido un Octubre en la Ciudad de México crecí en la en este lugar hasta los 10 años y desde 
            esa edad siempre habia tenido curiosidad por el mundo de la tecnologia e interes por las computadoras
             <br/>
            Fue hasta la edad de 13 años que mamá compro mi primera computadora. Con 512 MB de RAM y un procesador de
            900 Mhz empecé a conocer el mundo de Internet. Un dinosaurio pero fiel compañera. <br/>
            Desde niño mi computadora me sirvio para acercarme a diferentes softwares y juegos y al paso de los años
            elegí el camino de la computación y no fue hasta llegar a la universidad que tuve mi primer laptop y
            porfin programar mi primer <Text fontSize="25px"color="green"> Hello World. </Text>        
          </Text>
          <br/>
        </Center>
          <VStack
              divider={<StackDivider/>}
              spacing={1}
            >
              
              <Image
              borderRadius="full"  
              w="250px" 
              h="auto" 
              src="https://st2.depositphotos.com/14128164/42736/v/600/depositphotos_427361636-stock-illustration-beautiful-colorful-illustration-with-shiny.jpg" 
              alt="Imagen Habilidad coding" />
            </VStack>
        </VStack>
      </Flex>
        
    )
}

export default acerca