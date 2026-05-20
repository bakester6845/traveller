def on_up_pressed():
    simplified.gravity_jump(mySprite, 200)
    animation.run_image_animation(mySprite, assets.animation("""
        jump
        """), 150, False)
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_b_pressed():
    global projectile
    projectile = sprites.create_projectile_from_sprite(assets.image("""
        f
        """), mySprite, 0, 0)
    projectile.set_flag(SpriteFlag.GHOST_THROUGH_WALLS, True)
    if position == 1:
        for index in range(20):
            projectile.x += 1
        animation.run_image_animation(projectile,
            assets.animation("""
                splode
                """),
            100,
            False)
    elif position == 2:
        for index2 in range(20):
            projectile.x += -1
        animation.run_image_animation(projectile,
            assets.animation("""
                myAnim
                """),
            100,
            False)
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def on_a_pressed():
    tiles.set_wall_at(tiles.location_in_direction(tiles.location_of_sprite(mySprite),
            CollisionDirection.BOTTOM),
        True)
    tiles.set_tile_at(tiles.location_in_direction(tiles.location_of_sprite(mySprite),
            CollisionDirection.BOTTOM),
        assets.tile("""
            bounce
            """))
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_overlap_tile(sprite, location):
    tiles.place_on_tile(incan, tiles.get_tile_location(0, randint(10, 50)))
scene.on_overlap_tile(SpriteKind.enemy,
    assets.tile("""
        poison pit
        """),
    on_overlap_tile)

def on_left_pressed():
    global position
    position = 2
    animation.run_image_animation(mySprite,
        assets.animation("""
            walk left
            """),
        150,
        True)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_on_overlap(sprite2, otherSprite):
    otherSprite.destroy()
    tiles.place_on_tile(incan, tiles.get_tile_location(0, randint(10, 50)))
sprites.on_overlap(SpriteKind.enemy, SpriteKind.projectile, on_on_overlap)

def on_overlap_tile2(sprite3, location2):
    tiles.set_tile_at(location2, assets.tile("""
        baseTransparency16
        """))
    info.change_score_by(1)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        orange bauble
        """),
    on_overlap_tile2)

def on_right_pressed():
    global position
    position = 1
    animation.run_image_animation(mySprite,
        assets.animation("""
            walk right
            """),
        150,
        True)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_on_overlap2(sprite4, otherSprite2):
    otherSprite2.destroy()
    info.change_life_by(-1)
sprites.on_overlap(SpriteKind.player, SpriteKind.projectile, on_on_overlap2)

def on_overlap_tile3(sprite5, location3):
    game.game_over(False)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.hazard_lava1,
    on_overlap_tile3)

def on_overlap_tile4(sprite6, location4):
    tiles.set_wall_at(location4, False)
    tiles.set_tile_at(location4, assets.tile("""
        baseTransparency16
        """))
scene.on_overlap_tile(SpriteKind.projectile,
    assets.tile("""
        skyblock
        """),
    on_overlap_tile4)

def on_overlap_tile5(sprite7, location5):
    global level
    if level < 11:
        level += 1
        if level == 2:
            tiles.set_current_tilemap(tilemap("""
                level2
                """))
        elif level == 3:
            tiles.set_current_tilemap(tilemap("""
                level3
                """))
        elif level == 4:
            tiles.set_current_tilemap(tilemap("""
                level4
                """))
        elif level == 5:
            tiles.set_current_tilemap(tilemap("""
                level5
                """))
        elif level == 6:
            tiles.set_current_tilemap(tilemap("""
                level6
                """))
        elif level == 7:
            tiles.set_current_tilemap(tilemap("""
                level0
                """))
        elif level == 8:
            tiles.set_current_tilemap(tilemap("""
                level16
                """))
        elif level == 9:
            game.show_long_text("Invisible level!!", DialogLayout.BOTTOM)
            tiles.set_current_tilemap(tilemap("""
                level14
                """))
        elif level == 10:
            tiles.set_current_tilemap(tilemap("""
                level15
                """))
        animation.run_movement_animation(mySprite,
            animation.animation_presets(animation.fly_to_center),
            2000,
            False)
    elif level == 11:
        game.game_over(True)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        chest2
        """),
    on_overlap_tile5)

def on_overlap_tile6(sprite8, location6):
    global level
    if level < 11:
        level += 1
        if level == 2:
            tiles.set_current_tilemap(tilemap("""
                level2
                """))
        elif level == 3:
            tiles.set_current_tilemap(tilemap("""
                level3
                """))
        elif level == 4:
            tiles.set_current_tilemap(tilemap("""
                level4
                """))
        elif level == 5:
            tiles.set_current_tilemap(tilemap("""
                level5
                """))
        elif level == 6:
            tiles.set_current_tilemap(tilemap("""
                level6
                """))
        elif level == 7:
            tiles.set_current_tilemap(tilemap("""
                level0
                """))
        elif level == 8:
            tiles.set_current_tilemap(tilemap("""
                level16
                """))
        elif level == 9:
            game.show_long_text("Invisible level!!", DialogLayout.BOTTOM)
            tiles.set_current_tilemap(tilemap("""
                level14
                """))
        elif level == 10:
            tiles.set_current_tilemap(tilemap("""
                level15
                """))
        animation.run_movement_animation(mySprite,
            animation.animation_presets(animation.fly_to_center),
            2000,
            False)
    elif level == 11:
        game.game_over(True)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        chest1
        """),
    on_overlap_tile6)

def on_overlap_tile7(sprite9, location7):
    game.game_over(False)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        poison pit
        """),
    on_overlap_tile7)

def on_overlap_tile8(sprite10, location8):
    tiles.set_wall_at(location8, False)
    tiles.set_tile_at(location8, assets.tile("""
        baseTransparency16
        """))
scene.on_overlap_tile(SpriteKind.projectile,
    assets.tile("""
        bounce
        """),
    on_overlap_tile8)

def on_on_overlap3(sprite11, otherSprite3):
    tiles.place_on_tile(incan, tiles.get_tile_location(0, randint(10, 50)))
    info.change_life_by(-1)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap3)

position = 0
projectile: Sprite = None
mySprite: Sprite = None
incan: Sprite = None
level = 0
level = 1
tiles.place_on_tile(incan, tiles.get_tile_location(0, randint(10, 50)))
scene.set_background_image(assets.image("""
    background
    """))
tiles.set_tilemap(tilemap("""
    level1
    """))
mySprite = sprites.create(assets.image("""
    stand
    """), SpriteKind.player)
incan = sprites.create(assets.image("""
    myImage
    """), SpriteKind.enemy)
controller.move_sprite(mySprite, 100, 0)
mySprite.ay = 500
incan.ay = 500
block_no = 15
scene.camera_follow_sprite(mySprite)

def on_update_interval():
    tiles.place_on_tile(incan, tiles.get_tile_location(0, randint(10, 50)))
    incan.follow(mySprite, 50)
game.on_update_interval(5000, on_update_interval)
