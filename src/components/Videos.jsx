import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const Videos = () => {
  const videosArr = [
    'https://player.vimeo.com/external/373266000.sd.mp4?s=a1ebfa3b7975f437e7d9816c940ada02669023bd&profile_id=164&oauth2_token_id=57447761',
    'https://player.vimeo.com/external/408294427.sd.mp4?s=2de6afd255a1677d68039436057945c7c4b141d4&profile_id=164&oauth2_token_id=57447761',
    'https://player.vimeo.com/external/459769039.sd.mp4?s=3b9e9e9a8217556990cfd64270b543678aa6aaae&profile_id=164&oauth2_token_id=57447761',
    'https://player.vimeo.com/external/468050264.sd.mp4?s=64b8f27594d08bbc341b2c736810e00c612f0882&profile_id=164&oauth2_token_id=57447761',
    'https://player.vimeo.com/progressive_redirect/playback/670182910/rendition/360p/360p.mp4?loc=external&oauth2_token_id=57447761&signature=0d2dd005fd1b8bdf1ccc6e3239ca01e00e3863ed9ab394c9612ecd3a797566cb',
    'https://player.vimeo.com/progressive_redirect/playback/862247912/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=9951541ebcdf1330ac5fdcef45c81b141b2a04bfbca6b5ae1a46086f442ec486',
    'https://player.vimeo.com/progressive_redirect/playback/825285890/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=0ae2d998bebbd1b250a3edddc1129b670e2fbe2df23829cc8cabef3e7e2b9187',
  ];

  const [videoSrc, setvideoSrc] = useState(videosArr[0]);
  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
      <VStack w={'full'}>
        <video
          controls
          controlsList="nodownload"
          src={videoSrc}
          style={{
            width: '100%',
          }}
        ></video>

        <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflow={'auto'}>
          <Heading>sample video 1</Heading>
          <Text>
            This is a Sample Video for Testing and demo. This is called
            description.
          </Text>
        </VStack>
      </VStack>
      <VStack
        w={['full', 'xl']}
        alignItems={'stretch'}
        p={'8'}
        spacing={'8'}
        overflow={'auto'}
      >
        {videosArr.map((item, index) => (
          <Button
            variant={'ghost'}
            colorScheme={'purple'}
            onClick={() => setvideoSrc(item)}
          >
            Lecture {index + 1}
          </Button>
        ))}
      </VStack>
    </Stack>
  );
};

export default Videos;
