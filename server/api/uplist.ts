export default defineEventHandler(async (event) => {
    const { channel } = getQuery(event)
    const data = await (await fetch(`https://api.chinajiayang998.com/channel_`+ channel +`_1_15.html`)).json()
    return data
})
