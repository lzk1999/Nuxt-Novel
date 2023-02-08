export default defineEventHandler(async (event) => {
    const { bookId } = getQuery(event)
    const data = await (await fetch(`https://api.chinajiayang998.com/chapterlist_`+ bookId +`.html`)).json()
    return data
})
