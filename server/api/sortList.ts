export default defineEventHandler(async (event) => {
    const { sortId, page } = getQuery(event)
    const data = await (await fetch(`https://api.chinajiayang998.com/sort_`+ sortId +`_`+ page +`_0.html`)).json()
    return data
})
