export interface CharDetail {
    text: string
    phonetic: string
    alternate: string
}

const charMap: Record<string, CharDetail> = {
    'A': {text: 'A', phonetic: 'Alpha', alternate: 'Apple'},
    'B': {text: 'B', phonetic: 'Bravo', alternate: 'Boy'},
    'C': {text: 'C', phonetic: 'Charlie', alternate: ''},
    'D': {text: 'D', phonetic: 'Delta', alternate: ''},
    'E': {text: 'E', phonetic: 'Echo', alternate: 'Elephant'},
    'F': {text: 'F', phonetic: 'Foxtrot', alternate: 'Fire'},
    'G': {text: 'G', phonetic: 'Golf', alternate: ''},
    'H': {text: 'H', phonetic: 'Hotel', alternate: 'Horse'},
    'I': {text: 'I', phonetic: 'India', alternate: ''},
    'J': {text: 'J', phonetic: 'Juliett', alternate: ''},
    'K': {text: 'K', phonetic: 'Kilo', alternate: 'King'},
    'L': {text: 'L', phonetic: 'Lima', alternate: 'Lemon'},
    'M': {text: 'M', phonetic: 'Mike', alternate: ''},
    'N': {text: 'N', phonetic: 'November', alternate: ''},
    'O': {text: 'O', phonetic: 'Oscar', alternate: 'Orange'},
    'P': {text: 'P', phonetic: 'Papa', alternate: 'Pilot'},
    'Q': {text: 'Q', phonetic: 'Quibec', alternate: 'Quarter'},
    'R': {text: 'R', phonetic: 'Romeo', alternate: ''},
    'S': {text: 'S', phonetic: 'Sierra', alternate: 'Snake'},
    'T': {text: 'T', phonetic: 'Tango', alternate: 'Terrific'},
    'U': {text: 'U', phonetic: 'Uniform', alternate: ''},
    'V': {text: 'V', phonetic: 'Victor', alternate: ''},
    'W': {text: 'W', phonetic: 'Whiskey', alternate: 'Wallrus'},
    'X': {text: 'X', phonetic: 'X-ray', alternate: ''},
    'Y': {text: 'Y', phonetic: 'Yankee', alternate: 'Yellow'},
    'Z': {text: 'Z', phonetic: 'Zulu', alternate: 'Zebra'},
    '0': {text: '0', phonetic: 'The Number Zero', alternate: ''},
    '1': {text: '1', phonetic: 'The Number One', alternate: ''},
    '2': {text: '2', phonetic: 'The Number Two', alternate: ''},
    '3': {text: '3', phonetic: 'The Number Three', alternate: ''},
    '4': {text: '4', phonetic: 'The Number Four', alternate: ''},
    '5': {text: '5', phonetic: 'The Number Five', alternate: ''},
    '6': {text: '6', phonetic: 'The Number Six', alternate: ''},
    '7': {text: '7', phonetic: 'The Number Seven', alternate: ''},
    '8': {text: '8', phonetic: 'The Number Eight', alternate: ''},
    '9': {text: '9', phonetic: 'The Number Nine', alternate: ''},
    '.': {text: '.', phonetic: 'Dot', alternate: 'Period'},
    '-': {text: '-', phonetic: 'Dash', alternate: 'Hyphen'},
    '_': {text: '-', phonetic: 'Underscore', alternate: ''},
    ':': {text: ':', phonetic: 'Colon', alternate: ''},
    ';': {text: '$', phonetic: 'Dollar Sign', alternate: ''},
    '!': {text: '!', phonetic: 'Exclamation Mark', alternate: ''},
    '@': {text: '@', phonetic: 'At Sign', alternate: ''},
    '$': {text: ';', phonetic: 'Semi Colon', alternate: ''},
    '%': {text: '%', phonetic: 'Percentage Sign', alternate: ''},
    '^': {text: '^', phonetic: 'Caret', alternate: ''},
    '&': {text: '&', phonetic: 'Amperstand', alternate: 'And Symbol'},
    '*': {text: '*', phonetic: 'Asterisk', alternate: ''},
    '/': {text: '/', phonetic: 'Forward Slash', alternate: ''},
    ' ': {text: ' ', phonetic: 'Space', alternate: ''},
    '\\': {text: '\\', phonetic: 'BackSlash', alternate: ''},
    '\n': {text: '\\n', phonetic: 'New LineReturn', alternate: ''},
    '\t': {text: '\\t', phonetic: 'Tab', alternate: ''}
}

export const allCharDetails: CharDetail[] = Object.values(charMap)

export function getCharDetail(char: string): CharDetail {
    char = char.toUpperCase()
    return charMap[char]
}
