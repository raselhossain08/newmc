import { useEffect, useState } from "react";
import {
  Box,
  Button,
  CloseButton,
  Divider,
  HStack,
  Image,
  Input,
  position,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BsCheck, BsPerson } from "react-icons/bs";
import { AiFillCloseCircle, AiFillCheckCircle } from "react-icons/ai";
import { ImUser } from "react-icons/im";
import { useFormik } from "formik";
import { motion } from "framer-motion";

export const Wiser = () => {
  const [step, setStep] = useState(1);
  function handleToggle() {
    setStep((prev) => prev + 1);
  }
  const formik = useFormik({
    initialValues: {
      firstName: "",
      phone: "",
      email: "",
      dob: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      handleToggle();
    },
  });
  const content = (
    <section>
      <Stack
        display="grid"
        placeContent="center"
        position="relative"
        h="12rem"
        pb={8}
      >
        <Box
          position="relative"
          display="grid"
          placeContent="center"
          // bg="green.200"
          w="fit-content"
          alignSelf="center"
        >
          <Image
            src="/wiseCard.svg"
            rounded="10px"
            borderRadius="10px"
            w="203px"
            h="165px"
            maxH="10rem"
            paddingTop="10px"
          />
        </Box>
        <Box
          position="absolute"
          display="grid"
          placeContent="center"
          left="39%"
          w="15rem"
          bottom="-4"
          alignSelf="center"
        >
          <Image
            src="/wizer.png"
            rounded="10px"
            borderRadius="10px"
            w="150px"
            h="99px"
            maxH="10rem"
            position={"relative"}
            top="12px"
            left="-50px"
          />
        </Box>
      </Stack>
      <Stack
        position="relative"
        display="flex"
        direction="column"
        alignItems="center"
        gap="4"
        padding="20px 0"
      >
        <Stack
          display="flex"
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          gap="1"
        >
          <Box display="flex" alignItems="center" gap={2}>
            <Box
              bg="#0CA64C"
              rounded="100px"
              height="23px"
              width="24px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <BsCheck color="#fff" fontSize="15px" />
            </Box>
            <Text
              fontWeight="400"
              fontSize="16px"
              fontFamily="'Actor', sans-serif"
            >
              Payment & Invoice
            </Text>
          </Box>
          <Box w="30rem" pl={8}>
            <Text
              fontWeight="400"
              fontSize="15px"
              color="#BDBDBD"
              fontFamily="'Actor', sans-serif"
            >
              We'll worry about the transactions and payment. You can sit back
              and relax while you make your clients happy.
            </Text>
          </Box>
        </Stack>
        <Stack
          display="flex"
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          gap="1"
        >
          <Box display="flex" alignItems="center" gap={2}>
            <Box
              bg="#0CA64C"
              rounded="100px"
              height="23px"
              width="24px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <BsCheck color="#fff" fontSize="15px" />
            </Box>
            <Text
              fontWeight="400"
              fontSize="16px"
              fontFamily="'Actor', sans-serif"
            >
              Discounts & Offers
            </Text>
          </Box>
          <Box w="30rem" pl={8}>
            <Text
              fontWeight="400"
              fontSize="15px"
              color="#BDBDBD"
              fontFamily="'Actor', sans-serif"
            >
              We'll worry about the transactions and payment. You can sit back
              and relax while you make your clients happy.
            </Text>
          </Box>
        </Stack>
        <Stack
          display="flex"
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          gap="1"
        >
          <Box display="flex" alignItems="center" gap={2}>
            <Box bg="#0CA64C" rounded="100px" height="23px" width="24px">
              <BsCheck color="#fff" fontSize="1.5rem" />
            </Box>
            <Text
              fontWeight="400"
              fontSize="16px"
              fontFamily="'Actor', sans-serif"
            >
              How much card
            </Text>
          </Box>
          <Box w="30rem" pl={8}>
            <Text
              fontWeight="400"
              fontSize="15px"
              color="#BDBDBD"
              fontFamily="'Actor', sans-serif"
            >
              We'll worry about the transactions and payment. You can sit back
              and relax while you make your clients happy.
            </Text>
          </Box>
        </Stack>
        <Stack display="flex" direction="row" pt="3" gap="1">
          <Stack
            // spacing={{ start: "5px", md: "20px" }}
            w="full"
            maxWidth="283.79px"
            h="full"
            maxH="167px"
            rounded="15px"
            display="flex"
            direction="column"
            alignItems="center"
            justify="center"
            bg="black.0"
            cursor="pointer"
          >
            <iframe
              style={{ borderRadius: "10px" }}
              src="https://fast.wistia.net/embed/iframe/wii6w7ge4t"
              title=" [Example Video] Wistia Video Essentials"
              allow="autoplay; fullscreen"
              scrolling="no"
              width="100%"
              height="100%"
            ></iframe>
          </Stack>
          <Stack
            display="flex"
            direction="column"
            justifyContent="space-between"
            alignItems="center"
            w="full"
            py={3}
          >
            <Box display="flex" gap="4">
              <Image src="/card1.png" w="67px" h="41px" />
              <Image src="/card2.png" w="67px" h="41px" />
              <Image src="/card3.png" w="67px" h="41px" />
            </Box>
            <Box>
              <Button
                bg="#0CA64C"
                onClick={handleToggle}
                width="250px"
                height="41px"
                display="flex"
                padding="0"
                alignItems="center"
                marginBottom="10px"
              >
                <Text
                  fontFamily="'NTR', sans-serif"
                  fontSize="16px"
                  lineHeight="34px"
                  fontWeight="400"
                >
                  Purchase
                </Text>
                <Text
                  position="relative"
                  height="20px"
                  width="1px"
                  backgroundColor="#fff"
                  margin="0 4px"
                  top="-1px"
                ></Text>
                <Text
                  fontFamily="'Libre Franklin', sans-serif;"
                  fontSize="16px"
                  lineHeight="34px"
                  fontWeight="400"
                  letterSpacing="0.02em"
                >
                  {" "}
                  $ 10.70
                </Text>
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </section>
  );

  const paymentContent = (
    <Stack
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap="4"
      w="full"
      height="full"
    >
      <Stack
        position="relative"
        display="flex"
        direction="column"
        alignItems="center"
        gap="4"
        w="50%"
        h="90%"
        bg="blackAlpha.600"
        px="10"
        py="10"
        rounded="xl"
      >
        <Box
          position="absolute"
          left="4"
          top="4"
          cursor="pointer"
          onClick={() => setStep((prev) => prev - 1)}
        >
          <AiFillCloseCircle fontSize="1.5rem" />
        </Box>
        <VStack
          alignItems="start"
          spacing={{ start: "0px", md: "0px" }}
          w="full"
          position="relative"

        >
          <Divider height="30px" borderColor="transparent" />
          <Text color="whiteAlpha.700">Account Cost </Text>
          <Text fontSize="30px">price $ </Text>
          <Divider h="10px" borderColor="transparent" />
          <VStack
            w="full"
            bg="#2C55FB"
            p="20px"
            rounded="5px"
            spacing="20px"
            alignItems="start"
          >
            <Text fontSize="40px" lineHeight="40px">
              Market <p /> Place Accounts
            </Text>
            <Text color="whiteAlpha.900">v1.0</Text>
          </VStack>
          <VStack w="full" alignItems="start" spacing="10px" pt="20px">
            <Text fontSize="20px"> Summary </Text>

            <HStack w="full" justifyContent="space-between">
              <Text>Item Subtotal : </Text>
              <Text>price $</Text>
            </HStack>
            <Divider borderColor="rgb(260,260,260,20%)" />
            <HStack w="full" justifyContent="space-between">
              <Text>Tax : </Text>
              <Text>0 $</Text>
            </HStack>
            <Divider borderColor="rgb(260,260,260,20%)" />

            <HStack w="full" justifyContent="space-between">
              <Text>Order Total : </Text>
              <Text>10 $</Text>
            </HStack>
            <Divider borderColor="rgb(260,260,260,0%)" h="20px" />
            <Stack
              w="22rem"
              h="6rem"
              bg="#6FCF97"
              display="flex"
              direction="row"
              alignItems="center"
              rounded="md"
              position="relative"
              px="5"
            >
              <Box
                bg="#000"
                w="3rem"
                h="3rem"
                display="grid"
                placeContent="center"
                rounded="md"
              >
                <ImUser color="#fff" fontSize="1.5rem" />
              </Box>
              <Box rounded="md" onClick={handleToggle} cursor="pointer">
                <Text textColor="white" fontSize="1rem">
                  Purchase now
                </Text>
                <Text textColor="whiteAlpha.700" fontSize="1rem">
                  you total account sold
                </Text>
                <Text textColor="whiteAlpha.700" fontSize=".95rem">
                  0.99999999999994676798$
                </Text>
              </Box>
            </Stack>
          </VStack>
        </VStack>
      </Stack>
    </Stack>
  );

  const formContent = (
    <Stack
      display="flex"
      direction="row"
      h="full"
      alignItems="center"
      px={10}
      justifyContent="space-between"
    >
      <Stack w="22rem">
        <Box
          position="relative"
          display="grid"
          placeContent="center"
          // bg="green.200"
          w="fit-content"
          alignSelf="center"
        >
          <Image
            src="/ezgif.png"
            rounded="10px"
            borderRadius="10px"
            w="203px"
            h="165px"
            maxH="10rem"
          />
        </Box>
        <Box position="relative" w="fit-content">
          <div className="steps_wrapper">
            <ol className="c-stepper">
              <li className="stepper__item">
                <span className="stepper__desc">
                  <BsCheck color="#fff" fontSize="1.5rem" />
                </span>
                <p className="stepper__title">Ordered</p>
              </li>
              <li className="stepper__item">
                <span className="stepper__desc">
                  <BsCheck color="#fff" fontSize="1.5rem" />
                </span>
                <p className="stepper__title">Info Process</p>
              </li>
              <li className="stepper__item">
                <span className="stepper__desc">
                  <Image
                    src="/timerIcon.png"
                    rounded="10px"
                    borderRadius="10px"
                    w="1rem"
                    h="1rem"
                    maxH="10rem"
                  />
                </span>
                <p className="stepper__title">Processing</p>
              </li>
              <li className="stepper__item">
                <span className="stepper__desc">
                  {/* <BsCheck color="#fff" fontSize="1.5rem" /> */}
                  <Image
                    src="/timerIcon.png"
                    rounded="10px"
                    borderRadius="10px"
                    w="1rem"
                    h="1rem"
                    maxH="10rem"
                  />
                </span>
                <p className="stepper__title">Created</p>
              </li>
            </ol>
            <div className="_vl" />
            <div
              className="vl"
              style={
                step === 3
                  ? { width: "65%", transition: "all 0.6s" }
                  : step === 4
                  ? { width: "80%", transition: "all 0.6s" }
                  : { width: "0%", transition: "all 0.6s" }
              }
            />
          </div>
        </Box>
      </Stack>
      <Stack w="20rem" display="flex" direction="column" gap={4}>
        <form onSubmit={formik.handleSubmit}>
          <Stack
            w="full"
            display="flex"
            direction="column"
            alignItems="center"
            gap={4}
          >
            <Box w="full" position="relative">
              <label htmlFor="firstName" >
                First , Last name{" "}
              </label>
              <Text
                position="relative"
                height="1px"
                width="86px"
                background="#160938db"
                top="1px"
                left="11px"
                zIndex="5"
              ></Text>
              <Input
                letterSpacing="0.005em"
                width="100%"
                fontFamily={"'Abel', sans-serif"}
                height="56px"
                border="solid 1.25px #6184FF"
                borderRadius="10px"
                paddingLeft="50px"
                id="firstName"
                name="firstName"
                placeholder={"First Name"}
                color="#FFFFFF"
                fontSize={"14px"}
                _placeholder={{
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "18px",
                  letterSpacing: "0.005em",
                  color: "#949494",
                  fontFamily: "'Abel', sans-serif",
                  opacity: "0.7",
                }}
                type={"text"}
                bg="transparent"
                onChange={formik.handleChange}
                value={formik.values.firstName}
              />
              <Box position="absolute" left={4} top="5">
                <Image position="relative" top="24px" src="./peopleIcon.svg" />
              </Box>
            </Box>

            <Box w="full" position="relative">
              <label htmlFor="firstName" >
                Phone number
              </label>
              <Text
                position="relative"
                height="1px"
                width="75px"
                background="#160938db"
                top="1px"
                left="11px"
                zIndex="5"
              ></Text>
              <Input
                fontFamily={"'Abel', sans-serif"}
                width="100%"
                height="56px"
                border="solid 1.25px #6184FF"
                borderRadius="10px"
                paddingLeft="50px"
                bg="transparent"
                id="phone"
                name="phone"
                placeholder={"Phone Number"}
                color="#FFFFFF"
                fontSize={"14px"}
                letterSpacing="0.005em"
                _placeholder={{
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "18px",
                  letterSpacing: "0.005em",
                  color: "#949494",
                  opacity: "0.7",
                  fontFamily: "'Abel', sans-serif",
                }}
                type={"tel"}
                onChange={formik.handleChange}
                value={formik.values.phone}
              />

              <Box position="absolute" left={4} top="5">
                <Image position="relative" top="24px" src="./peopleIcon.svg" />
              </Box>
            </Box>

            <Box w="full" position="relative">
              <label htmlFor="firstName" >
                Email
              </label>
              <Text
                position="relative"
                height="1px"
                width="43px"
                background="#160938db"
                top="1px"
                left="11px"
                zIndex="5"
              ></Text>
              <Input
                fontFamily={"'Abel', sans-serif"}
                width="100%"
                height="56px"
                border="solid 1.25px #6184FF"
                borderRadius="10px"
                paddingLeft="50px"
                bg="transparent"
                id="email"
                name="email"
                placeholder={"Email"}
                color="#FFFFFF"
                fontSize={"14px"}
                letterSpacing="0.005em"
                _placeholder={{
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "18px",
                  letterSpacing: "0.005em",
                  color: "#949494",
                  opacity: "0.7",
                  fontFamily: "'Abel', sans-serif",
                }}
                type={"email"}
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <Box position="absolute" left={4} top="5">
                <Image position="relative" top="24px" src="./peopleIcon.svg" />
              </Box>
            </Box>

            <Box w="full" position="relative">
              <label htmlFor="firstName" >
                Birth Date 01/10/2000
              </label>
              <Text
                position="relative"
                height="1px"
                width="114px"
                background="#160938db"
                top="1px"
                left="11px"
                zIndex="5"
              ></Text>
              <Input
                letterSpacing="0.005em"
                id="dob"
                name="dob"
                width="100%"
                height="56px"
                border="solid 1.25px #6184FF"
                borderRadius="10px"
                paddingLeft="50px"
                bg="transparent"
                placeholder={"Date of Birth"}
                type={"date"}
                onChange={formik.handleChange}
                value={formik.values.dob}
                color="#FFFFFF"
                fontSize={"14px"}
                _placeholder={{
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "18px",
                  letterSpacing: "0.005em",
                  color: "#949494",
                  opacity: "0.7",
                  fontFamily: "'Abel', sans-serif",
                }}
              />
              <Box position="absolute" left={4} top="5">
                <Image position="relative" top="24px" src="./peopleIcon.svg" />
              </Box>
            </Box>
            <Box>
              <Button
                bg="#0CA64C"
                type="submit"
                width="250px"
                height="41px"
                padding={"0"}
                display="flex"
                alignItems={"center"}
                justifyContent="center"
                fontSize="16px"
                fontWeight="400"
                lineHeight="34px"
                color="#FFFFFF"
              >
                submit & Purchase
              </Button>
            </Box>
          </Stack>
        </form>
      </Stack>
    </Stack>
  );

  const successMessage = (
    <Stack display="flex" alignItems="center" h="full">
      <Stack
        display="grid"
        placeContent="center"
        position="relative"
        pb={8}
        mt="10"
      >
        <Box
          position="relative"
          display="grid"
          placeContent="center"
          w="fit-content"
          alignSelf="center"
        >
          <Image
            src="/wiseCard1.png"
            rounded="10px"
            borderRadius="10px"
            w="160px"
            h="130px"
            maxH="10rem"
          />
        </Box>
      </Stack>
      <Stack
        position="relative"
        w="23rem"
        h="20rem"
        bg="#0CA64C"
        rounded="1.5rem"
        display="flex"
        alignItems="center"
      >
        <Box mt={2}>
          <AiFillCheckCircle fontSize="4rem" color="black" />
        </Box>
        <Box position="absolute" top={-16} right="-5" w="64px" h="64px">
          <Text fontSize="4rem">🎉</Text>
        </Box>
        <Box px={8}>
          <Text fontSize="1.5rem" fontWeight="400" fontStyle="normal">
            Thank you for your order
          </Text>
          <Text pt={8} fontSize="13px" fontWeight="600" fontStyle="normal">
            After 2 days / 3 days, check your email, we will contact you to
            complete the card procedures
          </Text>
        </Box>
        <Box position="relative" h="fit-content" bottom={-3}>
          <Image
            src="/building.png"
            rounded="10px"
            borderRadius="10px"
            w="145px"
            h="151px"
          />
        </Box>
      </Stack>
      <Box position="relative" w="fit-content" top={10}>
        <div className="steps_wrapper">
          <ol className="c-stepper">
            <li className="stepper__item">
              <span className="stepper__desc">
                <BsCheck color="#fff" fontSize="1.5rem" />
              </span>
              <p className="stepper__title">Ordered</p>
            </li>
            <li className="stepper__item">
              <span className="stepper__desc">
                <BsCheck color="#fff" fontSize="1.5rem" />
              </span>
              <p className="stepper__title">Info Process</p>
            </li>
            <li className="stepper__item">
              <span className="stepper__desc">
                <Image
                  src="/timerIcon.png"
                  rounded="10px"
                  borderRadius="10px"
                  w="1rem"
                  h="1rem"
                  maxH="10rem"
                />
              </span>
              <p className="stepper__title">Processing</p>
            </li>
            <li className="stepper__item">
              <span className="stepper__desc">
                {/* <BsCheck color="#fff" fontSize="1.5rem" /> */}
                <Image
                  src="/timerIcon.png"
                  rounded="10px"
                  borderRadius="10px"
                  w="1rem"
                  h="1rem"
                  maxH="10rem"
                />
              </span>
              <p className="stepper__title">Created</p>
            </li>
          </ol>
          <div className="_vl" />
          <div
            className="vl"
            style={
              step === 3
                ? { width: "65%", transition: "all 0.6s" }
                : step === 4
                ? { width: "80%", transition: "all 0.6s" }
                : { width: "0%", transition: "all 0.6s" }
            }
          />
        </div>
      </Box>
    </Stack>
  );

  return (
    <Stack
      mt="4"
      display={"flex"}
      w="70rem"
      // w="full"
      // h="full"
      h="762px"
      rounded="15px"
      bg="black.0"
      alignItems={"center"}
    >
      {step === 1
        ? content
        : step === 2
        ? paymentContent
        : step === 3
        ? formContent
        : step === 4
        ? successMessage
        : null}
    </Stack>
  );
};

