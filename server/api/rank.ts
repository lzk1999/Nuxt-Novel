export default defineEventHandler(async (event) => {
    const { rankId } = getQuery(event)
    const data = await (await fetch(`https://api.chinajiayang998.com/channel_`+ rankId +`_1_15.html`)).json()
    return data
})
