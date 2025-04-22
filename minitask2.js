//ambil data lagu 
// nama artis dan lagunya dibalik

const url = "https://gist.githubusercontent.com/fulsep/58daee79a699d0fe143da36bbc47e3d6/raw/dcc2e9c970af553011ba6d2d13331e68f5cf42ff/lagu.json"

const retrieveData = async()=>{
       try{
        const fetchData = await fetch(url)
        const data = await fetchData.json()
        const mySongs = data.map(item => {
            const [judul, artis] = item.split(" - ")
            return `${artis} - ${judul}`
        })
        console.log(mySongs)
       }catch(err){
        console.log(err)
        }
      }
    retrieveData()