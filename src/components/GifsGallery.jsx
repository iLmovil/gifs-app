import { Button, Grid, ImageListItem } from "@mui/material"

export const GifsGallery = ({ title, images }) => {

  const downloadImage = () => {
    
    fetch(images.downsized_medium.url)
    .then(resp => resp.blob())
    .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.style.display = 'none';
        link.href = url;
        // the filename you want
        link.download = title;
        document.body.appendChild(link);
        link.click();
        //window.URL.revokeObjectURL(url);
    })
    .catch(() => alert('An error sorry'));
  }

  return (
    <ImageListItem 
        className='animate__animated animate__fadeIn animate__slow'
    >
        <img
          src={ images.downsized_medium.url }
          srcSet={ images.downsized_medium.url }
          alt={title}
          />
        <Grid className="hover">
            <Button
              onClick={ () => downloadImage() }
              variant="text"
              color="secondary"
              sx={{
                letterSpacing: 3,
                fontWeight: 'bold'
              }}
            >
              download
            </Button>
        </Grid>
    </ImageListItem>
  )
}

