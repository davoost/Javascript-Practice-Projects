
const board = document.querySelector('.board');
const boardColours = [
'grey', 'white', 'grey', 'white', 'grey', 'white', 'grey', 'white',
'white', 'grey', 'white', 'grey', 'white', 'grey', 'white', 'grey',
'grey', 'white', 'grey', 'white', 'grey', 'white', 'grey', 'white',
'white', 'grey', 'white', 'grey', 'white', 'grey', 'white', 'grey',
'grey', 'white', 'grey', 'white', 'grey', 'white', 'grey', 'white',
'white', 'grey', 'white', 'grey', 'white', 'grey', 'white', 'grey',
'grey', 'white', 'grey', 'white', 'grey', 'white', 'grey', 'white',
'white', 'grey', 'white', 'grey', 'white', 'grey', 'white', 'grey'
]
const startingArrangement = [
'blackr', 'blackn', 'blackb', 'blackq', 'blackk', 'blackb', 'blackn', 'blackr',
'blackp', 'blackp', 'blackp', 'blackp', 'blackp', 'blackp', 'blackp', 'blackp',
'','','','','','','','',
'','','','','','','','',
'','','','','','','','',
'','','','','','','','',
'whitep','whitep','whitep','whitep','whitep','whitep','whitep','whitep',
'whiter', 'whiten', 'whiteb','whiteq', 'whitek', 'whiteb', 'whiten', 'whiter'
]
const squareLocations = []
const squareGrid = []
const squareWidth = 80
let pieceClicked = false
let thePiece
let oppositePiece
var banned_spaces
let whose_turn = 'white'
let turnDisplay = document.querySelector('.turn')

// create the spaces for the board
var j = 0 
for (i = 0; i<64; i++){
    const square = document.createElement('div')
    square.classList.add('square')
    square.id = i
    square.style.backgroundColor = boardColours[i]
    board.appendChild(square)
}
for (i = 0; i<8; i++){
    for(j=0; j<8; j++){
        squareLocations.push([j*80, i*80])
        squareGrid.push([j, i])
    }
}    


const squares = document.querySelectorAll('.square')

// create piece objects
pieces = []
// add the pieces
for (i=0; i<64; i++){
    if (startingArrangement[i] != ''){
        var piece_color = startingArrangement[i].substring(0, 5)
        piece_img = document.createElement('img')
        piece_img.setAttribute('src', 'images/chess_pieces/'+startingArrangement[i]+'.png')
        piece_img.setAttribute('name', startingArrangement[i])
        piece_img.setAttribute('data-id', i)
        piece_img.addEventListener('click', drag_me)
        pieces.push(piece_img)
        squares[i].appendChild(piece_img)
    }
    else {
        continue
    }
}
// What happens when pieces are clicked
function drag_me(e)
{if (this.getAttribute('name').substring(0, 5) != whose_turn){
    go_back(this)
}
else
    {if (pieceClicked) 
        {
        this.removeEventListener('mousemove', dragging);
        pieceClicked = false
        var x = e.clientX
        var y = e.clientY
        box = null
        //find where the box number where the piece was dropped
        for (i=0; i<64; i++)
        {
            SquareX = squareLocations[i][0]
            SquareY = squareLocations[i][1]
            if (x > SquareX && x < (SquareX + squareWidth) &&
            y > SquareY && y < (SquareY+squareWidth))
            {
            box = i
            } 
        }
        //this checks if it abides by the pieces movment rules
        if(check_the_square(this, box))
        {
            //this checks there isn't something blocking the piece (for bishops, rooks and queens)
            banned_spaces = obstacle_check(this, box)
            if (banned_spaces === undefined){
                movin(this, box)
            }
            else if (banned_spaces.includes(box))
            {
                go_back(this)
            }
            else if (squares[box].hasChildNodes())
            {
                //check if it's the same colour
                // look through pieces and find the one with the data-id of box
                for (i=0; i<pieces.length; i++)
                {
                    if (pieces[i].getAttribute('data-id') == box)
                    {
                        oppositePiece = pieces[i]
                    }
                }
                var destination_colour = oppositePiece.name.substring(0, 5)
                console.log(destination_colour)
                if (this.name.substring(0, 5) === destination_colour)
                {
                    go_back(this)
                }
                else if(this.name.substring(0, 5) != destination_colour &&
                        destination_colour != undefined)
                        {
                            // delete the spare
                            squares[box].removeChild(oppositePiece)
                            movin(this, box)
                        }
            }
            
            else
            { //this is for an empty square
                movin(this, box)
            }
        }    
        else 
        {
            //return the piece to original position
            go_back(this)
        }
    }
    else if (!pieceClicked)
    {
        this.addEventListener('mousemove', dragging)
        thePiece = this
        pieceClicked = true
    }}}
