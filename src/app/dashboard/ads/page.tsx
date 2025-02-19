'use client'

import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import DashboardPage from '@/components/dashboard/Page'
import { Box, Card, CardMedia, Grid2, IconButton } from '@mui/material';
import { Delete, OpenInNew } from '@mui/icons-material';
import InputFileUpload from '@/components/dashboard/InputFileUpload'

type VideosData = {
  video: string
  id: number
}[]

function DeleteVideo(props: {}) {
  const [loading, setLoading] = React.useState(false)

  return (
    <IconButton color="error" onClick={() => setLoading(true)} loading={loading} >
      <Delete />
    </IconButton>
  );
}

function Videos(props: { videos: VideosData }) {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid2 container rowSpacing={4} columnSpacing={4}>
        <InputFileUpload onChange={(event) => console.log(event)} accept='video/*'>Upload videos</InputFileUpload>
        {props.videos.map((vid) => (
          <Grid2 size="auto" key={vid.id}>
            <Card sx={{ display: 'flex', minWidth: 120 }}>
              <CardMedia
                component='video'
                sx={{ maxHeight: 170 }}
                src={vid.video}
                autoPlay
                loop
                muted
              />
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                <IconButton component="a" target="_blank" href={vid.video}>
                  <OpenInNew />
                </IconButton>
                <DeleteVideo />
              </Box>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}

export default function Page() {
  const [machine, setMachine] = React.useState('')
  const [date, setDate] = React.useState<Dayjs | null>(dayjs());

  return (
    <DashboardPage tab='ads' machine={machine} setMachine={setMachine} date={date} setDate={setDate}>
      <Videos videos={[{"video": "https://file-examples.com/storage/feba0e215467b37f39f2483/2017/04/file_example_MP4_480_1_5MG.mp4 ","id": 1},{"video": "https://s3.us-east-005.backblazeb2.com/dropmemedia/machine/videos/856787-hd_1920_1080_30fps.mp4","id": 2}, {"video": "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4", "id": 3}]} />
    </DashboardPage>
  );
}
