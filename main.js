const data = {
    english: {
        "title": "This is the title",
        "content": "This is the paragraph, i wrote this paragraph to test the change language feature of this page. This paragraph is very short. I'm trying to make this paragraph longer, hihi (～￣▽￣)～, it should have three lines to be a easy-looking paragraph. Finally, i can make it longer, thank you very much for reading these nonsense lines"
    },
    vietnamese: {
        "title": "Đây là tiêu đề",
        "content": "Đây là đoạn văn, tôi đã viết đoạn văn này để kiểm tra tính năng thay đổi ngôn ngữ của trang này. Đoạn này rất ngắn. Mình đang cố làm đoạn này dài hơn, hihi (～￣▽￣)～, đoạn này nên có 3 dòng cho dễ nhìn. Cuối cùng thì tôi cũng có thể làm cho nó dài hơn, cảm ơn bạn rất nhiều vì đã đọc những dòng vớ vẩn này"
    },
    japanese: {
        "title": "これがタイトルです",
        "content": "これは段落です。この段落は、このページの言語変更機能をテストするために書きました。 この段落は非常に短いです。 この段落を長くしようと思っているのですが、ひひひ(～￣▽￣)～、見やすい段落にするためには、3行にする必要があります。 最後に、私はそれを長くすることができます、これらのナンセンスな行を読んでくれてありがとう"
    },
    chinese: {
        "title": "这是标题",
        "content": "这是一段，我写这段是为了测试这个页面的更改语言功能。 这段很短。 这一段我在努力加长，hihi(～￣▽￣)～，应该是三行才算是通俗的段子。 终于可以加长了，非常感谢你看完这些废话"
    },
    tretrau: {
        "title": "ảo thật đấy",
        "content": "Zảo chang hảo Trung gúa Xiên chai Gua zẩu PING CHILLING gúa hấn xí goàn Pính Chilling Ping sư xú yu đu dính gì bi PING Chilling, sư xú yu đu dính gì, sư xú yu đu dính gì gô zui xì hấn, sồ gi xin zài Suǒ yǐ xiàn zài shì yīn yuè shí jiān Dùn bei I, ơ, sần Loằng ge li pai ý hâu Su đu du zi uýnh zâu Loằng ge li pai ý hâu Su đu du zi uýnh zâu Loằng ge li pai ý hâu Su đu du zi uýnh zâu Bù yào wàng jì, bù yào cuò gu Jì dé qù diàn yǐng yuàn kàn sù dù yǔ jī qíng jiǔ Dòng zuò fē cháng hǎo Chà bù duō yī yàng bing chilling Zài zen"
    },
}

const body = document.querySelector("body")
const button = document.querySelector("#toggle-theme")
const languageControl = document.querySelector(".language-modal")
const title = document.querySelector("h1")
const paragraph = document.querySelector("p")
const cena = document.querySelector(".johncena")
const audio = document.querySelector("audio")
const khabanh = document.querySelector(".khabanh")

let a = localStorage.getItem("currentLanguage") || languageControl.value
title.innerText = data[a].title
paragraph.innerText = data[a].content
languageControl.value = a
if (a == "tretrau") {
    cena.style.display = "inline-block"
    khabanh.style.display = "inline-block"
    audio.play()
} else {
    cena.style.display = "none"
    khabanh.style.display = "none"
    audio.pause()
}

languageControl.addEventListener("change", (e) => {
    const a = languageControl.value
    localStorage.setItem("currentLanguage", `${a}`)
    title.innerText = data[a].title
    paragraph.innerText = data[a].content
    if (a == "tretrau") {
        audio.currentTime = 0
        cena.style.display = "inline-block"
        khabanh.style.display = "inline-block"
        audio.play()
    } else {
        cena.style.display = "none"
        khabanh.style.display = "none"
        audio.pause()
    }
})

const setDarkMode = () => {
    body.setAttribute("data-theme", "dark")
    localStorage.setItem("dataTheme", "dark")
}

const setLightMode = () => {
    localStorage.setItem("dataTheme", "light")
    body.setAttribute("data-theme", "light")
}

if (localStorage.getItem("dataTheme") === "dark") {
    setDarkMode()
    button.setAttribute("checked", "true")
} else {
    setLightMode()
}

const toggleTheme = (e) => {
    console.log(button.checked)
    if (e.target.checked) setDarkMode()
    else setLightMode()
}

button.addEventListener("change", toggleTheme)