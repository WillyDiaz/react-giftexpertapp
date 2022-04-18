export const getGifts = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI(category)}&api_key=XeO5myJFkdcXIiMstHs48DIODlnBPlWf`
    const respuesta = await fetch(url);
    const { data } = await respuesta.json();

    const gifts = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium?.url
        }
    });

    return gifts;
}