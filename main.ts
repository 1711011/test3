music.setVolume(255)
basic.forever(function () {
	
})
basic.forever(function () {
    music.playTone(262, music.beat(BeatFraction.Half))
    basic.pause(200)
    music.playTone(330, music.beat(BeatFraction.Half))
})
