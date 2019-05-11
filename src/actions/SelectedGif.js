export const SelectedGif = (gif) => {
    console.log('You chose this selected Gif', gif);
    return {
        type: "GIF_SELECT",
        data: gif
    }
}