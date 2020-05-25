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
    playerXPositions = [105, 85, 55]
    playerYPositions = [90, 100, 85]
    playerPosition = 0
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (playerPosition > 0 && playerPosition <= 2) {
        playerPosition = playerPosition - 1
    }
})
let playerYPositions: number[] = []
let playerXPositions: number[] = []
let playerSprite: Sprite = null
let playerPosition = 0
scene.setBackgroundColor(13)
initPlayer()
game.onUpdate(function () {
    playerSprite.setPosition(playerXPositions[playerPosition], playerYPositions[playerPosition])
})
