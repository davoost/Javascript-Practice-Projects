
const stacksDisplay = document.querySelectorAll('.stack')
const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
const suits = ['spades', 'hearts', 'clubs', 'diamonds']
const shuffleButton = document.querySelector('#shuffle')
const deckDisplay = document.querySelector('.deck')
const shownCards = document.querySelector('.turned-cards')
const finishDisplay = document.querySelectorAll('.finish-zone div')
let deck = []
let turnedCards = []
let stacks = [[], [], [], [], [], [], []]
let cardImages = []
let cardClicked = false
let finishCard 

function Card(name, src, color, rank, suit){
    this.name = name;
    this.src = src;
    this.color = color;
    this.rank = rank;
    this.suit = suit;
    this.face_up = true;
}


// make a deck of card objects
for (i=0; i<4; i++){
    for (j=0; j<13; j++)
        {var color = ''
        var suit = suits[i]
        var rank = ranks[j]
        var card_name = rank+'_of_'+suit
        var src = 'images/cards100/'+card_name+'.png'
        if (suit == 'spades' || suit == 'clubs')
            {color = 'black'}
        else if (suit == 'diamonds' || suit == 'hearts')
            {color = 'red'}
        deck.push(new Card(card_name, src, color, rank, suit));}
}

// This function deals with when cards are dragged
function dragging(e){
    this.style.position = 'absolute';
    this.style.left = e.clientX - 60 + 'px'
    this.style.top = e.clientY - 260 + 'px'}

// This function deals with when cards are clicked
function card_click(e){
    if (!cardClicked) // if there is no card clicked yet
    {
        this.addEventListener('mousemove', dragging)
        theCard = this
        cardClicked = true
    }
    else if (cardClicked)  // if a card has already been clicked
        {
        this.removeEventListener('mousemove', dragging);
        cardClicked = false
        var x = e.clientX
        var y = e.clientY
        go_back(this)    
        }
}
// This function deals with sending cards back after being clicked
function go_back(card){
    card.style.position = 'relative'
    card.style.top = '0px'
    card.style.left = '0px'
}

// move cards from one place to another
function give(one_place, another_place){
    //couldn't get this function to work
    one_place.push(another_place)
    another_place.splice(0, 1)
}
//show 7 shuffled cards
const shuffle = function(){
    //for (i=0; i<stacksDisplay.length; i++)
    if (stacksDisplay[0].hasChildNodes()){
        for(i = 0; i < stacks.length; i++){
            stacksDisplay[i].removeChild(cardImages[i]) // remove the images from childNodes
            deck.push(stacks[i][0]);}
        cardImages = []
        stacks = []  // put all the cards back in the deck array
    }
    
    deck.sort(() => 0.5 - Math.random()) // put the deck in a random order
    for (i=0; i<7; i++){
        var j = i
        while (j>-1){
            stacks[i].push(deck[0]); //  Take 7 cards from the deck into the stacks
            deck.splice(0, 1); 
            j--}
        }     
    for (i = 0; i<7; i++){
        var j = i
        while(j>-1)
            {add_a_card(stacks[i], i, j);
            j--
            }
    }
    for (i=0; i<7; i++)
    {
        for(j=0; j<stacks[i].length +1; j++){
            console.log(stacks[i][j])
            /*
            if (!stacks[i][j].face_up){
                stacks[i][j].src = 'images/cards100/back_of_a_card.png'
                console.log('doing shit')
            }
            */
        }
    }
    for (i=0; i<cardImages.length; i++){
        cardImages[i].setAttribute('src', cardImages[i].src)
    }
    console.log(stacks)
}

// card to the stack function
function add_a_card(stack, id, add_num){
    var card_img = document.createElement('img')
    if (add_num > 0){
        stack[id].face_up = false
    }
    card_img.classList.add(id)
    card_img.setAttribute('src', stack[add_num].src)
    card_img.addEventListener('click', card_click)
    cardImages.push(card_img)
    card_img.style.position = 'absolute'
    card_img.style.top = add_num*30 +'px'
    card_img.style.zIndex = add_num
    stacksDisplay[id].appendChild(card_img)
}

// shuffle stuff
shuffle()
shuffleButton.addEventListener('click', shuffle)

// the deck card
deckDisplayImage = document.createElement('img')
deckDisplayImage.setAttribute('src', 'images/cards100/back_of_a_card.png')
deckDisplayImage.addEventListener('click', turn_a_card)
deckDisplay.appendChild(deckDisplayImage)

//the function dealing with the deck card
function turn_a_card (){
    if (shownCards.hasChildNodes() && deck.length != 0)
        {shownCards.removeChild(CurrentDeckImage)}
    if (deck.length != 0){
        deckDisplayImage.setAttribute('src', 'images/cards100/back_of_a_card.png')
        turnedCards.push(deck[0])
        deck.splice(0, 1)
        CurrentDeckImage = document.createElement('img')
        CurrentDeckImage.setAttribute('src', turnedCards[turnedCards.length-1].src)
        shownCards.appendChild(CurrentDeckImage)}
    else if(deck.length==0){
        deckDisplayImage.setAttribute('src', 'images/cards100/dotted_card.png')
        console.log('deck: '+deck.length)
        console.log('turnedCards: '+turnedCards.length)
        for (i = 0; i<turnedCards.length; i++){
            deck.push(turnedCards[i]);
        }
        turnedCards = []
        console.log('deck: '+deck.length)
        console.log('turnedCards: '+turnedCards.length)
    };
}

// The Finishing Slots
for (i=0; i<4; i++){
    finishCard = document.createElement('img');
    finishCard.setAttribute('src', 'images/cards100/dotted_card.png');
    finishDisplay[i].appendChild(finishCard)
};

//putting cards on top
/*
for (i=0; i<7; i++)
        {stacks.push(deck[i]); //  Take 7 cards from the deck into the stacks
        deck.splice(0, 1)}          
    for (i = 7; i<14; i++){
        var card_img = document.createElement('img')
        card_img.classList.add(i)
        card_img.setAttribute('src', stacks[i].src)
        card_img.addEventListener('click', card_click)
        cardImages.push(card_img)
        stacksDisplay[i-7].appendChild(card_img)
        card_img.style.position = 'absolute'
        card_img.style.top = '30px'
        card_img.style.left = 20+110*(i-7)+'px'
    }
*/