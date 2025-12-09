while (true) {
    if (input.temperature() > 22) {
        basic.showString("calor")
    } else {
        basic.showString("fred")
    }
    if (input.lightLevel() > 200) {
        music.play(music.stringPlayable("G B A G C5 B A B ", 120), music.PlaybackMode.InBackground)
    } else {
        if (input.lightLevel() < 50) {
            music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.InBackground)
        }
    }
}
