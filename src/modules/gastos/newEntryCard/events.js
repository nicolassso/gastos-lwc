export class SubmitEntry extends CustomEvent {
    constructor(detail) {
        super(SubmitEntry.type, { detail });
    }

    static get type() {
        return 'submitentry';
    }
}
