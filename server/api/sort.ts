export default defineEventHandler(async (event) => {
    const data = await (await fetch(`https://api.chinajiayang998.com/sort_1_1_1.html`)).json()
    return data
})
