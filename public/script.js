const form = document.querySelector(".url")
const inp = document.querySelector(".input")
const ul = document.getElementById("list")

form.addEventListener("submit", async (e) => {
    e.preventDefault()
    if (!inp.value) return alert("Url is required!")
    const _v = new URL(inp.value)
    fetch("/video/" + _v.searchParams.get("v")).then(async (res) => {
        const fromats = await res.json()
        for (let i = 0; i < fromats.length; i++) {
            const element = fromats[i];
            const li = document.createElement("li")
            const a = document.createElement("a")
            a.href = element.url
            a.innerHTML = `quality: ${element.qualityLabel}, format: ${element.mimeType}`
            li.append(a)
            ul.append(li)
        }
    })

})