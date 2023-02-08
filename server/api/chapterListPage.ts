export default defineEventHandler(async (event) => {
    const { bookId,page } = getQuery(event)
    const data = await (await fetch(`https://api.chinajiayang998.com/chapters_`+bookId +`_`+ page +`_50_asc.html`)).json()
    return data
})
