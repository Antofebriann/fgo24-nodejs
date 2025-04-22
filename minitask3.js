// memindahkan file ke folder lain sesuai dengan nama grupnya

const fs = require('fs').promises
const path = require('path')

const arr = [
  'illit - Cherrish',
  'illit - Magnetic',
  'illit - Midnight Fiction',
  'linkin Park - In The End',
  'Linkin Park - Numb',
  'linkin Park - What ive done',
  'TWICE - Fancy',
  'TWICE - Signal',
  'TWICE - What Is Love',
  'Yung Kai - Blue',
];

const main = async () => {
  try {
    const listFile = await fs.readdir('music')
    for (const file of arr) {
      const groupName = file.split(' - ')[0]
      const folderPath = path.join('music', groupName)

      try {
        await fs.mkdir(folderPath, { recursive: true })
      } catch (err) {
        console.error(`Error creating folder ${folderPath}:`, err)
      }

      const fileName = `${file}.mp3`
      const sourcePath = path.join('music', fileName)
      const destinationPath = path.join(folderPath, fileName)

      if (listFile.includes(fileName)) {
        try {
          await fs.rename(sourcePath, destinationPath)
          console.log(`Moved ${fileName} to ${folderPath}`)
        } catch (err) {
          console.error(`Error moving file ${fileName}:`, err)
        }
      } else {
        console.log(`File ${fileName} does not exist in the music folder.`)
      }
    }
  } catch (err) {
    console.error('Error reading music directory:', err)
  }
}

main()