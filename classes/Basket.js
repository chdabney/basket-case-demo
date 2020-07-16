class Basket {
    constructor (catpacity) {
        this.catpacity = catpacity
        this.contents = []
    }

    conquer (cat) {
        if (this.contents.length >= this.catpacity) {
            return null
        }

        this.contents.push(cat)
    }
}