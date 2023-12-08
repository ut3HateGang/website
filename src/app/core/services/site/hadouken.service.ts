import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class HadoukenService {
    private __isOn: boolean = false;

    private __keySequence: string[] = [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
        'A', 'B'
    ];
    private __sequenceState: number = 0;

    constructor() { }

    public keyEventDetected(keyName: String): void {
        if (keyName.toUpperCase() == this.__keySequence[this.__sequenceState].toUpperCase()) {
            if (this.__sequenceState == this.__keySequence.length - 1) {
                this.switchIsOn();
            } else {
                this.__sequenceState++;
            }
        } else {
            this.__sequenceState = 0;
        }
    }

    private switchIsOn(): void {
        this.__isOn = !this.__isOn;
        this.__sequenceState = 0;
        console.log('Hadouken mode:', this.__isOn);
    }

    get isOn(): boolean {
        return this.__isOn;
    }
}