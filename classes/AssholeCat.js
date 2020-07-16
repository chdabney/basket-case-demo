class AssholeCat extends Cat {
    constructor (name, breed, notes) {
        super(name, breed)
        this.notes = notes
    }

    purge (basket) {
        basket.contents.length = 0
        basket.contents.push(this)
    }
}
