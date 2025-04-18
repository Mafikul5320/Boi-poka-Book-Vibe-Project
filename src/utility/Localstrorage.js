const LocalStrogeGet = () => {
    const StrogeGetId = localStorage.getItem("BookId");
    if (StrogeGetId) {
        const getId = JSON.parse(StrogeGetId);
        return getId
    }
    else {
        return []
    }
}
const LocalStrogeSet = (Id) => {
    const StrogeArray = LocalStrogeGet();
    if (StrogeArray.includes(Id)) {
        alert('age thekei ase.!!!')
    }
    else {
        StrogeArray.push(Id)
        const data = JSON.stringify(StrogeArray)
        localStorage.setItem("BookId", data)
    }

}
export { LocalStrogeSet, LocalStrogeGet }