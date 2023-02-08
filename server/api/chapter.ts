export default defineEventHandler(async (event) => {
    const { bookId,chapterId } = getQuery(event)
    const data = await (await fetch(`https://api.chinajiayang998.com/chapter2_`+ bookId + '_' + chapterId + `.html`)).json()
    return data
})
