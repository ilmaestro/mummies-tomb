namespace SpriteKind {
    export const Background = SpriteKind.create()
}
/**
 * Positions:
 * 
 * 0: right
 * 
 * 1: middle
 * 
 * 2: left
 */
/**
 * Controls:
 * 
 * A: right
 * 
 * B: left
 */
function drawSprites () {
    playerSprite.setPosition(playerXPositions[playerPosition], playerYPositions[playerPosition])
    snakeSprite.setPosition(snakeXPositions[snakePosition], snakeYPositions[snakePosition])
}
function initEnemies () {
    snakeSprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . f f f . . . . 
. . . . . . . . f f . f . . . . 
. . . . . . . f f f f f . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f f f . . . . . . . . 
. . . . . f f . . . . . . . . . 
. . . . . f f f f . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . f f f . . . . . 
. . . . . . . . . . f f . . . . 
. . . . . . . . . . . f . . . . 
. . . . . . . . . . f f . . . . 
. . . . . . . . f f f . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    snakeXPositions = [40, 45, 50]
    snakeYPositions = [110, 90, 50]
    snakePosition = 0
    snakeSprite.setPosition(26, 109)
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (playerPosition >= 0 && playerPosition < 2) {
        playerPosition = playerPosition + 1
    }
})
function initPlayer () {
    playerSprite = sprites.create(img`
. . . . . . f f . . . . . . . . 
. . . . . f . . f . . . . . . . 
. . . f f . f f . f f . . . . . 
. . . . f f f f f f . . . . . . 
. . . f f . f f . f f . . f f . 
. f . . f f . . f f . . f f f . 
f f f . . f f f f . . f f f . . 
. f f f f f f f f f f f . . . . 
. . . f f f f f f f f . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . f . . . f . . . . . . 
. . . . . f f f f f . . . . . . 
. . . . f f f . f f f . . . . . 
. . . . f f f . f f f . . . . . 
. . . f f f . . . . f f . . . . 
. . f f f f . . . f f f f . . . 
`, SpriteKind.Player)
    playerSprite.setPosition(105, 90)
    playerXPositions = [105, 85, 50]
    playerYPositions = [90, 100, 85]
    playerPosition = 0
    info.setLife(3)
    info.setScore(0)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.spray, 500)
    info.changeScoreBy(10)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (playerPosition > 0 && playerPosition <= 2) {
        playerPosition = playerPosition - 1
    }
})
function nextSnakePosition () {
    if (snakePosition <= 2) {
        snakePosition = snakePosition + 1
    } else {
        snakePosition = 0
    }
}
function initCamel () {
    camelSprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . f f f f . . . . . . . . . . . . . . . . . . . . . . . 
. . . . f f f f f f . . . . . . . . . . . . . . . . . . . . . . 
. . f f f . f f f f . . . f f . . . f f . . . . . . . . . . . . 
. . f f f f f f f f . . f f f f . f f f f . . . . . . . . . . . 
. . . . f f f f f . . . f f f f f f f f f f . . . . . . . . . . 
. . . f f f f f . . . f f f . . f . . . f f . . . . . . . . . . 
. . . . . f f f f . f f f . . . f f . . f f f f . . . . . . . . 
. . . . . f f f f f f f f f f f f f f f f f f f . . . . . . . . 
. . . . f f f f f f f f f f f f f f f f f f f f f . . . . . . . 
. . . . f f f f f f f f f f f f f f f f f f f . f f . . . . . . 
. . . f f f f f f f f f f f f f f f f f f f f . . . . . . . . . 
. . f f f f f f f f f f f f f f f f f f f f . . . . . . . . . . 
f f f f f f f f f f f . . . f f f f f f . . . . . . . . . . . . 
`, SpriteKind.Background)
    camelSprite.setPosition(61, 28)
}
let camelSprite: Sprite = null
let snakeYPositions: number[] = []
let snakePosition = 0
let snakeXPositions: number[] = []
let snakeSprite: Sprite = null
let playerYPositions: number[] = []
let playerPosition = 0
let playerXPositions: number[] = []
let playerSprite: Sprite = null
scene.setBackgroundColor(13)
initPlayer()
initEnemies()
initCamel()
game.onUpdate(function () {
    drawSprites()
})
game.onUpdateInterval(1000, function () {
    nextSnakePosition()
})
