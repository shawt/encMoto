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

namespace motoBit {
    /**
	 * Sets the speed and direction of either the left motor or the right motor.
     * @param motor the motor to act on
     * @param direction forward or backward
     * @param speed percent of maximum speed, eg: 50
	 */
 

    /**
     * A function that returns a non-void argument generates a reporter block (oval shape).
     */
    //% block
    export function expression(): number {
        return 0;
    }

   
    /**
     * When a function has many arguments, it switches to a vertical layout
     */
    //% blockID="encodedMotor" block="Encoded Motor|Enc:Wheel Ratio $ratio |Motor $mc | Direction $dir | to low $toLow|high $toHigh"
    export function drive(ratio: number, mc: motorChoice, dir: motorDir, arg4: number, arg5: number) {

    }

   
}
