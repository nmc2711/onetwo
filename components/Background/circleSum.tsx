import { Flex, Image, Skeleton } from '@chakra-ui/react';
import getWindowSize from 'hooks/useGetWindowSize';
interface TItem {
  w: string;
  h?: string;
  src?: string;
  bg?: string;
  left?: string;
  top?: string;
  right?: string;
  bottom?: string;
  className?: string;
  isNotCircle?: boolean;
}

const CircleSum = () => {
  const { width }: any = getWindowSize();

  const CircleItem = ({ w, h, src, bg, left, top, right, bottom, className, isNotCircle }: TItem) => {
    return (
      <Image 
        pos="absolute" 
        left={left} 
        top={top}
        bottom={bottom}
        right={right} 
        w={w} 
        h={h} 
        src={src}
        bg={bg}
        borderRadius={isNotCircle ? "none" : "50%"}
        className={className}
        backgroundSize="cover"
      />
    );
  }

  return (
    <Flex position="relative" h="42vh" overflow="hidden" >
      <CircleItem left="22.5%" top="12%" w={`${+width * 0.2}px`} h={`${+width * 0.2}px`} src="/human1.png" className="slide-right" />
      <CircleItem right="7.2%" top="16%" w={`${+width * 0.245}px`} h={`${+width * 0.245}px`} src="/human2.png" className="slide-top" />
      <CircleItem left="2%" top="36%" w={`${+width * 0.25}px`} h={`${+width * 0.25}px`} src="/human3.png" className="slide-right" />
      <CircleItem left="38%" top="32%" w={`${+width * 0.31}px`} h={`${+width * 0.31}px`} src="/human4.png" className="slide-left" isNotCircle={true}/>
      <CircleItem right="-1%" top="38%" w={`${+width * 0.05}px`}  src="/human5.png" className="slide-right" />
      <CircleItem left="-1%" top="60%" w={`${+width * 0.05}px`}  src="/human6.png" className="slide-left" />
      <CircleItem left="22%" top="68%" w={`${+width * 0.2}px`} h={`${+width * 0.2}px`} src="/human7.png" className="slide-bottom" />
      <CircleItem right="2%" top="54%" w={`${+width * 0.28}px`} h={`${+width * 0.28}px`} src="/human8.png" className="slide-right" />
    </Flex>
  );
}
export default CircleSum;