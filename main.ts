input.onButtonPressed(Button.A, function () {
    music.play(music.createSoundExpression(WaveShape.Sawtooth, 1, 5000, 0, 255, 5000, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        # # # # #
        # . . . #
        # # # # #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
})
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
music.play(music.tonePlayable(262, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
