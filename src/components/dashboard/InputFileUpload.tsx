import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function InputFileUpload(props: { children: React.ReactNode, onChange?: React.ChangeEventHandler<HTMLInputElement>, accept?: string }) {
  return (
    <Button
      component="label"
      color="secondary"
      variant="contained"
      startIcon={<CloudUploadIcon />}
      fullWidth={true}
    >
      {props.children}
      <VisuallyHiddenInput
        type="file"
        onChange={props.onChange}
        multiple
        accept={props.accept}
      />
    </Button>
  );
}
