import { IconButton, Flex, Text, Image } from "@chakra-ui/react";
import { theme } from "../../styles/theme";
import detailplant from "../../assets/raminhodetalhe.svg";

import {
  FaTint,
  FaSortAmountUp,
  FaSun,
  FaThermometerQuarter,
  FaFillDrip,
  FaSlidersH,
} from "react-icons/fa";

interface plantMinMax {
  min: number;
  max: number;
}

interface plant {
  name: string;
  cientific_name: string;
  water: number;
  lighting: plantMinMax;
  temperature: plantMinMax;
  height: plantMinMax;
  info: string;
  image: string;
  surname?: string;
  last_watering?: string;
  details?: string;
  userId?: number;
  id?: number;
}

export function CardDashboard({
  name,
  cientific_name,
  water,
  lighting,
  temperature,
  height,
  info,
  image,
  surname,
  last_watering,
  details,
  userId,
  id,
}: plant) {

  const media = (min:number, max:number) => {
    return Math.ceil((min + max)/4)
  }

  return (
    <Flex
      color="green.800"
      flexDirection="column"
      w="17rem"
      h="28rem"
      borderRadius="50px 8px 50px 0px "
      border="3px solid transparent"
      bg="linear-gradient(#FFFFFF, #FFFFFF) padding-box,linear-gradient(60deg, rgba(191,223,215,0) 25%, rgba(24,74,44,1) 50%, rgba(191,223,215,0) 75%) border-box;"
    >
      <Flex flexDirection="column" alignItems="center">
        <Text as="h1" mt="2" fontWeight="500" fontSize="1.125rem">
          {name}
        </Text>
        <Text
          as="span"
          color="green.500"
          fontSize=".625rem"
          fontWeight="light"
          sx={{
            color: "green.500",
            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
            border: "none",
          }}
        >
          {cientific_name}
        </Text>
        <Image w="13rem" h="13rem" src={image} alt="Samambaia" />
        <Image src={detailplant} alt="raminho de planta" w="4.875rem" />
        <Flex gap="10px" mt="10px">
          <Flex flexDirection="column" alignItems="center">
            <FaTint color="#45D2FF" />
            <Text as="span" fontSize=".625rem" fontWeight="light" mt="1">
              {water} dia(s)
            </Text>
          </Flex>
          <Flex flexDirection="column" alignItems="center">
            <FaThermometerQuarter color={theme.colors.temperature[`${media(temperature.min,temperature.max)}`]} />
            <Text as="span" fontSize=".625rem" fontWeight="light" mt="1">
              {`${temperature.min}º-${temperature.max}º`}
            </Text>
          </Flex>
          <Flex flexDirection="column" alignItems="center">
            <FaSortAmountUp />
            <Text as="span" fontSize=".625rem" fontWeight="light" mt="1">
              {`${height.min}cm-${height.max}cm`}
            </Text>
          </Flex>
          <Flex flexDirection="column" alignItems="center">
            <FaSun color="#ffe600" />
            <Text as="span" fontSize=".625rem" fontWeight="light" mt="1">
              {`${lighting.min}h-${lighting.max}h`}
            </Text>
          </Flex>
        </Flex>
        <Text
          as="span"
          fontSize=".625rem"
          fontWeight="light"
          textAlign="left"
          ml="2"
          mb="1"
          mt="2"
          w="13rem"
          color="green.800"
        >
          Lembrar de tirar do quarto e colocar na varanda 2x por semana.
        </Text>
        <Flex gap="3" mt="1">
          <FaFillDrip fontSize="1.5rem" />
          <Text as="h2" fontWeight="medium">
            Próxima rega: 22/01
          </Text>
        </Flex>
        <Text
          as="span"
          fontSize=".625rem"
          fontWeight="light"
          color="green.500"
          textAlign="right"
          width="100%"
          mr="7"
          sx={{
            color: "green.500",
            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
            border: "none",
          }}
        >
          Última rega 20/01
        </Text>
        <IconButton
          color="gray.0"
          bgColor="green.800"
          mt="2"
          borderRadius="50%"
          colorScheme="blue"
          aria-label="Search database"
          icon={<FaSlidersH fontSize="1.5rem" />}
        />
      </Flex>
    </Flex>
  );
}