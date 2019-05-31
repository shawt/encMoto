
//% color="#AA278D"

enum motorChoice {
    //% block="left"
    Left,
    //% block="right"
    Right,
    //% block="both"
    Both
}

enum motorDir {
    //% block="Forward"
    fwd,
    //% block="Backward"
    bak,
    //% block="Spin"
    sp
}

enum encPin {
    //% block="P0"
    p0,
    //% block=P1"
    p1,
    //% block="P2"
    p2,
    //% block="P8"
    p8,
    //% block="P12"
    p12,
    //% blcok="P14"
    p14
}



namespace motoBit {
    /**
	 * Sets the speed and direction of either the left motor or the right motor.
     * @param motor the motor to act on
     * @param direction forward or backward
     * @param speed percent of maximum speed, eg: 50
	 */
 


   
    /**
     * When a function has many arguments, it switches to a vertical layout
     */
    //% blockID="encodedMotor" block="Encoded Motor|Enc:Wheel Ratio $ratio Lenc $le Renc $re Motor $mc Direction $dir Speed $sp Rotations $rt"
    //% ratio.defl=48
    //% sp.defl=50
    export function drive(ratio: number, le: encPin, re: encPin, mc: motorChoice, dir: motorDir, sp: number, rt: number) {

    }

   
}
