export const lengthAwareMixin = {
    computed: {
        calculatorOfStringLength() {
            return this.secondText.length > 0
                ? `${this.secondText} (${this.secondText.length})`
                : null;
        }
    }
}