namespace SpriteKind {
    export const block = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`skyblock`, function (sprite6, location4) {
    tiles.setWallAt(location4, false)
    tiles.setTileAt(location4, assets.tile`baseTransparency16`)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    simplified.gravity_jump(mySprite, 200)
    animation.runImageAnimation(
    mySprite,
    assets.animation`jump`,
    150,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`chest2`, function (sprite7, location5) {
    info.changeLifeBy(1)
    if (level < 11) {
        level += 1
        if (level == 2) {
            tiles.setCurrentTilemap(tilemap`level2`)
        } else if (level == 3) {
            tiles.setCurrentTilemap(tilemap`level3`)
        } else if (level == 4) {
            tiles.setCurrentTilemap(tilemap`level4`)
        } else if (level == 5) {
            tiles.setCurrentTilemap(tilemap`level5`)
        } else if (level == 6) {
            tiles.setCurrentTilemap(tilemap`level6`)
        } else if (level == 7) {
            tiles.setCurrentTilemap(tilemap`level0`)
        } else if (level == 8) {
            tiles.setCurrentTilemap(tilemap`level16`)
        } else if (level == 9) {
            game.showLongText("Invisible level!!", DialogLayout.Bottom)
            tiles.setCurrentTilemap(tilemap`level14`)
        } else if (level == 10) {
            tiles.setCurrentTilemap(tilemap`level15`)
        }
        animation.runMovementAnimation(
        mySprite,
        animation.animationPresets(animation.flyToCenter),
        2000,
        false
        )
    } else if (level == 11) {
        game.gameOver(true)
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`f`, mySprite, 0, 0)
    projectile.setFlag(SpriteFlag.GhostThroughWalls, true)
    if (position == 1) {
        for (let index = 0; index < 20; index++) {
            projectile.x += 1
        }
        animation.runImageAnimation(
        projectile,
        assets.animation`splode`,
        100,
        false
        )
    } else if (position == 2) {
        for (let index = 0; index < 20; index++) {
            projectile.x += -1
        }
        animation.runImageAnimation(
        projectile,
        assets.animation`myAnim`,
        100,
        false
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`orange bauble`, function (sprite3, location2) {
    tiles.setTileAt(location2, assets.tile`baseTransparency16`)
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Bottom), assets.tile`baseTransparency16`)) {
        tiles.setWallAt(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Bottom), true)
        tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Bottom), assets.tile`bounce`)
    } else if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Bottom), assets.tile`myTile5`)) {
        tiles.setWallAt(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Bottom), true)
        tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Bottom), assets.tile`bounce`)
    } else {
    	
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite4, otherSprite2) {
    otherSprite2.destroy()
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite2, otherSprite) {
    otherSprite.destroy()
    tiles.placeOnTile(incan, tiles.getTileLocation(0, randint(10, 50)))
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`poison pit`, function (sprite, location) {
    tiles.placeOnTile(incan, tiles.getTileLocation(0, randint(10, 50)))
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    position = 2
    animation.runImageAnimation(
    mySprite,
    assets.animation`walk left`,
    150,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite11, otherSprite3) {
    tiles.placeOnTile(incan, tiles.getTileLocation(0, randint(10, 50)))
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`heart`, function (sprite3, location2) {
    tiles.setTileAt(location2, assets.tile`baseTransparency16`)
    info.changeLifeBy(1)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    position = 1
    animation.runImageAnimation(
    mySprite,
    assets.animation`walk right`,
    150,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`poison pit`, function (sprite9, location7) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`chest1`, function (sprite8, location6) {
    info.changeLifeBy(1)
    if (level < 11) {
        level += 1
        if (level == 2) {
            tiles.setCurrentTilemap(tilemap`level2`)
        } else if (level == 3) {
            tiles.setCurrentTilemap(tilemap`level3`)
        } else if (level == 4) {
            tiles.setCurrentTilemap(tilemap`level4`)
        } else if (level == 5) {
            tiles.setCurrentTilemap(tilemap`level5`)
        } else if (level == 6) {
            tiles.setCurrentTilemap(tilemap`level6`)
        } else if (level == 7) {
            tiles.setCurrentTilemap(tilemap`level0`)
        } else if (level == 8) {
            tiles.setCurrentTilemap(tilemap`level16`)
        } else if (level == 9) {
            game.showLongText("Invisible level!!", DialogLayout.Bottom)
            tiles.setCurrentTilemap(tilemap`level14`)
        } else if (level == 10) {
            tiles.setCurrentTilemap(tilemap`level15`)
        }
        animation.runMovementAnimation(
        mySprite,
        animation.animationPresets(animation.flyToCenter),
        2000,
        false
        )
    } else if (level == 11) {
        game.gameOver(true)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite5, location3) {
    pause(5000)
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`bounce`, function (sprite10, location8) {
    tiles.setWallAt(location8, false)
    tiles.setTileAt(location8, assets.tile`baseTransparency16`)
})
let position = 0
let projectile: Sprite = null
let mySprite: Sprite = null
let incan: Sprite = null
let level = 0
game.showLongText("Welcome!", DialogLayout.Bottom)
game.showLongText("This is the traveller a platformer shooter.", DialogLayout.Bottom)
game.showLongText("The controls:", DialogLayout.Bottom)
game.showLongText("a:place jump block underneath b:shoot", DialogLayout.Bottom)
game.showLongText("up, left, right: move", DialogLayout.Bottom)
game.showLongText("You lose lifes by walking into your projectiles or getting caught by the phantom incan", DialogLayout.Bottom)
level = 1
tiles.placeOnTile(incan, tiles.getTileLocation(0, randint(10, 50)))
scene.setBackgroundImage(assets.image`background`)
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(assets.image`stand`, SpriteKind.Player)
incan = sprites.create(assets.image`myImage`, SpriteKind.Enemy)
tiles.placeOnTile(incan, tiles.getTileLocation(0, randint(10, 50)))
incan.setFlag(SpriteFlag.GhostThroughWalls, true)
incan.follow(mySprite, 50)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 500
let block_no = 15
scene.cameraFollowSprite(mySprite)
