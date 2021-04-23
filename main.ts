controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . 2 2 . . . 
        . . . 2 2 . . . 
        . . . 2 2 . . . 
        . . . 2 2 . . . 
        `, survivor, 0, -140)
    projectile.startEffect(effects.coolRadial, 100)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy(effects.fire, 100)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    scene.cameraShake(8, 500)
    otherSprite.destroy(effects.disintegrate)
    sprite.startEffect(effects.fire, 200)
    info.changeLifeBy(-1)
})
let projectile: Sprite = null
let survivor: Sprite = null
game.splash("You are the last surviving pilot. ", "Destroy as many enemy ships as you can.")
game.splash("Good luck!")
survivor = sprites.create(img`
    ........................
    ........................
    ........................
    ...........2............
    ...........1............
    ...........1............
    ...........1............
    ..........111...........
    ..........111...........
    ..........111...........
    ..........111...........
    ..........111...........
    ..........111...........
    .........11111..........
    .........11111..........
    .........11111..........
    .........11111..........
    ........1111111.........
    ......11111111111.......
    ....111111111111111.....
    ...21111111111111112....
    .....1111111111111......
    ........1111111.........
    .........dd.dd..........
    ........2442442.........
    .......224424422........
    ........2425242.........
    ........2225222.........
    .........22222..........
    .........2...2..........
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
survivor.setStayInScreen(true)
let aliens = [
img`
    e e 2 4 2 2 2 2 e e c c c c c c 
    e e 2 2 4 2 2 2 e e c c c c c c 
    . e e 2 4 2 2 2 2 e e c c c c . 
    . . e e f f e e c c f f f c . . 
    . . . . e e 4 2 2 2 e e . . . . 
    . . . . . e e e c c c . . . . . 
    . . . . . . e 4 2 e . . . . . . 
    . . . . . . e 4 e e . . . . . . 
    . . . . . . . 2 e . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . 2 c . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . b c . . . . . . . 
    . . . . . . . d c . . . . . . . 
    . . . . . . . d c . . . . . . . 
    . . . . . . . d c . . . . . . . 
    `,
img`
    a a 3 1 3 3 3 3 a a 8 8 8 8 8 8 
    a a 3 3 1 3 3 3 a a 8 8 8 8 8 8 
    . a a 3 1 3 3 3 3 a a 8 8 8 8 . 
    . . a a f f a a c c f f f 8 . . 
    . . . . a a 1 3 3 3 8 8 . . . . 
    . . . . . a a a c c c . . . . . 
    . . . . . . a 1 3 8 . . . . . . 
    . . . . . . a 1 8 8 . . . . . . 
    . . . . . . . 3 8 . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . 3 c . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . b c . . . . . . . 
    . . . . . . . d c . . . . . . . 
    . . . . . . . d c . . . . . . . 
    . . . . . . . d c . . . . . . . 
    `,
img`
    2 2 4 5 4 4 4 4 2 2 e e e e e e 
    2 2 4 4 5 4 4 4 2 2 e e e e e e 
    . 2 2 4 5 4 4 4 4 2 2 e e e e . 
    . . 2 2 f f 2 2 c c f f f e . . 
    . . . . 2 2 5 4 4 4 e e . . . . 
    . . . . . 2 2 2 c c c . . . . . 
    . . . . . . 2 5 4 e . . . . . . 
    . . . . . . 2 5 e e . . . . . . 
    . . . . . . . 4 e . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . 4 c . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . b c . . . . . . . 
    . . . . . . . d c . . . . . . . 
    . . . . . . . d c . . . . . . . 
    . . . . . . . d c . . . . . . . 
    `,
img`
    8 8 8 8 8 8 8 8 6 6 6 6 9 6 8 8 
    8 8 8 8 8 8 8 8 6 6 6 9 6 6 8 8 
    . 8 8 8 8 8 8 6 6 6 6 9 6 8 8 . 
    . . 8 f f f c c e e f f 8 8 . . 
    . . . . 8 8 6 6 6 9 8 8 . . . . 
    . . . . . c c c 8 8 8 . . . . . 
    . . . . . . 8 6 9 8 . . . . . . 
    . . . . . . 8 8 9 8 . . . . . . 
    . . . . . . . 8 6 . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . c 6 . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . c b . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    `,
img`
    6 6 7 5 7 7 7 7 6 6 8 8 8 8 8 8 
    6 6 7 7 5 7 7 7 6 6 8 8 8 8 8 8 
    . 6 6 7 5 7 7 7 7 6 6 8 8 8 8 . 
    . . 6 6 f f 6 6 c c f f f 8 . . 
    . . . . 6 6 5 7 7 7 8 8 . . . . 
    . . . . . 6 6 6 c c c . . . . . 
    . . . . . . 6 5 7 8 . . . . . . 
    . . . . . . 6 5 8 8 . . . . . . 
    . . . . . . . 7 8 . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . 7 c . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . b c . . . . . . . 
    . . . . . . . d c . . . . . . . 
    . . . . . . . d c . . . . . . . 
    . . . . . . . d c . . . . . . . 
    `,
img`
    e e 2 4 2 2 2 2 e e c c c c c c 
    e e 2 2 4 2 2 2 e e c c c c c c 
    . e e 2 4 2 2 2 2 e e c c c c . 
    . . e e f f e e c c f f f c . . 
    . . . . e e 4 2 2 2 e e . . . . 
    . . . . . e e e c c c . . . . . 
    . . . . . . e 4 2 e . . . . . . 
    . . . . . . e 4 e e . . . . . . 
    . . . . . . . 2 e . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . 2 c . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . b c . . . . . . . 
    . . . . . . . d c . . . . . . . 
    . . . . . . . d c . . . . . . . 
    . . . . . . . d c . . . . . . . 
    `
]
controller.moveSprite(survivor, 100, 100)
survivor.bottom = 120
info.setLife(4)
scene.setBackgroundImage(img`
    444444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    4444444444444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    44444444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    4444444444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    44444444444444444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    4444444444444444444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    44444444444444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    4444444444444444444444444444ffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    44444444444444444444444444448888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    44444444444444444444444444444ff888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    4444444444444444444444444444444fff888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffff
    44444444444444444444444444444444ffff888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    44444444444444444444444444444444fffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffff
    444444444444444444444444444444444fffffff88ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888ffffffffffffff
    444444444444444444444444444444444ffffffff88ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffff8fffffffffffff
    4444444444444444444444444444444444ffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fffff8fffffffffffff
    4444444444444444444444444444444444ffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fffffff8ffffffffffff
    44444444444444444444444444444444444fffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffff8ffffffffffff
    44444444444444444444444444444444444fffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fffffffff8fffffffffff
    44444444444444444444444444444444444fffffff8fffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffff8fffffffff8fffffffffff
    444444444444444441444444444444444444ffffff8ffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fffffffffff8ffffffffff
    444444444444444444444444444444444444ffffff8fffffffffffffffffff1ffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8fffffffff
    444444444444444444444444444444444444ffffff8ffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffff8fffffffff
    884444444444444444444444444444444444fffff8fffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffff8fffffffff
    448884444444444444444444444444444444fffff8fffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffff8fffffffff
    444448844444444444444444444444444444fffff8ffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffff8ffffffff
    444444488844444444444444444444444444fffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffff8ffffffff
    44444444448844444444444444444444444fffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffff8fffffff
    4444444444448884444444444444444444fffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff8fffffff
    4444444444444448884444444444444444ffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffff8ffffff
    444444444444444444888844444444444ffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444444444444444444448444444
    4444444444444444444444888888888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44444444444444444444448444444
    4444444444444444444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4444444444444444444444448444444
    444444444444444444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffff4444444444444444444444448444444
    4444444414444444444444444444fffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffff44444444444444444444444448444444
    444444444444444444444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f44444444444444444444444448444444
    44444444444444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1444444444444444444444444448444444
    4444444444444444444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4444444444444444444444444444844444
    44444444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4444444444444444444444444444844444
    4444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4444444444444444444444444444844444
    4444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11fffffffffffffffffff4444444444444444444444444444844444
    44444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffff44444444444444444444444444444844444
    44fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44444444444444444444444444444844444
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffff444444444444444444444444444444844444
    fffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444444444444444444444144444444844444
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444444444444444444444444444444844444
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4444444444444444444444444444444844444
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4444444444444444444444444444444844444
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffff4444444444444444444444444444444844444
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffff4444444444444444444444444444444844444
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffff4444444444444444444444444444444844444
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffff4444444444444444444444444444444844444
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffff4444444444444444444444444444444844444
    fffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffff1ffffffffffffffffffffff4444444444444414444444444444444844444
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffff1ffffffffffffffffffffff4444444444444444444444444444444844444
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11fffffffffffffffffffffffffffffffff444444444444444444444444444444844444
    fffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffff11111111fffffffffffffffffffffffffffffffffffffffffffffff444444444444444444444444444444844444
    ffffffffffffffffffffff2f2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44444444444444444444444444444844444
    fffffffffffffffffffff2ff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44444444444444444444444444444844444
    ffffffffffffff1ffffff2ff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4444444444444444444444444444844444
    ffffffffffffffffffff2fff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4444444444444444444444444444844444
    fffffffffffffffffff2ffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444444444444444444444444444844444
    fffffffffffffffffff2ffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444444444444444444444444444844444
    fff22fffffffffffff2ffffff21fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44444444444444444444444444844444
    fff22fffffffffffff2ffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4444444444444444444444444844444
    fff22ffffffffffff2fffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffff4444444444444444444444444844444
    fff2f2fffffffffff2ffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444444444444444444444444844444
    fff2f2fffffffffff2ffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44444444444444444144444844444
    fff2ff2fffffffff2fffffffff2ffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44444444444444444444444844444
    fff2ff2fffffffff2fffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4444444444444444444444844444
    fff2ff2fffffffff2fffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444444444444444444444844444
    fff2fff2ffffffff2fffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44444444444444444444844444
    fff2fff2ffffffff2fffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffff4444444444444444444844444
    fff2ffff2fffffff2fffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444444444444444444844444
    fff2ffff2fffffff2ffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44444444444444444844444
    fff2ffff2fffffff2ffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffff4444444444444444844444
    feeeeeee2eeeffff2ffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444444444444444844444
    eeeeeeee2eeeeeeeeffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4444444444444844444
    eeeeeeeee2eeeeeeeeeeeefffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444444444444844444
    eeeeeeeee2eeeeeeeeeeeeeeeee2fffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff48444444444844444
    eeeeeeeee2eeeeeeeeeeeeeeeee2efffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffff8444444444844444
    eeeeeeeee2eeeeeeeeeeeeeeeee2eeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f44444448444444
    eeeeeeeeee2eeeeeeeeeeeeeeeee2eeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ff4444448444444
    eeeeeeeeee2eeeeeeeeeeeeeeeee2eeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fff44484444444
    eeeeeeeeee2eeeeeeeeeeeeeeeee2eeeeeefffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fffff484444444
    eeeeeeee1e2eeeeeeeeeeeeeeeee2eeeeeeef1fffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffff8f4444444
    eeeeeeeeee2eeeeeeeeeeeeeeeee2eeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffff8fff44444
    eeeeeeeeee2eeeeeeeeeeeeeeeee2eeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fff8fffffffff
    eeeeeeeeeee2eeeeeeeeeeeeeeee2eeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ff8ffffffffff
    eeeeeeeeeee2eeeeeeeeee1eeeee2eeeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff88fffffffffff
    eeeeeeeeeee2eeeeeeeeeeeeeeeee2eeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff
    eeeeeeeeeee2eeeeeeeeeeeeeeeee2eeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff
    eeeeeeeeeeee2eeeeeeeeeeeeeeee2eeeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    eeeeeeeeeeee2eeeeeeeeeeeeeeee2eeeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    eeeeeeeeeeee2eeeeeeeeeeeeeeee2eeeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    eeeeeeeeeeee2eeeeeeeeeeeeeeee2eeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    eeeeeeeeeeeee2eeeeeeeeeeeeeeee2eeeeeeeeeefffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    eeeeeeeeeeeee2eeeeeeeeeeeeeeee2eeeeeeeeeefffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    eeeeeeeeeeeee2eeeeeeeeeeeeeeee2eeeeeeeeeeeffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    eeeeeeeeeeeee2eeeeeeeeeeeeeeee2eeeeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    eeeeeeeeeeeee2eeeeeeeeeeeeeeee2eeeeeeeeeeeeffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    eeeeeeeeeeeee2eeeeeeeeeeeeeeee2eeeeeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffff
    eeeeeeeeeeeee2eeeeeeeeeeeee1ee2eeeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    eeeeeeeeeeeeee2eeeeeeeeeeeeeee2eeeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    eeeeeeeeeeeeee2eeeeeeeeeeeeeeee2eeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    eeeeeeeeeee1ee2eeeeeeeeeeeeeeee2eeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    eeeeeeeeeeeeee2eeeeeeeeeeeeeeee2eeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    eeeeeeeeeeeeee2eeeeeeeeeeeeeeee2eeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    eeeeeeeeeeeeeee2eeeeeeeeeeeeeee2eeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fff
    eeeeeeeeeeeeeee2eeeeeeeeeeeeeee2eeeeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffff
    eeeeeeeeeeeeeee2eeeeeeeeeeeeeee2eeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    eeeeeeeeeeeeeee2eeeeeeeeeeeeeee2eeeeeeeeeeefffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    eeeeeeeeeeeeeee2eeeeeeeeeeeeeee2eeeeeeeeeeeffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    eeeeeeeeeeeeeee2eeeeeeeeeeeeeee2eeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    eeeeeeeeeeeeeee2eeeeeeeeeeeeeee2eeeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    eeeeeeeeeeeeeee2eeeeeeeeeeeeeee2eeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    eeeeeeeeeeeeeee2eeeeeeeeeeeeeee2eeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    eeeeeeeeeeeeeee2eeeeeeeeeeeeee22eeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    eeeeeeeeeeeeee2eeeeeeeeeeeeeee2eeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    eeeeeeeeeeeeee2eeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSide(aliens[randint(0, aliens.length - 1)], 0, 75)
    projectile.setKind(SpriteKind.Enemy)
    projectile.x = randint(10, 150)
})
