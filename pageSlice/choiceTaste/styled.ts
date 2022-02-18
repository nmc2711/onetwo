import { chakra, Flex, Text } from "@chakra-ui/react";

export const ChoiceWrap = chakra(Flex, {
  baseStyle: {
    flexDirection: 'column',
    minHeight: '100vh',
    padding: '20px',
  },
});

export const StepNavBox = chakra(Flex, {
  baseStyle: {
    width: '26px',
    height: '24px',
    marginTop: '38px',
  },
});

export const StepBox = chakra(Flex, {
  baseStyle: {
    flexDirection: 'column',
    marginTop: '32px'
  },
});

export const StepHeading = chakra(Text, {
  baseStyle: {
    color: 'dGray.900',
    fontWeight: '800',
    fontSize: 'xxxl',
  },
});

export const StepItem = chakra(Flex, {
  baseStyle: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    height: '136px',
    border: '1px solid',
    borderColor: 'dGray.300',
    borderRadius: '12px',
    boxSizing: 'border-box',
    fontSize: 'm',
    fontWeight: '900',
    transition: 'height ease 1s 0s',
  },
});

export const NextButton = chakra(Flex, {
  baseStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '108px',
    marginTop: '32px',
    color: 'dGray.500',
    border: 'none',
    fontSize: 'm',
    fontWeight: '800',
    transition: 'color 1s',
    transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.32, 0.6)',
  },
});

