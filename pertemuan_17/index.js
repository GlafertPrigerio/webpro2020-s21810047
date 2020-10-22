//Sync
const second = () => {
    setTimeout(() => {
        console.log('Second')
    })

}

const first = ( => {
    console.log('First');
    second()
    console.log('The End');
})