// This function sends the piece back to it's position 
// if it lands on an invalid square or same colour
function go_back(piece){
    piece.style.position = 'relative'
    piece.style.top = '0px'
    piece.style.left = '0px'
}
//This function moves the piece
function movin(piece, box){
    //this part deals with pawns diagonal movement if there is something in the diagonal
    for (i=0; i<pieces.length; i++)
                {
                    if (pieces[i].getAttribute('data-id') == box)
                    {
                        oppositePiece = pieces[i]
                    }
                }
    if (piece.getAttribute('name').substring(5,6)==='p' &&
    squares[box].hasChildNodes()){
        squares[box].removeChild(oppositePiece)
    }
    //this part actually does the movement
    {for (i=0; i<64; i++){
        if (squares[i].id == piece.getAttribute('data-id'))
        {
            squares[i].removeChild(piece) // remove from where it was
            squares[box].appendChild(piece) // add to where it is going
            piece.setAttribute('data-id', box)
            piece.style.position = 'relative'
            piece.style.top = '0px'
            piece.style.left = '0px'
        }};}
    //this part changes the turn
    if (whose_turn == 'white'){
        turnDisplay.innerHTML = 'Turn: black'
        whose_turn = 'black'
    }
    else if (whose_turn == 'black'){
        turnDisplay.innerHTML = 'Turn: white'
        whose_turn = 'white'}
}
// THe function that deals with dragging
function dragging(e){
    this.style.position = 'absolute';
    this.style.left = e.clientX - 30 + 'px'
    this.style.top = e.clientY - 30 + 'px'
}
// provides legit moves for normal movement for pieces by piece name and position
function check_the_square(thePiece, destination){
    var name = thePiece.getAttribute('name')
    var originRow = squareGrid[thePiece.getAttribute('data-id')][1]
    var originColumn = squareGrid[thePiece.getAttribute('data-id')][0]
    var destinationRow = squareGrid[destination][1]
    var destinationColumn = squareGrid[destination][0]
    // King Movement 
    if (name === 'whitek' || name === 'blackk'){
        if (destinationColumn+1 == originColumn && destinationRow == originRow)
            {return true}
        else if (destinationColumn-1 == originColumn && destinationRow == originRow)
            {return true}
        else if (destinationColumn == originColumn && destinationRow+1 == originRow)
            {return true}
        else if (destinationColumn == originColumn && destinationRow-1 == originRow)
            {return true}
        else if (destinationColumn+1 == originColumn && destinationRow+1 == originRow)
            {return true}
        else if (destinationColumn-1 == originColumn && destinationRow-1 == originRow)
            {return true}
        else if (destinationColumn+1 == originColumn && destinationRow-1 == originRow)
            {return true}
        else if (destinationColumn-1 == originColumn && destinationRow+1 == originRow)
            {return true}
        else
            {return false}
    }
    // Rook Movement
    if (name == 'whiter' || name == 'blackr')
        {if (destinationColumn == originColumn)
            {return true}
        else if (destinationRow == originRow)
            {return true}
        else
            {return false}
        }
    // Knight Movement
    if (name == 'whiten' || name == 'blackn')
        {
        if (destinationColumn+2 == originColumn && destinationRow+1 == originRow)
            {return true}
        else if (destinationColumn-2 == originColumn && destinationRow+1 == originRow)
            {return true}
        else if (destinationColumn+2 == originColumn && destinationRow-1 == originRow)
            {return true}
        else if (destinationColumn-2 == originColumn && destinationRow-1 == originRow)
            {return true}
        else if (destinationColumn+1 == originColumn && destinationRow+2 == originRow)
            {return true}
        else if (destinationColumn+1 == originColumn && destinationRow-2 == originRow)
            {return true}
        else if (destinationColumn-1 == originColumn && destinationRow+2 == originRow)
            {return true}
        else if (destinationColumn-1 == originColumn && destinationRow-2 == originRow)
            {return true}
        else
            {return false}
        }
    // Bishops Movement
    var diff = originColumn - destinationColumn
    if (name == 'whiteb' || name == 'blackb')
        {if ((originRow + diff) == destinationRow)
            {return true}
        else if((originRow - diff) == destinationRow)
            {return true}
        else if (originRow == (destinationRow - diff))
            {return true}
        else if (originRow == (destinationRow + diff))
            {return true}
        else
            {return false}
        }
    // Queens Movement
    if (name == 'whiteq' || name == 'blackq')
        {if ((originRow + diff) == destinationRow)
            {return true}
        else if((originRow - diff) == destinationRow)
            {return true}
        else if (originRow == (destinationRow - diff))
            {return true}
        else if (originRow == (destinationRow + diff))
            {return true}
        else if (destinationColumn == originColumn)
            {return true}
        else if (destinationRow == originRow)
            {return true}
        else
            {return false}
        }
    // Pawn Movement
    if (name === 'blackp' || name === 'whitep'){
        // Moving two positions from the start
        if (name == 'blackp' && originRow+2 == destinationRow && originRow == 1){
            return true
        } 
        else if (name == 'whitep' && originRow-2 == destinationRow && originRow == 6){
            return true
        }
        // Moving diagonally up or down
        else if (name == 'whitep' 
            && originRow-1 == destinationRow 
            && (originColumn + 1 == destinationColumn || 
            originColumn - 1 == destinationColumn))
            {
                return true
            }
        else if (name == 'blackp' 
            && originRow+1 == destinationRow 
            && (originColumn + 1 == destinationColumn || 
            originColumn - 1 == destinationColumn))
            {
                return true
            }
        else if (originColumn === destinationColumn){
            if (name ==='blackp' && (destinationRow-1)==originRow){
                return true
            }
            else if (name ==='whitep' && (destinationRow+1)==originRow){
                return true
            }
            else {
                return false}
        }
        else {
            return false
        }
    }
    // Anything Else
    else {
        return false
    }
}
// Looks for obstacles to pieces
function obstacle_check(thePiece, destination){
    var originRow = squareGrid[thePiece.getAttribute('data-id')][1]
    var originColumn = squareGrid[thePiece.getAttribute('data-id')][0]
    var destinationRow = squareGrid[destination][1]
    var destinationColumn = squareGrid[destination][0]
    banned_spaces = []
    var otherPieceColour
    //check if there is an opposing piece for diagonal pawns
    for (i=0; i<pieces.length; i++){
        if (pieces[i].getAttribute('data-id') == destination){
            otherPieceColour = pieces[i].getAttribute('name').substring(0,5)    
        }
    }
    //rook banned spaces
    if (thePiece.name.substring(5, 6) == 'r'){
        //do something magic 
        banned_spaces = rook_restrictions(thePiece, destinationRow, destinationColumn, originRow, originColumn)
        return banned_spaces
        }
    //bishop banned spaces
    else if (thePiece.name.substring(5,6) == 'b')
        {
        banned_spaces = bishop_restrictions(thePiece, destinationRow, destinationColumn, originRow, originColumn)
        return banned_spaces
        }
    //queen banned spaces
    else if (thePiece.name.substring(5,6) == 'q')
        {
        banned_spaces = rook_restrictions(thePiece, destinationRow, destinationColumn, originRow, originColumn) 
        banned_spaces.push(bishop_restrictions(thePiece, destinationRow, destinationColumn, originRow, originColumn))
        return banned_spaces
        }
    // pawn banned spaces
    else if (thePiece.name.substring(5,6) == 'p')
        { //if the square is empty you can't move there, or there is something straight ahead
            if (originColumn == destinationColumn && 
                squares[destination].hasChildNodes()) //if the square straight ahead is occupied
                {
                    banned_spaces.push(destination)
                    return banned_spaces
                }
            else if ((originColumn - 1 ==  destinationColumn || // if the diagonal is empty
                    originColumn + 1 == destinationColumn)
                    && !(squares[destination].hasChildNodes()))
                {
                    banned_spaces.push(destination)
                    return banned_spaces
                    }
            
            else if ((originColumn - 1 ==  destinationColumn || // if the diagonal is
                        originColumn + 1 == destinationColumn) &&  
                        thePiece.getAttribute('name').substring(0,5) == 'white' &&
                        otherPieceColour == 'white'
                        )
                    {
                        banned_spaces.push(destination)
                        return banned_spaces
                    }
            else if ((originColumn - 1 ==  destinationColumn || // if the diagonal is
                        originColumn + 1 == destinationColumn) &&  
                        thePiece.getAttribute('name').substring(0,5) == 'black' &&
                        otherPieceColour == 'black')
                        {
                            banned_spaces.push(destination)
                            return banned_spaces
                        }
        }
    else {
        return banned_spaces
    }
}
//obstacles for rooks
function rook_restrictions(piece, destinationRow, destinationColumn, originRow, originColumn){
    //need to check if moving up or down
    // look above the piece
    if (destinationRow < originRow) //check moving up
        {i = piece.getAttribute('data-id') - 8
        while (i>-1){
            if (squares[i].hasChildNodes())
                {   while (i > -1){
                        i = i-8
                        banned_spaces.push(i)}
                    return banned_spaces}
            else{
                i=i-8;
            }
        }}
    // look below the piece
    else if(destinationRow > originRow)
        {
        i = Number(piece.getAttribute('data-id')) + 8
        while (i<65){
            if (squares[i].hasChildNodes())
                {while (i <65){
                    i = i+8
                    banned_spaces.push(i)}
                return banned_spaces}
            else{
                i=i+8;
            }
        }}
    // look left of the piece
    else if (destinationColumn < originColumn)
        {
        i = Number(piece.getAttribute('data-id')) -1
        while ( i%8 != 0){
            if (squares[i].hasChildNodes())
                {while (i%8 != 0){
                    i = i-1
                    banned_spaces.push(i)}
                return banned_spaces}
            else{
                i--;
                }
            }
        }
    // look right of the piece
    else if (destinationColumn > originColumn){
        i = Number(piece.getAttribute('data-id')) +1
        while ( i%8 != 0){
            if (squares[i].hasChildNodes())
                {while (i%8 !=0){
                    i = i+1
                    banned_spaces.push(i)}
                return banned_spaces}
            else{
                i++;
        }
    }
    return banned_spaces
}
}
//bstacles for bishops
function bishop_restrictions(piece, destinationRow, destinationColumn, originRow, originColumn){
    //moving up and right
    if (originRow > destinationRow && originColumn < destinationColumn){
        i = Number(piece.getAttribute('data-id')) - 7
        while(i > 0 && i%8 !=0){
            if (squares[i].hasChildNodes())
                {
                    while (i > 0 && i%8 != 0){
                        i = i-7
                        banned_spaces.push(i)}
                    return banned_spaces
                }
            else{
                i=i-7;
            }
        }
    }
    //moving up and left
    else if (originRow > destinationRow && originColumn > destinationColumn){
        i = Number(piece.getAttribute('data-id')) - 9
        while(i > 0 && i%8 !=0){
            if (squares[i].hasChildNodes())
                {while (i > 0 && i%8 != 0){
                    i = i-9
                    banned_spaces.push(i)}
                return banned_spaces}
            else{
                i=i-9;
            }
        }
    }
    //moving down and right
    else if (originRow < destinationRow && originColumn < destinationColumn){
        i = Number(piece.getAttribute('data-id')) + 9 
        while(i < 65 && i%8 !=0){
            if (squares[i].hasChildNodes())
                {while (i < 65 && i%8 != 0){
                    i = i+9
                    banned_spaces.push(i)}
                return banned_spaces}
            else{
                i=i+9;
            }
        }
    }
    //moving down and left
    else if (originRow < destinationRow && originColumn > destinationColumn){
        i = Number(piece.getAttribute('data-id')) + 7
        while(i < 65 && i%8 !=0){
            if (squares[i].hasChildNodes())
                {while (i < 65 && i%8 != 0){
                    i = i+7
                    banned_spaces.push(i)}
                return banned_spaces}
            else{
                i=i+7;
            }
        }
    }
    else {return banned_spaces}
}
