class Geometric {

    writeAster(times) {
       return console.log( " * ".repeat(times) )        
    }
    changeLine() {
        console.log( "\n" )
    }
    putSpace(times) {
        return console.log( " * " + "   ".repeat(times) + " *" )
    }
    putSpaceBefore(space, asterid) {
        return console.log( "  ".repeat(space) + " * ".repeat(asterid) + "  ")
    }
    writeSpaceBefor(spaceBefore, spaceAfter) {
        return console.log( "  ".repeat(spaceBefore) + " * " + "  ".repeat(spaceAfter) + " * ")
    }
    drawSquare(n) {       
        let heigth = n
        let width = n
            for ( let i = heigth; i > 0; i-- ) {
                this.writeAster( width )
                this.changeLine
            }
    }
    drawEmptySquare(n) {
        let heigth = n
        let width = n
        this.writeAster(width)
        this.changeLine
            for ( let i = heigth - 2; i > 0; i-- ) {
                this.putSpace( width - 2 )
                this.changeLine
            }
        this.writeAster(width)        
    }
    drawTriangle(n) {
        let heigth = n
            for ( let i = 1; i <= heigth; i++ ) {
                this.writeAster(i)
                this.changeLine
            }
    }
    drawEmptyTriangle(n) {
        let heigth = n

            if ( heigth < 4 ) {
                this.drawTriangle( heigth );
            } else {
                this.drawTriangle( 2 )
                    for ( let i = 3; i < heigth; i++ ) {
                        this.putSpace( i - 2 )
                        this.changeLine
                    }
                this.writeAster( heigth )
            }        

    }
    drawSandWatch(n) {
        const halfHeight = n / 2 >> 0
        this.writeAster(n)

            for ( let i = halfHeight; i > 1 ; i-- ) {
                this.putSpaceBefore(halfHeight - i + 1, i)
                this.changeLine
            }
            for ( let i = 2; i <= halfHeight ; i++ ) {
                this.putSpaceBefore(halfHeight - i + 1, i)
                this.changeLine
            }
        this.writeAster(n)
    }
    drawEmptySandWatch(n) {
        const halfHeight = n / 2 >> 0
        this.writeAster(n)
        for ( let i = halfHeight; i > 1 ; i-- ) {
            this.writeSpaceBefore(halfHeight - i + 1, 2*i - 2)
            this.changeLine
        }
        for ( let i = 2; i <= halfHeight ; i++ ) {
            this.writeSpaceBefore(halfHeight - i + 1, 2*i - 2)
            this.changeLine
        }
    this.writeAster(n)
    }
    drawXmasTree(n) {
        const halfHeight = n / 2 >> 0
        for ( let i = 1; i <= halfHeight ; i++ ) {
            this.putSpaceBefore(halfHeight - i, i)
            this.changeLine
        }
        for ( let i = 1; i <= halfHeight ; i++ ) {
            this.putSpaceBefore(halfHeight - i, i)
            this.changeLine
        }
        for ( let i = 1; i <= halfHeight ; i++ ) {
            this.putSpaceBefore(halfHeight - i, i)
            this.changeLine
        }
        for ( let i = 1; i <= halfHeight / 2 ; i++ ) {
            this.putSpaceBefore(halfHeight / 2, halfHeight / 2)
            this.changeLine
        }
    }  
}

geo = new Geometric()










