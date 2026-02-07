PlanetX_AILens.initModule()
PlanetX_AILens.switchfunc(PlanetX_AILens.FuncList.Ball)
basic.showIcon(IconNames.Asleep)
basic.forever(function () {
    PlanetX_AILens.cameraImage()
    if (PlanetX_AILens.ballColor(PlanetX_AILens.ballColorList.Red)) {
        basic.showIcon(IconNames.Happy)
    }
    if (PlanetX_AILens.ballColor(PlanetX_AILens.ballColorList.Blue)) {
        basic.showIcon(IconNames.Sad)
    }
})
