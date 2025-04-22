//10 list music didalam array
// buatkan file mp3 didalam folder music
const fs = require('fs').promises
const path = require('path')
async function createFile(fileName){
    try{
        const content = "hello"
        await fs.writeFile(fileName, content)
        console.log("write file succes")
    }catch(err){
        console.log(err)
    }
}
const musicList = [
    'TWICE - What Is Love',
    'TWICE - Signal',
    'TWICE - Fancy',
    'Linkin Park - Numb',
    'linkin Park - What ive done',
    'linkin Park - In The End',
    'illit - Midnight Fiction',
    'illit - Magnetic',
    'illit - Cherrish',
    'Yung Kai - Blue',
    
]

musicList.forEach(music => {
    createFile(path.join("music", `${music}.mp3`))
})
