export default defineEventHandler(async (event) => {
    const { page,key } = getQuery(event)
    const data = await (await fetch(`https://api.chinajiayang998.com/037/search.php?page_size=15&page_index=`+ page +`&keyword=`+ key ,{
        method: 'POST',
    })).json()
    return data
})
